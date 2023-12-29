const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const connectDB = require('../config/db').connectDB;

// for first time user authentication
// @route api/path
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    console.log('get part of login auth');
    //console.log(req);

    const name = req.user.name;

    //console.log('Token received, user is- ' + name);

    //commenting this part because it is for model based database
    //const user = await User.findById(req.user.id).select('-password');

    //write query to find the user
    const sqlFindUser = "SELECT * from user where name = '" + name + "'";

    try {
      connectDB.query(sqlFindUser, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          //console.log('User found: ', result[0]);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const temp = JSON.parse(JSON.stringify(result[0]));
          console.log(temp.name);
          const dbrow = JSON.stringify(result)[0].name;
          const payload = {
            user: {
              name: temp.name,
              id: temp.id,
            },
          };
          console.log('Login payload is- ' + JSON.stringify(payload));
          res.json(payload);
        } else {
          console.log('Token is invalid');
          res.send('FAIL');
          return;
        }

        // not found Tutorial with the id
      });

      //res.send('User Route');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route api/path
// @desc logging in
// @access public
router.post(
  '/',
  check('email', 'Name should be entered').notEmpty(),
  check('password', 'password must be atleast 6 characters').isLength({
    min: 6,
  }),

  async (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    console.log('post part of login auth');
    // see if user exists
    const { email, password } = req.body;
    const sqlLogin =
      "SELECT * from user where name = '" +
      email +
      "' and password = '" +
      password +
      "'";
    console.log(sqlLogin);
    try {
      connectDB.query(sqlLogin, (err, result) => {
        if (err) {
          console.log('error: ', err);
          return;
        }

        if (result.length) {
          console.log('User found: ', result[0]);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const temp = JSON.parse(JSON.stringify(result[0]));
          console.log(temp.name);
          const dbrow = JSON.stringify(result)[0].name;
          const payload = {
            user: {
              name: temp.name,
              id: temp.id,
            },
          };
          console.log('payload is- ' + JSON.stringify(payload));
          jwt.sign(
            payload,
            config.get('jwtSecret'),
            //'secret',
            { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        } else {
          console.log('Invalid credentials');
          res.send('FAIL');
          return;
        }

        // not found Tutorial with the id
      });

      const salt = await bcrypt.genSalt(10);

      passwordEncrypted = await bcrypt.hash(password, salt);
      console.log('Encrypted password is- ' + passwordEncrypted);

      //res.send('User Route');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;

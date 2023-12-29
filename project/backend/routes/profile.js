const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const connectDB = require('../config/db').connectDB;

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get(
  '/me',
  [auth, [check('status', 'Status is required').not().isEmpty()]],
  async (req, res) => {
    try {
      console.log('get part of routes/profile');
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
            //console.log(temp.name);
            const dbrow = JSON.stringify(result)[0].name;
            const payload = {
              temp,
            };
            //console.log('payload is- ' + JSON.stringify(payload));
            res.json(payload);
          } else {
            //console.log('Token is invalid');
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
  }
);

module.exports = router;

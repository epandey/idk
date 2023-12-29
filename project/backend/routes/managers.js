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
router.get('/', auth, async (req, res) => {
  try {
    console.log('get part of managers.js');

    //write query to get all the project items
    const sqlgetPersons = 'SELECT * from person';

    try {
      connectDB.query(sqlgetPersons, (err, result) => {
        if (err) {
          console.log('Error in getting project classes: ', err);
          return;
        }

        if (result.length) {
          const managers = JSON.parse(JSON.stringify(result));
          const payload = {
            managers,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(managers);
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

module.exports = router;

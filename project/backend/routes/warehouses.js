const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const functions = require('../sql/functions');

const connectDB = require('../config/db').connectDB;

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    console.log('get part of warehouse.js');
    // warehouses = functions.getWarehouses();
    // console.log(
    //   'Warehouses from functions is-',
    //   functions.getWarehouses(callback)
    // );

    //write query to get all the project items
    const sqlgetWarehouses =
      'SELECT warehouse.*, city.id as cityid, city.name as cityname from warehouse INNER JOIN city on warehouse.city_id = city.id';

    try {
      connectDB.query(sqlgetWarehouses, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          console.log('User found: ', result[0]);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const warehouses = JSON.parse(JSON.stringify(result));
          const payload = {
            warehouses,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(warehouses);
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

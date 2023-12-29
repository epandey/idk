const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const connectDB = require('../config/db').connectDB;

function getWarehouses(callback) {
  console.log('Function called');

  const sqlWarehouse =
    'SELECT warehouse.*, city.id as cityid, city.name as cityname from warehouse INNER JOIN city on warehouse.city_id = city.id';

  try {
    connectDB.query(sqlWarehouse, (err, result) => {
      if (err) {
        console.log('Error in finding user from token: ', err);
        return callback(err, null);
      }

      if (result.length) {
        console.log('Warehouses length is: ', result.length);

        return callback(null, JSON.parse(JSON.stringify(result)));
      } else {
        return null;
      }

      // not found Tutorial with the id
    });

    //res.send('User Route');
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'Johny1';
  callback(name);
}

processUserInput(greeting);

module.exports = {
  getWarehouses,
};

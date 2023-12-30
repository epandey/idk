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
router.post('/', auth, async (req, res) => {
  try {
    console.log('invoice.js- Post');

    //write query to get all the project items
    const sqlgetInvoices = `SELECT i.*, p.*, cd.*, pc.*, pt.*, ps.*, w.*
    FROM invoice i
    JOIN project p ON p.id = i.invoice_id
    LEFT JOIN closeoutdetails cd ON cd.id = p.closeoutDetails_id
    LEFT JOIN projectclass pc ON pc.id = p.projectClass_id
    LEFT JOIN projectitem pt ON pt.id = p.projectItem_id
    LEFT JOIN projectstatus ps ON ps.id = p.status_id
    LEFT JOIN warehouse w ON w.id = p.warehouse_id;`;

    try {
      connectDB.query(sqlgetInvoices, (err, result) => {
        if (err) {
          console.log('Error in getting invoices: ', err);
          return;
        }

        if (result.length) {
          const invoices = JSON.parse(JSON.stringify(result));

          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(invoices);
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

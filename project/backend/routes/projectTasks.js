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
  console.log('Fetch request received');
  try {
    console.log('get part of projectTasks.js');

    //write query to get all the project items
    const sqlFindUser = 'SELECT * from task';

    try {
      connectDB.query(sqlFindUser, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          console.log('User found: ', result[0]);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const projectTasks = JSON.parse(JSON.stringify(result));
          const payload = {
            projectTasks,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(projectTasks);
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
// @route    PUT api/tasks
// @desc     Update tasks
// @access   Private
router.put('/update-tasks', auth, async (req, res) => {
  console.log('Update request received with data:', req.body);
  try {
    const updatedTasks = req.body.updatedTasks;
    const updatePromises = updatedTasks.map(task => {
      return new Promise((resolve, reject) => {
        const sqlUpdateTask = `UPDATE task SET status = ? WHERE id = ?`;
        connectDB.query(sqlUpdateTask, [task.status, task.id], (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      });
    });

    try {
      await Promise.all(updatePromises);
      res.json({ msg: 'Tasks updated successfully' });
    } catch (err) {
      console.error('Error in updating tasks:', err);
      res.status(500).send('Error in updating tasks');
    }
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const warehouses = require('../sql/functions');

const connectDB = require('../config/db').connectDB;

function multilineToSingle(multiline) {}

// @route    GET api/projects
// @desc     Get all the projects for that limit
// @access   Private
router.post('/', auth, async (req, res) => {
  try {
    console.log('All projects fetching....');
    //console.log(req);

    const name = req.user.name;

    console.log('Token received, user is- ' + name);

    //commenting this part because it is for model based database
    //const user = await User.findById(req.user.id).select('-password');

    //write query to find the user
    //const sqlFindProjects =
    //  'SELECT * FROM miller_dev.project JOIN miller_dev.warehouse where miller_dev.project.id in (SELECT miller_dev.project_managers.project_id from miller_dev.project_managers where id = 7) ORDER BY project.id DESC limit 4;';

    const sqlFindProjects =
      'SELECT project.id as pid, project.*, warehouse.id as wid, warehouse.*, city.id as cid, city.name as cityname, projectitem.id as projitemid, projectitem.name as projitemname, projectstatus.id as status_id, projectstatus.name as status_name, project_managers.id as project_manager_id, person.name as project_manager FROM project JOIN warehouse, city, projectitem, projectstatus, project_managers, person where project.warehouse_id = warehouse.id and city.id = warehouse.city_id and projectitem.id = project.projectItem_id and project.status_id = projectstatus.id and project.id = project_managers.project_id and project_managers.id = person.id ORDER BY project.id desc';
    try {
      connectDB.query(sqlFindProjects, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          console.log('Retrieved Projects: ', result.length);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const temp = JSON.parse(JSON.stringify(result));
          //console.log(temp[0]);
          const dbrow = JSON.stringify(result)[0].name;

          // var i = 0;
          // for (warehouse in temp) {
          //   //obj = whatever field its currently on (name, email, w/e)
          //   console.log(warehouse);
          //   const sqlFindWarehouse =
          //     "Select * from miller_dev.warehouse where id = '" +
          //     result[i].warehouseID +
          //     "'";

          //   connectDB.query(sqlFindWarehouse, (err1, resWarehouse) => {
          //     if (err1) {
          //       console.log('Error in finding user from token: ', err1);
          //       return;
          //     }

          //     if (resWarehouse.length) {
          //       console.log('temp value is ', warehouse);
          //       temp[i]['warehouse'] = JSON.parse(JSON.stringify(resWarehouse));
          //     }
          //   });

          //   i += 1;
          // }
          const payload = {
            projects: temp,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
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

// @route    GET api/projects/me
// @desc     Get current users projects where the user is manager to all those projects
// @access   Private
router.post('/me', auth, async (req, res) => {
  try {
    console.log('get part of routes/projects');
    //console.log(req);

    const name = req.user.name;

    console.log('Token received, user is- ' + name);

    //commenting this part because it is for model based database
    //const user = await User.findById(req.user.id).select('-password');

    //write query to find the user
    //const sqlFindProjects =
    //  'SELECT * FROM miller_dev.project JOIN miller_dev.warehouse where miller_dev.project.id in (SELECT miller_dev.project_managers.project_id from miller_dev.project_managers where id = 7) ORDER BY project.id DESC limit 4;';

    const sqlFindProjects =
      'SELECT project.id as pid, project.*, warehouse.id as wid, warehouse.*, city.id as cid, city.* FROM project JOIN warehouse, city where project.warehouse_id = warehouse.id and city.id = warehouse.city_id and project.id in (SELECT miller_dev.project_managers.project_id from miller_dev.project_managers where id = 7) ORDER BY project.id desc limit 4';

    try {
      connectDB.query(sqlFindProjects, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          console.log('Retrieved Projects: ', result.length);
          //res.send('SUCCESS');
          // if user is found then create a payload
          //console.log(JSON.stringify(result[0]));
          const temp = JSON.parse(JSON.stringify(result));
          //console.log(temp[0]);
          const dbrow = JSON.stringify(result)[0].name;

          // var i = 0;
          // for (warehouse in temp) {
          //   //obj = whatever field its currently on (name, email, w/e)
          //   console.log(warehouse);
          //   const sqlFindWarehouse =
          //     "Select * from miller_dev.warehouse where id = '" +
          //     result[i].warehouseID +
          //     "'";

          //   connectDB.query(sqlFindWarehouse, (err1, resWarehouse) => {
          //     if (err1) {
          //       console.log('Error in finding user from token: ', err1);
          //       return;
          //     }

          //     if (resWarehouse.length) {
          //       console.log('temp value is ', warehouse);
          //       temp[i]['warehouse'] = JSON.parse(JSON.stringify(resWarehouse));
          //     }
          //   });

          //   i += 1;
          // }
          const payload = {
            projects: temp,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
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

// @route    GET api/projects/id
// @desc     Get the current project that has been clicked
// @access   Private
router.post('/id', auth, async (req, res) => {
  try {
    console.log('get part of routes/projects/id');
    console.log(req.body);

    const pid = req.body.id || 1;

    console.log('Project id for project to get is- ' + pid);

    const sqlFindProject =
      'SELECT project.*, project.id as project_id, w.*, c.name as cityName, pc.name as projectClassName, pi.name as projectItem, pm.id as projectManagerId, p.name as projectManager, projectSupervisors.id as projectSupervisorId, p.name as projectSupervisor, pt.name as projectType, ps.name as projectStage, pstat.name as projectStatus ' +
      'FROM project ' +
      'INNER JOIN projectclass pc ' +
      'ON project.projectClass_id = pc.id ' +
      'INNER JOIN projectitem pi ' +
      'ON project.projectItem_id = pi.id ' +
      'INNER JOIN project_managers pm ' +
      'ON project.id = pm.project_id ' +
      'INNER JOIN project_supervisors projectSupervisors ' +
      'ON project.id = projectSupervisors.project_id ' +
      'INNER JOIN person p ' +
      'ON pm.id = p.id ' +
      'INNER JOIN projecttype pt ' +
      'ON project.projectType_id = pt.id ' +
      'INNER JOIN projectstage ps ' +
      'ON project.stage_id = ps.id ' +
      'INNER JOIN projectstatus pstat ' +
      'ON project.status_id = pstat.id ' +
      'INNER JOIN warehouse w ' +
      'ON project.warehouse_id = w.id ' +
      'INNER JOIN city c ' +
      'ON w.city_id = c.id ' +
      'WHERE project.id = ?';

    try {
      connectDB.query(sqlFindProject, pid, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          //console.log('Retrieved Project: ', result[0]);

          const project = JSON.parse(JSON.stringify(result));

          const payload = {
            project,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(project);
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

// @route    GET api/projects/id
// @desc     Get the current project that has been clicked
// @access   Private
router.post('/tasks', auth, async (req, res) => {
  try {
    console.log('get part of routes/projects/tasks');
    console.log(req.body);

    const pid = req.body.id;

    console.log('Project id for project tasks to get is- ' + pid);

    const sqlFindProjectTasks =
      'SELECT task.*, task.id as task_id, ts.status as taskstatus FROM ' +
      'task Inner Join taskstatus ts on task.taskStatus_id = ts.id where project_id = ?';

    try {
      connectDB.query(sqlFindProjectTasks, pid, (err, result) => {
        if (err) {
          console.log('Error in finding user from token: ', err);
          return;
        }

        if (result.length) {
          console.log('Retrieved Project tasks length is: ', result.length);

          const projectTasks = JSON.parse(JSON.stringify(result));

          const payload = {
            projectTasks,
          };
          //console.log('payload is- ' + JSON.stringify(payload));
          res.json(projectTasks);
        } else {
          console.log('Error occured');
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

// @route    GET api/projects/getprojectinputs
// @desc     Get the data for adding a new project and putting them into inputs
// @access   Private
router.get('/getprojectinputs', auth, async (req, res) => {
  try {
    console.log('get part of routes/projects/getprojectinputs');

    // const sqlWarehouse =
    //   'SELECT *, warehouse.id as warehouse_id, city.id as city_id, city.name as city_name  FROM warehouse, city where warehouse.city_id = city.id';

    // try {
    //   connectDB.query(sqlFindProjectTasks, pid, (err, result) => {
    //     if (err) {
    //       console.log('Error in finding user from token: ', err);
    //       return;
    //     }

    //     if (result.length) {
    //       console.log('Retrieved Project tasks length is: ', result.length);

    //       const projectTasks = JSON.parse(JSON.stringify(result));

    //       const payload = {
    //         projectTasks,
    //       };
    //       //console.log('payload is- ' + JSON.stringify(payload));
    //       res.json(projectTasks);
    //     } else {
    //       console.log('Error occured');
    //       res.send('FAIL');
    //       return;
    //     }

    //     // not found Tutorial with the id
    //   });

    //   //res.send('User Route');
    // } catch (err) {
    //   console.error(err.message);
    //   res.status(500).send('Server error');
    // }

    console.log(warehouses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

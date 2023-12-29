import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import projects from './projects';
import post from './post';
import project from './project';
import projectItems from './projectItems';
import warehouses from './warehouses';
import projectClasses from './projectClasses';
import managers from './managers';
import projectStages from './projectStages';
import projectStatuses from './projectStatuses';
import projectTypes from './projectTypes';
import customerApprovals from './customerApprovals';
import projectTasks from './projectTasks';
import TasksSystem from './TasksSystem';

export default combineReducers({
  alert,
  auth,
  profile,
  projects,
  post,
  project,
  projectItems,
  warehouses,
  projectClasses,
  managers,
  projectStages,
  projectStatuses,
  projectTypes,
  customerApprovals,
  projectTasks,
  TasksSystem,
});

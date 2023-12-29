import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { getProject } from '../../actions/projects';
import { getProjectItems } from '../../actions/projectItem';
import { getWarehouses } from '../../actions/warehouses';
import { getProjectClasses } from '../../actions/projectClass';
import { getManagers } from '../../actions/managers';
import { getStages } from '../../actions/projectStages';
import { getStatuses } from '../../actions/projectStatus';
import { getTypes } from '../../actions/projectTypes';
import { getCustomerApprovals } from '../../actions/customerApproval';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

//ui Libraries
import {
  Grid,
  Card,
  CardHeader,
  Autocomplete,
  Divider,
  List,
  ListItem,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  ListItemText,
  TextField,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { InputAdornment, OutlinedInput } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

//local libraries
import { generalInfoFieldsStyle, generalInfoNameStyle, classes } from './Style';
import { setAlert } from '../../actions/alert';
import { insertProject } from '../../actions/insertProject';
import { login } from '../../actions/auth';

//import Select from '@mui/material/Select';
import Select, { StylesConfig } from 'react-select';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
// FOr displaying tabs
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AddProjectTwo = ({
  getProject,
  project: { project },
  getProjectItems,
  projectItems: { projectItems },
  getWarehouses,
  warehouses: { warehouses },
  getProjectClasses,
  projectClasses: { projectClasses },
  getManagers,
  managers: { managers },
  getStages,
  projectStages: { projectStages },
  getStatuses,
  projectStatuses: { projectStatuses },
  getTypes,
  projectTypes: { projectTypes },
  getCustomerApprovals,
  customerApprovals: { customerApprovals },
}) => {
  useEffect(() => {
    getProjectItems();
    getWarehouses();
    getProjectClasses();
    getManagers();
    getStages();
    getStatuses();
    getTypes();
    getCustomerApprovals();
    insertProject();
  }, [
    getProject,
    getProjectItems,
    getWarehouses,
    getProjectClasses,
    getManagers,
    getStages,
    getStatuses,
    getTypes,
    getCustomerApprovals,
    insertProject,
  ]);

  const [category, setCategory] = React.useState();

  const autoFill = [
    { value: '0', label: 'No' },
    { value: '1', label: 'Yes' },
    { value: 'default', label: 'TBD' },
  ];

  //declaring the state variable for form handling and setting the initial values from the project

  //General Info tab
  const [mcsNumber, setMcsNumber] = React.useState('');
  const [warehouse, setWarehouse] = React.useState('');
  const [projectItem, setProjectItem] = React.useState('');
  const [projectClass, setProjectClass] = React.useState('');
  const [manager, setManager] = React.useState('');
  const [supervisor, setSupervisor] = React.useState('');
  const [projectStage, setProjectStage] = React.useState('');
  const [projectStatus, setProjectStatus] = React.useState('');
  const [projectType, setProjectType] = React.useState('');
  const [customerApproval, setCustomerApproval] = React.useState('');
  const [autoFillHVAC, setautoFillHVAC] = React.useState('');
  const [autoFillPermits, setautoFillPermits] = React.useState('');
  const [autoFillRefrigeration, setautoFillRefrigeration] = React.useState('');
  const [keyStatus, setKeyStatus] = React.useState('');
  const [scope, setScope] = React.useState('');
  const [mcsNotes, setMcsNotes] = React.useState('');
  const supervisors = managers;

  //Scheduling Tab
  const [projectInitiatedDate, setProjectInitiatedDate] = React.useState('');
  const [siteSurveyDate, setSiteSurveyDate] = React.useState('');
  const [budgetaryDueDate, setBudgetaryDueDate] = React.useState('');
  const [budgetarySubmittedDate, setBudgetarySubmittedDate] =
    React.useState('');
  const [proposalScopeDate, setProposalScopeDate] = React.useState('');
  const [draftScheduleDate, setDraftScheduleDate] = React.useState('');
  const [proposalDueDate, setProposalDueDate] = React.useState('');
  const [proposalSubmittedDate, setProposalSubmittedDate] = React.useState('');
  const [scheduledStartDate, setScheduledStartDate] = React.useState('');
  const [scheduledTurnoverDate, setScheduledTurnoverDate] = React.useState('');
  const [actualTurnoverDate, setActualTurnoverDate] = React.useState('');

  //Financial Tab
  const [shouldInvoice, setShouldInvoice] = React.useState('0');
  const [actualInvoice, setActualInvoice] = React.useState('0');
  const [projectCost, setProjectCost] = React.useState('');
  const [customerNumber, setCustomerNumber] = React.useState('');

  function handleChange(event) {
    event.preventDefault();
    setWarehouse(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Mcs number', mcsNumber);

    // alert('insertProject called');
    insertProject(
      mcsNumber,
      warehouse,
      projectItem,
      projectClass,
      manager,
      supervisor,
      projectStage,
      projectStatus,
      projectType,
      customerApproval,
      autoFillHVAC,
      autoFillPermits,
      autoFillRefrigeration,
      keyStatus,
      scope,
      mcsNotes,
      projectInitiatedDate,
      siteSurveyDate,
      budgetaryDueDate,
      budgetarySubmittedDate,
      proposalScopeDate,
      draftScheduleDate,
      proposalDueDate,
      proposalSubmittedDate,
      scheduledStartDate,
      scheduledTurnoverDate,
      actualTurnoverDate,
      shouldInvoice,
      actualInvoice,
      projectCost,
      customerNumber
    );

    // if (mcsNumber.length < 5) {
    //   alert('MCS Project Number should be 5 digits', 'danger');
    //   //alert('wrong pass');
    // } else if (!warehouse) {
    //   alert('Please Select Warehouse', 'danger');
    // } else if (!projectItem) {
    //   alert('Please Select Item', 'danger');
    // } else if (!projectClass) {
    //   alert('Please Select Project', 'danger');
    // } else if (!manager) {
    //   alert('Please Select Manager', 'danger');
    // } else if (!supervisor) {
    //   alert('Please Select Supervisor', 'danger');
    // } else if (!projectStage) {
    //   alert('Please Select Stage', 'danger');
    // } else if (!projectStatus) {
    //   alert('Please Select Status', 'danger');
    // } else if (!projectType) {
    //   alert('Please Select Type', 'danger');
    // } else if (!customerApproval) {
    //   alert('Please Select Customer Approval', 'danger');
    // } else if (!autoFillHVAC) {
    //   alert('Please Select HVAC', 'danger');
    // } else if (!autoFillRefrigeration) {
    //   alert('Please Select Refrigeration', 'danger');
    // } else if (!autoFillPermits) {
    //   alert('Please Select Permits', 'danger');
    // } else if (!keyStatus) {
    //   alert('Please Select Key Status', 'danger');
    // } else {
    //   // login({ email, password });
    //   alert('Successfull validated');
    // }
  };

  // For handling active tab
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const Customtd = withStyles((theme) => ({
    head: {
      color: theme.palette.common.black,
      fontWeight: 'bold',
      border: 'none',
    },
    body: {
      fontSize: 10,
    },
  }))(TableCell);

  // css style variables
  const cardStyle = {
    // marginLeft: '10rem',
    // marginRight: '10rem',
    maxWidth: 1000,
  };

  const cardHeaderStyle = {
    background: '#1976d2',
    color: 'white',
    fontSize: '1.1em',
  };

  //for the select component
  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      // borderColor: 'none',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // add box-shadow style
    }),
  };

  const TextFieldStyles = {
    input: {
      height: '10px',
      width: 300,
      align: 'center',
    },
  };

  const datePickerStyles = {
    border: '1px solid red',
    borderRadius: '10px',
  };

  const useStyles = makeStyles((theme) => ({
    tr: {
      height: 30,
    },
    
    td: {
      padding: '0px 0px',
    },
    textfields: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '200px', // set the maximum width here
        minWidth: '200px', // set the minimum width here
        height: '35px',
      },
    },
    textAreas: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '250px', // set the maximum width here
        minWidth: '250px', // set the minimum width here
        height: '110px',
      },
    },

    inputText: {
      color: 'rgba(0,0,0,0.87)',
      fontSize: '16px',
      letterSpacing: '0.5px',
      lineHeight: '28px',
      textAlign: 'center',
    },

    select: {
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none',
      },
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    notchedOutline: {
      borderColor: 'none',
    },

    tab: {
      color:"none" // set the text color to white
    },
    selected: {
      color: theme.palette.primary.black, // set the selected tab text color to primary color
      backgroundColor: 'none', // set the background color of the selected tab to white
      color: 'yellow',
    },

    datePickerStyles: {
      '& .react-datepicker__input-container input': {
        // border: '1px solid',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        borderRadius: 5,
      },
    },
  }));

  const classes2 = useStyles();

  return (
    <>
      <Card style={cardStyle} sx={{marginLeft:'15%',marginTop:'2%'}}>
        <CardHeader
        style={{ background: '#467eac', color: 'white' }}
          
          titleTypographyProps={{ variant: 'h6' }}
          title="Add Project"
        ></CardHeader>
      </Card>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{  marginLeft:'15%' }}>
        <Card style={cardStyle}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              
              aria-label="basic tabs example"
              indicatorColor="red" // Change the indicator color to blue
              textColor="primary" // Change the text color of the tabs to blue
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'blue',
                  opacity:1
                },
              }}
            >
              <Tab
              style={{ textTransform: 'none' }}
                label="General Information"
                {...a11yProps(0)}
                classes={{ root: classes2.tab, selected: classes2.selected }}
              />
              <Tab
              style={{ textTransform: 'none' }}
                label="Scheduling"
                {...a11yProps(1)}
                className={value === 1 ? classes2.selected : classes2.tab}
              />
              <Tab
              style={{ textTransform: 'none' }}
                label="Financial"
                {...a11yProps(2)}
                className={value === 2 ? classes2.selected : classes2.tab}
              />
              <Button
                type="submit"
                variant="contained"
                style={{marginLeft:'auto', background: 'green' ,textTransform: 'none' }}
                onClick={handleSubmit}
                
              >
                Save Changes
              </Button>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* {General Info Part} */}
            <TableContainer sx={{ maxWidth: 950 }}>
              <Table
                sx={{ maxWidth: 950 }}
                style={{ border: 'none', padding: 5 }}
                aria-label="simple table"
              >
                <TableHead>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>MCS Project#</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                          '& input': {
                            verticalAlign: 'center',
                          },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                          maxLength: 5,
                          style: {
                            textAlignVertical: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px',
                          },
                        }}
                        id="mcsNumber"
                        name="mcsNumber"
                        value={mcsNumber}
                        onChange={(e) => setMcsNumber(e.target.value)}
                      />
                      {/* <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                      onChange={(e) => setMcsNumber(e.target.value)}
                    /> */}
                    </td>
                    <td style={generalInfoNameStyle}>Warehouse</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      {/* react-select Select */}
                      <Select
                        styles={selectStyles}
                        name="warehouse"
                        id="warehouse"
                        options={warehouses}
                        // value={warehouses.find(
                        //   ({ warehouseID }) =>
                        //     warehouseID === project[0].warehouseID
                        // )}
                        value={warehouse}
                        getOptionLabel={(option) =>
                          option.cityname +
                          ', ' +
                          option.state.replace('_', ' ')
                        }
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setWarehouse(e)}
                        // onChange={handleChange}
                      />
                      {/* <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={warehouse}
                      label="Age"
                      onChange={(e) => setWarehouse(e)}
                    >
                      {warehouses.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.cityname +
                            ', ' +
                            option.state.replace('_', ' ')}
                        </MenuItem>
                      ))}
                    </Select> */}
                      {/* Material UI textfield select */}
                      {/* <TextField
                      className={classes2.textfields}
                      id="outlined-select-currency"
                      select
                      label="Select"
                      defaultValue="EUR"
                      helperText="Please select your currency"
                    >
                      {warehouses.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.cityname +
                            ', ' +
                            option.state.replace('_', ' ')}
                        </MenuItem>
                      ))}
                    </TextField> */}
                    </td>
                  </tr>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>Item</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={projectItems}
                        value={projectItem}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setProjectItem(e)}
                      />
                    </td>
                    <td style={generalInfoNameStyle}>Project</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={projectClasses}
                        value={projectClass}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setProjectClass(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>Manager</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={managers}
                        value={manager}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setManager(e)}
                      />
                    </td>
                    <td style={generalInfoNameStyle}>Supervisor</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={supervisors}
                        value={supervisor}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setSupervisor(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>Stage</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={projectStages}
                        value={projectStage}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setProjectStage(e)}
                      />
                    </td>
                    <td style={generalInfoNameStyle}>Status</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={projectStatuses}
                        value={projectStatus}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setProjectStatus(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>Type</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={projectTypes}
                        value={projectType}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setProjectType(e)}
                      />
                    </td>
                    <td style={generalInfoNameStyle}>Customer Approval</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={customerApprovals}
                        value={customerApproval}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setCustomerApproval(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>HVAC</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={autoFill}
                        value={autoFillHVAC}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setautoFillHVAC(e)}
                      ></Select>
                    </td>
                    <td style={generalInfoNameStyle}>Refrigeration</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={autoFill}
                        value={autoFillRefrigeration}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setautoFillRefrigeration(e)}
                      ></Select>
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>Permits</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <Select
                        styles={selectStyles}
                        className="basic-single"
                        name="color"
                        options={autoFill}
                        value={autoFillPermits}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        style={{ zIndex: 1000 }}
                        onChange={(e) => setautoFillPermits(e)}
                      ></Select>
                    </td>
                    <td style={generalInfoNameStyle}>Key Status</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          maxLength: 50,
                        }}
                        id="keyStatus"
                        name="keyStatus"
                        value={keyStatus}
                        onChange={(e) => setKeyStatus(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={generalInfoNameStyle}>Scope</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textAreas}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                        }}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        multiline
                        // rows={2}
                        minRows={2}
                        value={scope}
                        onChange={(e) => setScope(e.target.value)}
                      />
                    </td>
                    <td style={generalInfoNameStyle}>MCS Notes</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textAreas}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                        }}
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        multiline
                        // rows={5}
                        minRows={4}
                        value={mcsNotes}
                        onChange={(e) => setMcsNotes(e.target.value)}
                      />
                    </td>
                  </tr>
                </TableHead>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1} component={Paper}>
          <TableContainer sx={{ maxWidth: 950 }}>
          <Table
              sx={{ minWidth: 650 }}
              style={{
                border:"none"
              }}
              aria-label="simple table"
            >
              <TableHead>
                <tr >
                  <td style={generalInfoFieldsStyle}>Initiation Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={projectInitiatedDate}
                        onChange={(date) => setProjectInitiatedDate(date)}
                      />
                    </div>
                  </td>
                  <td style={generalInfoFieldsStyle}>Site Survey Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={siteSurveyDate}
                        onChange={(date) => setSiteSurveyDate(date)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoFieldsStyle}>Budgetary Due Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={budgetaryDueDate}
                        onChange={(date) => setBudgetaryDueDate(date)}
                      />
                    </div>
                  </td>
                  <td style={generalInfoFieldsStyle}>
                    Budgetary Submitted Date
                  </td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={budgetarySubmittedDate}
                        onChange={(date) => setBudgetarySubmittedDate(date)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoFieldsStyle}>Proposal Scope Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={proposalScopeDate}
                        onChange={(date) => setProposalScopeDate(date)}
                      />
                    </div>
                  </td>
                  <td style={generalInfoFieldsStyle}>Draft Schedule Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={draftScheduleDate}
                        onChange={(date) => setDraftScheduleDate(date)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoFieldsStyle}>Proposal Due Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={proposalDueDate}
                        onChange={(date) => setProposalDueDate(date)}
                      />
                    </div>
                  </td>
                  <td style={generalInfoFieldsStyle}>
                    Proposal Submitted Date
                  </td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={proposalSubmittedDate}
                        onChange={(date) => setProposalSubmittedDate(date)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoFieldsStyle}>Scheduled Start Date</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <div className={classes2.datePickerStyles}>
                        <DatePicker
                          dateFormat="MM/dd/yyyy"
                          selected={scheduledStartDate}
                          onChange={(date) => setScheduledStartDate(date)}
                        />
                      </div>
                    </div>
                  </td>
                  <td style={generalInfoFieldsStyle}>Scheduled Turnover</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={scheduledTurnoverDate}
                        onChange={(date) => setScheduledTurnoverDate(date)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoFieldsStyle}>Actual Turnover</td>
                  <td align="left" style={generalInfoNameStyle}>
                    <div className={classes2.datePickerStyles}>
                      <DatePicker
                        dateFormat="MM/dd/yyyy"
                        selected={actualTurnoverDate}
                        onChange={(date) => setActualTurnoverDate(date)}
                      />
                    </div>
                  </td>
                </tr>
              </TableHead>
            </Table></TableContainer> 
           
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 850 }}
                style={{ border: 'none' }}
                aria-label="simple table"
              >
                <TableHead>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>Should Invoice %</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      {/* <TextField
                      className={classes2.textfields}
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={shouldInvoice}
                      defaultValue="0"
                      onChange={(e) => setShouldInvoice(e.target.value)}
                    /> */}
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                          '& input': {
                            verticalAlign: 'center',
                          },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                          maxLength: 5,
                          style: {
                            textAlignVertical: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px',
                          },
                        }}
                        id="mcsNumber"
                        name="mcsNumber"
                        value={shouldInvoice}
                        defaultValue="0"
                        onChange={(e) => setShouldInvoice(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>Actual Invoice %</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                          '& input': {
                            verticalAlign: 'center',
                          },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                          maxLength: 5,
                          style: {
                            textAlignVertical: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px',
                          },
                        }}
                        id="mcsNumber"
                        name="mcsNumber"
                        value={actualInvoice}
                        defaultValue="0"
                        onChange={(e) => setActualInvoice(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>Project Cost</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                          '& input': {
                            verticalAlign: 'center',
                          },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                          maxLength: 5,
                          style: {
                            textAlignVertical: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px',
                          },
                        }}
                        id="mcsNumber"
                        name="mcsNumber"
                        value={projectCost}
                        defaultValue="0"
                        onChange={(e) => setProjectCost(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className={classes.row}>
                    <td style={generalInfoNameStyle}>Customer Number</td>
                    <td align="left" style={generalInfoFieldsStyle}>
                      <TextField
                        className={classes2.textfields}
                        sx={{
                          '& legend': { display: 'none' },
                          '& fieldset': { top: 0 },
                          '& input': {
                            verticalAlign: 'center',
                          },
                        }}
                        size="small"
                        style={TextFieldStyles}
                        required
                        width="10"
                        inputProps={{
                          inputMode: 'numeric',
                          pattern: '[0-9]*',
                          maxLength: 5,
                          style: {
                            textAlignVertical: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px',
                          },
                        }}
                        id="mcsNumber"
                        name="mcsNumber"
                        value={customerNumber}
                        defaultValue="0"
                        onChange={(e) => setCustomerNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                </TableHead>
              </Table>
            </TableContainer>
          </TabPanel>
        </Card>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  project: state.project,
  projectItems: state.projectItems,
  warehouses: state.warehouses,
  projectClasses: state.projectClasses,
  managers: state.managers,
  projectStages: state.projectStages,
  projectStatuses: state.projectStatuses,
  projectTypes: state.projectTypes,
  customerApprovals: state.customerApprovals,
});

AddProjectTwo.propTypes = {
  getProject: PropTypes.func.isRequired,
  getProjectItems: PropTypes.func.isRequired,
  getWarehouses: PropTypes.func.isRequired,
  getProjectClasses: PropTypes.func.isRequired,
  getManagers: PropTypes.func.isRequired,
  getStages: PropTypes.func.isRequired,
  getStatuses: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  getCustomerApprovals: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  insertProject: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getProject,
  getProjectItems,
  getWarehouses,
  getProjectClasses,
  getManagers,
  getStages,
  getStatuses,
  getTypes,
  getCustomerApprovals,
  setAlert,
  insertProject,
})(AddProjectTwo);

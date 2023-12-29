// Core libraries
import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
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

// UI libraries
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { style } from '@mui/system';
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
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select from 'react-select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// local imports

const Addproject = ({
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
  const [data, setData] = React.useState('');

  // loading the input values from the server
  // async function getProjectInputs() {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:3000/api/projects/getprojectinputs'
  //     );
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    getProjectItems();
    getWarehouses();
    getProjectClasses();
    getManagers();
    getStages();
    getStatuses();
    getTypes();
    getCustomerApprovals();
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
  ]);

  const supervisors = managers;

  // Styling css variables
  const styles = (theme) => ({
    root: {
      width: '100%',
      marginTop: 0,
      fontSize: 8,
    },
    table: {},
    row: {
      border: 'none',
      height: 14,
      '&:nth-of-type(odd)': {
        backgroundColor: 'red',
      },
    },
    body: {
      fontSize: 10,
      border: 'none',
    },
  });

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        defaultProps: {
          notched: false,
        },
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: false,
        },
      },
    },
  });

  const cardStyle = {
    marginLeft: '10rem',
    marginRight: '10rem',
  };
  const cardHeaderStyle = {
    background: '#14228c',
    color: 'white',
    fontSize: '1.1em',

    textAlign: 'center',
    padding: '5px',
  };
  const tableStyle = {
    border: 'none',
    boxShadow: 'none',
  };
  const generalInfoNameStyle = {
    fontWeight: 'bold',
    borderWidth: '0px',
    borderColor: '#aaaaaa',
    borderRightColor: 'white',
    borderStyle: 'solid',
    height: '10px',
    width: '25%',
    // fontSize: '0.9em',
  };

  const generalInfoFieldsStyle = {
    // fontWeight: 'bold',
    borderWidth: '0px',
    borderColor: '#aaaaaa',
    borderStyle: 'solid',
    height: '10px',
    width: '25%',
  };
  const generalInfotr = {
    height: '10px',
  };

  const classes = styles;

  // For handling active tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
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
  }

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

  //declaring the state variable for form handling and setting the initial values from the project
  // const [mcsNumber, setMcsNumber] = React.useState('');
  // const [warehouse, setWarehouse] = React.useState('');
  // const [projectItem, setProjectItem] = React.useState('');
  // const [projectClass, setProjectClass] = React.useState('');
  // const [manager, setManager] = React.useState('');
  // const [supervisor, setSupervisor] = React.useState('');
  // const [projectStage, setProjectStage] = React.useState('');
  // const [projectStatus, setProjectStatus] = React.useState('');
  // const [projectType, setProjectType] = React.useState('');
  // const [customerApproval, setCustomerApproval] = React.useState('');
  // const [autoFillHVAC, setautoFillHVAC] = React.useState('');
  // const [autoFillPermits, setautoFillPermits] = React.useState('');
  // const [autoFillRefrigeration, setautoFillRefrigeration] = React.useState('');
  // const [keyStatus, setKeyStatus] = React.useState('');
  // const [scope, setScope] = React.useState('');
  // const [mcsNotes, setMcsNotes] = React.useState('');

  const autoFill = [
    { value: '0', label: 'Np' },
    { value: '1', label: 'Yes' },
    { value: 'default', label: 'TBD' },
  ];

  // for handling the form data for the form
  const [formData, setFormData] = useState({
    mcsNumber: '',
    warehouse: '',
    projectItem: '',
    projectClass: '',
    manager: '',
    supervisor: '',
    projectStage: '',
    projectStatus: '',
    projectType: '',
    customerApproval: '',
    autoFillHVAC: '',
    autoFillPermits: '',
    autoFillRefrigeration: '',
    keyStatus: '',
    scope: '',
    mcsNotes: '',
  });

  const {
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
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (password.length < 6) {
    //   setAlert('Password length is less that 6 characters', 'danger');
    //   //alert('wrong pass');
    // } else if (email.length === 0) {
    //   setAlert('Please enter name', 'danger');
    // } else {
    //   login({ email, password });
    // }
  };

  return (
    // <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
    <div style={{ alignContent: 'left' }}>
      <Card style={cardHeaderStyle}> New Project</Card>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="General Information" {...a11yProps(0)} />
            <Tab label="Scheduling" {...a11yProps(1)} />
            <Tab label="Financial" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TableContainer component={Paper} theme={theme}>
            <Table
              sx={{ minWidth: 850 }}
              style={{ border: 'none' }}
              aria-label="simple table"
            >
              <TableHead>
                <tr className={classes.row}>
                  <td style={generalInfoNameStyle}>MCS Project#</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      key="mcsProjectNumber"
                      id="mcsNumber"
                      name="mcsNumber"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                      // onChange={(e) => setMcsNumber(e.target.value)}
                      onChange={(e) => onChange(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Warehouse</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="warehouse"
                      id="warehouse"
                      options={warehouses}
                      value={warehouse}
                      getOptionLabel={(option) => option.cityname}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setWarehouse(e)}
                    />
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <td style={generalInfoNameStyle}>Item</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectItems}
                      value={projectItem}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectItem(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Project</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectClasses}
                      value={projectClass}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectClass(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Manager</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={managers}
                      value={manager}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setManager(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Supervisor</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={supervisors}
                      value={supervisor}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setSupervisor(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Stage</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectStages}
                      value={projectStage}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectStage(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Status</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectStatuses}
                      value={projectStatus}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectStatus(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Type</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectTypes}
                      value={projectType}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectType(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Customer Approval</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={customerApprovals}
                      value={customerApproval}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setCustomerApproval(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>HVAC</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={autoFill}
                      value={autoFillHVAC}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setautoFillHVAC(e)}
                    ></Select>
                  </td>
                  <td style={generalInfoNameStyle}>Refrigeration</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={autoFill}
                      value={autoFillRefrigeration}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setautoFillRefrigeration(e)}
                    ></Select>
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Permits</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={autoFill}
                      value={autoFillPermits}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setautoFillPermits(e)}
                    ></Select>
                  </td>
                  <td style={generalInfoNameStyle}>Key Status</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={keyStatus}
                      // onChange={(e) => setKeyStatus(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Scope</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      multiline
                      rows={2}
                      minRows={2}
                      style={{ width: 300, align: 'center' }}
                      value={scope}
                      // onChange={(e) => setScope(e.target.value)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>MCS Notes</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      multiline
                      rows={5}
                      minRows={4}
                      style={{ width: 300, align: 'center' }}
                      value={mcsNotes}
                      // onChange={(e) => setMcsNotes(e)}
                    />
                  </td>
                </tr>
              </TableHead>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 850 }}
              style={{ border: 'none' }}
              aria-label="simple table"
            >
              <TableHead>
                <tr className={classes.row}>
                  <td style={generalInfoNameStyle}>Initiation Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Site Survey Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="warehouse"
                      id="warehouse"
                      options={warehouses}
                      value={warehouse}
                      getOptionLabel={(option) => option.cityname}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setWarehouse(e)}
                    />
                  </td>
                </tr>
                <tr className={classes.tr}>
                  <td style={generalInfoNameStyle}>Budgetary Due Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectItems}
                      value={projectItem}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectItem(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Budgetary Submitted Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectClasses}
                      value={projectClass}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectClass(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Proposal Scope Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={managers}
                      value={manager}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setManager(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Draft Schedule Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={supervisors}
                      value={supervisor}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setSupervisor(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Proposal Due Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectStages}
                      value={projectStage}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectStage(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Proposal Submitted Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectStatuses}
                      value={projectStatus}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectStatus(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}>Schedule Start Date</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={projectTypes}
                      value={projectType}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setProjectType(e)}
                    />
                  </td>
                  <td style={generalInfoNameStyle}>Schedule Turnover</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={customerApprovals}
                      value={customerApproval}
                      getOptionLabel={(option) => option.name}
                      getOptionValue={(option) => option.id}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setCustomerApproval(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={generalInfoNameStyle}></td>
                  <td align="left" style={generalInfoFieldsStyle}></td>
                  <td style={generalInfoNameStyle}>Actual Turnover</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <Select
                      className="basic-single"
                      name="color"
                      options={autoFill}
                      value={autoFillRefrigeration}
                      getOptionLabel={(option) => option.label}
                      getOptionValue={(option) => option.value}
                      style={{ zIndex: 1000 }}
                      // onChange={(e) => setautoFillRefrigeration(e)}
                    ></Select>
                  </td>
                </tr>
              </TableHead>
            </Table>
          </TableContainer>
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
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                    />
                  </td>
                </tr>
                <tr className={classes.row}>
                  <td style={generalInfoNameStyle}>Should Invoice %</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                    />
                  </td>
                </tr>
                <tr className={classes.row}>
                  <td style={generalInfoNameStyle}>Project Cost</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                    />
                  </td>
                </tr>
                <tr className={classes.row}>
                  <td style={generalInfoNameStyle}>Customer Number</td>
                  <td align="left" style={generalInfoFieldsStyle}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Text"
                      variant="outlined"
                      size="small"
                      style={{ width: 300, align: 'center' }}
                      value={mcsNumber}
                    />
                  </td>
                </tr>
              </TableHead>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
    </div>
  );
};

Addproject.propTypes = {
  getProject: PropTypes.func.isRequired,
  getProjectItems: PropTypes.func.isRequired,
  getWarehouses: PropTypes.func.isRequired,
  getProjectClasses: PropTypes.func.isRequired,
  getManagers: PropTypes.func.isRequired,
  getStages: PropTypes.func.isRequired,
  getStatuses: PropTypes.func.isRequired,
  getTypes: PropTypes.func.isRequired,
  getCustomerApprovals: PropTypes.func.isRequired,
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
})(Addproject);

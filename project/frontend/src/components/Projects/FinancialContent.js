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
import GeneralInfoTable from './GeneralInfoTable';
import GeneralInfoTableAccounts from './GeneralInfoTableAccounts'
import Accountsreceivable from './Accountsreceivable.js'
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
  CardContent,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select from 'react-select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
  const divStyle = {
    borderRadius: '10px', // adjust the value as per your preference
    overflow: 'hidden', // ensure that content within the div does not overflow
  };
  const styles = (theme) => ({
    root: {
      width: '100%',
      marginTop: 0,
      fontSize: 8,
    },
    tableRowHover: { // Add the tableRowHover class
      '&:hover': {
        backgroundColor: 'grey', // Set the desired background color on hover
        cursor: 'pointer', // Set the cursor type on hover
      },
    },
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
    borderRadius:'10px'
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
    <card>
      <CardHeader

        style={{ background: '#467eac', color: 'white',borderRadius:'8px 8px 0px 0px' }}
        title={<h1 style={{ fontSize: '18px', marginLeft:'12px', fontFamily: 'Helvetica' ,fontWeight:'bold'}}>Financial</h1>}
        action={
          <>
            <Button variant="contained" style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' }}>
              Add Task
            </Button>
            <Button variant="contained" style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' }}>
              Edit Task
            </Button>
            <Button variant="contained" style={{ marginLeft: '0.4rem',marginRight:'1.5rem' ,textTransform:'none'}}>
              Print Tasks
            </Button>
          </>
        }
      ></CardHeader>
      <CardContent sx={{backgroundColor:'white',borderRadius:'0px 0px 8px 8px'}}>
        <div style={{ alignContent: 'left' }}>
          {/* <Card variant='primary' style={cardHeaderStyle}>Return to Financial</Card> */}
          <Box sx={{ width: 950 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={<span style={{ textTransform: 'none' }}>Pricing</span>} {...a11yProps(0)} />
                <Tab label={<span style={{ textTransform: 'none' }}>Accounts Receivable</span>} {...a11yProps(1)} />
                <Tab label={<span style={{ textTransform: 'none' }}>Accounts Payable</span>} {...a11yProps(2)} />
                <Tab label={<span style={{ textTransform: 'none' }}>AIA Cost Items</span>} {...a11yProps(3)} />
              </Tabs>

            </Box>
            <TabPanel value={value} index={0}>
              <TableContainer component={Paper} theme={theme}>
                <Table
                  sx={{ minWidth: 850 }}
                  style={{ border: 'none' }}
                  aria-label="simple table"
                >

                </Table>
              </TableContainer>
              <GeneralInfoTable></GeneralInfoTable>
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
                      <td colSpan={12} sx={{border:"none"}}>
                        {/* Column that spans across all three columns */}
                        <Select
                          className="basic-single"
                          name="warehouse"
                          id="warehouse"
                          options={warehouses}
                          value={warehouse}
                          getOptionLabel={(option) => option.cityname}
                          getOptionValue={(option) => option.id}
                          styles={{
                            container: (provided) => ({ ...provided, width: '50%' }),
                            border: 'none'// Set width to 100% to fill the td element
                            // Add any other styles as needed
                          }}
                        // onChange={(e) => setWarehouse(e)}
                        />
                      </td>
                    </tr>


                    <Accountsreceivable></Accountsreceivable>
                  </TableHead>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TableContainer component={Paper}>

                <Table
                  sx={{ minWidth: 500 }}
                  style={{ border: 'none' }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <tr className={classes.row}>
                      <td colSpan={12} sx={{border:"none"}}>
                        {/* Column that spans across all three columns */}
                        <Select
                          className="basic-single"
                          name="warehouse"
                          id="warehouse"
                          options={warehouses}
                          value={warehouse}
                          getOptionLabel={(option) => option.cityname}
                          getOptionValue={(option) => option.id}
                          styles={{
                            container: (provided) => ({ ...provided, width: '50%' }),
                            border: 'none'// Set width to 100% to fill the td element
                            // Add any other styles as needed
                          }}
                        // onChange={(e) => setWarehouse(e)}
                        />
                      </td>
                    </tr>
                    <GeneralInfoTableAccounts></GeneralInfoTableAccounts>

                  </TableHead>
                </Table>
              </TableContainer>
            </TabPanel>
          </Box>
        </div>
      </CardContent>
    </card>
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

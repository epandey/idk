import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, Navigate } from 'react-router-dom';
import { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
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

//ui libraries
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
import Select from 'react-select';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import store from '../../store';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import mcs_logo from '../../logo/mcs_logo.webp';

const theme = createTheme();

const AddProjectOne = ({
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

  const autoFill = [
    { value: '0', label: 'Np' },
    { value: '1', label: 'Yes' },
    { value: 'default', label: 'TBD' },
  ];

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // css style variables
  const cardStyle = {
    // marginLeft: '10rem',
    // marginRight: '10rem',
  };

  const cardHeaderStyle = {
    background: '#1976d2',
    color: 'white',
    fontSize: '1.1em',
  };

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
  };

  const classes = styles;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '1000px',
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, minHeight: '1000' }}
            >
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
                          margin="normal"
                          required
                          fullWidth
                          borderColor="black"
                          id="mcsNumber"
                          label="Email Address"
                          name="mcsNumber"
                          value={mcsNumber}
                          autoFocus
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
                          onChange={(value, actionMeta) => console.log(value)}
                        />
                      </td>
                    </tr>
                  </TableHead>
                </Table>
              </TableContainer>
              <TextField
                margin="normal"
                required
                fullWidth
                id="mcsNumber"
                label="Email Address"
                name="mcsNumber"
                value={mcsNumber}
                autoFocus
                onChange={(e) => onChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={mcsNumber}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => onChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>

        <Card style={cardStyle}>
          <CardHeader
            title="General Information"
            titleTypographyProps={{ variant: 'h6' }}
            action={
              <>
                <Button
                  variant="contained"
                  style={{ marginLeft: '0.4rem', background: 'green' }}
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
              </>
            }
          ></CardHeader>
          <TableContainer component={Paper} theme={theme}>
            <Table
              sx={{ minWidth: 850 }}
              style={{ border: 'none' }}
              aria-label="simple table"
            >
              <TableHead>
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
                      // rows={2}
                      minRows={4}
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
                      // rows={5}
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
        </Card>
      </ThemeProvider>
    </Provider>
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

AddProjectOne.propTypes = {
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
})(AddProjectOne);

import React from 'react';
import { useState, Fragment } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { generalInfoFieldsStyle, generalInfoNameStyle } from './Style';

//import Select from '@mui/material/Select';
import Select from 'react-select';

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

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: 0,
    fontSize: 8,
  },
  table: {},
  row: {
    border: 'none',
    height: 28,
    '&:nth-of-type(odd)': {
      backgroundColor: 'red',
    },
  },
  body: {
    fontSize: 10,
    border: 'none',
  },
});

// const generalInfoNameStyle = {
//   fontWeight: 'bold',
//   borderWidth: '1px',
//   borderColor: '#aaaaaa',
//   borderRightColor: 'white',
//   borderStyle: 'solid',
// };

// const generalInfoFieldsStyle = {
//   fontWeight: 'bold',
//   borderWidth: '1px',
//   borderColor: '#aaaaaa',
//   borderStyle: 'solid',
// };

const generalInfotr = {
  height: '10px',
};

const useStyles = makeStyles({
  tr: {
    height: 30,
  },
  td: {
    padding: '0px 0px',
  },
});

const GeneralInfo = (projectArguments) => {
  const [category, setCategory] = React.useState();

  const {
    project,
    projectItems,
    warehouses,
    projectClasses,
    managers,
    projectStages,
    projectStatuses,
    projectTypes,
    customerApprovals,
  } = projectArguments;

  const supervisors = managers;

  //variable for HVACautofill
  // const autoFillHVAC = [
  //   { value: '0', label: 'Np' },
  //   { value: '1', label: 'Yes' },
  //   { value: 'default', label: 'TBD' },
  // ];

  // //variable for refridgerationautofill
  // const autoFillRefrigeration = [
  //   { value: '0', label: 'Np' },
  //   { value: '1', label: 'Yes' },
  //   { value: 'default', label: 'TBD' },
  // ];

  // //variable for permitsautofill
  // const autoFillPermits = [
  //   { value: '0', label: 'Np' },
  //   { value: '1', label: 'Yes' },
  //   { value: 'default', label: 'TBD' },
  // ];

  const autoFill = [
    { value: '0', label: 'Np' },
    { value: '1', label: 'Yes' },
    { value: 'default', label: 'TBD' },
  ];

  console.log('project is- ', project);

  //declaring the state variable for form handling and setting the initial values from the project
  const [warehouse, setWarehouse] = React.useState(
    warehouses.find(({ warehouseID }) => warehouseID === project[0].warehouseID)
  );
  const [projectItem, setProjectItem] = React.useState(
    projectItems.find(({ id }) => id === project[0].projectItem_id)
  );
  const [projectClass, setProjectClass] = React.useState(
    projectClasses.find(({ id }) => id === project[0].projectClass_id)
  );
  const [manager, setManager] = React.useState(
    managers.find(({ id }) => id === project[0].projectManagerId)
  );
  const [supervisor, setSupervisor] = React.useState(
    supervisors.find(({ id }) => id === project[0].projectSupervisorId)
  );
  const [projectStage, setProjectStage] = React.useState(
    projectStages.find(({ id }) => id === project[0].stage_id)
  );
  const [projectStatus, setProjectStatus] = React.useState(
    projectStatuses.find(({ id }) => id === project[0].status_id)
  );
  const [projectType, setProjectType] = React.useState(
    projectTypes.find(({ id }) => id === project[0].projectType_id)
  );
  const [customerApproval, setCustomerApproval] = React.useState(
    customerApprovals.find(({ id }) => id === project[0].customerApproval_id)
  );
  const [autoFillHVAC, setautoFillHVAC] = React.useState(
    customerApprovals.find(({ id }) => id === project[0].autoFillHVAC)
  );

  const [autoFillPermits, setautoFillPermits] = React.useState(
    autoFill.find(({ value }) => value === project[0].autoFillPermits)
  );

  const [autoFillRefrigeration, setautoFillRefrigeration] = React.useState(
    customerApprovals.find(({ id }) => id === project[0].autoFillRefrigeration)
  );

  const [keyStatus, setKeyStatus] = React.useState(project[0].keyStatus);
  const [scope, setScope] = React.useState(project[0].scope);
  const [mcsNotes, setMcsNotes] = React.useState(project[0].projectNotes);

  //setWarehouse(project.cityName);

  // const handleWarehouseChange = (event) => {
  //   setWarehouse(event.target.value);
  // };

  //console.log('general info project- ', project);
  //console.log('general info Project Items- ', projectItems);
  //console.log('General info warehouses- ', warehouses);

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

  // const generalInfoNameStyle = {
  //   fontWeight: 'bold',
  //   borderWidth: '0px',
  //   borderColor: '#aaaaaa',
  //   borderRightColor: 'white',
  //   borderStyle: 'solid',
  //   height: '10px',
  //   // fontSize: '0.9em',
  // };

  // const generalInfoFieldsStyle = {
  //   // fontWeight: 'bold',
  //   borderWidth: '0px',
  //   borderColor: '#aaaaaa',
  //   borderStyle: 'solid',
  //   height: '10px',
  // };

  const classes = styles;

  //for handling form values
  // const [formData, setFormData] = useState({
  //   warehouse: '',
  // });
  // const { warehouse } = formData;

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  function handleChange(event) {
    event.preventDefault();
    setWarehouse(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('submit clicked');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card style={cardStyle}>
        <CardHeader
          style={cardHeaderStyle}
          titleTypographyProps={{ variant: 'h6' }}
          title="Project Info"
        ></CardHeader>
      </Card>
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
        <TableContainer>
          <Table
            sx={{ maxWidth: 950 }}
            style={{ border: 'none' }}
            aria-label="simple table"
          >
            <TableHead>
              <tr className={classes.row}>
                <td style={generalInfoNameStyle}>MCS Project#</td>
                <td align="left" style={generalInfoFieldsStyle}>
                  <TextField
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: 'center' }}
                    value={project[0].mcsNumber}
                  />
                </td>
                <td style={generalInfoNameStyle}>Warehouse</td>
                <td align="left" style={generalInfoFieldsStyle}>
                  {/* <Autocomplete
                    id="warehouse"
                    value={project.cityName}
                    onChange={(event, value) => {
                      console.log(value);
                      setWarehouse(value);
                    }}
                    options={warehouses}
                    // options={warehouses.map(({ id, cityname }) => ({
                    //   value: id,
                    //   label: cityname,
                    // }))}
                    key={warehouses.id}
                    getOptionLabel={(warehouses) =>
                      `${warehouses.cityname} ${warehouses.state}`
                    }
                    getOptionValue={(warehouses) => `${warehouses.id}`}
                    size="small"
                    sx={{ width: 300 }}
                    renderInput={(params, option) => (
                      <TextField {...params} label="Warehouse Options" />
                      // <li {...params} key={option.id}>
                      //   {option.cityname}
                      // </li>
                    )}
                  /> */}
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="warehouse"
                    value={warehouse}
                    onChange={(event, value) => {
                      console.log(value);
                      setWarehouse(value);
                    }}
                    label="Age"
                  >
                    {projectItems?.map((option) => {
                      return (
                        <MenuItem value={option.id}>{option.name}</MenuItem>
                      );
                    })}
                  </Select> */}
                  <Select
                    className="basic-single"
                    name="warehouse"
                    id="warehouse"
                    options={warehouses}
                    // value={warehouses.find(
                    //   ({ warehouseID }) =>
                    //     warehouseID === project[0].warehouseID
                    // )}
                    value={warehouse}
                    getOptionLabel={(option) => option.cityname}
                    getOptionValue={(option) => option.id}
                    style={{ zIndex: 1000 }}
                    onChange={(e) => setWarehouse(e)}
                    // onChange={handleChange}
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
                    onChange={(e) => setProjectItem(e)}
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
                    onChange={(e) => setProjectClass(e)}
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
                    onChange={(e) => setManager(e)}
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
                    onChange={(e) => setSupervisor(e)}
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
                    onChange={(e) => setProjectStage(e)}
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
                    onChange={(e) => setProjectStatus(e)}
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
                    onChange={(e) => setProjectType(e)}
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
                    onChange={(e) => setCustomerApproval(e)}
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
                    onChange={(e) => setautoFillHVAC(e)}
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
                    onChange={(e) => setautoFillRefrigeration(e)}
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
                    onChange={(e) => setautoFillPermits(e)}
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
                    onChange={(e) => setKeyStatus(e)}
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
                    onChange={(e) => setScope(e)}
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
                    onChange={(e) => setMcsNotes(e)}
                  />
                </td>
              </tr>
            </TableHead>
          </Table>
        </TableContainer>
      </Card>
    </form>
  );
};

export default withStyles(styles)(GeneralInfo);

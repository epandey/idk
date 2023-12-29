// Core libraries
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// UI libraries
import { Card } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { style } from '@mui/system';

// local imports

const Addproject = () => {
  // Styling css variables
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

  return (
    <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
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
          <table
            id="generalInformationTable"
            class="table table-hover"
            sx={tableStyle}
          >
            {/* <!-- Row 1 --> */}
            <tbody>
              <tr>
                {/* <!-- MCS Project # --> */}
                <td style={{ width: '20%' }}>
                  <b>MCS Project #</b>
                </td>
                <td>
                  <input
                    id="mcsNumber"
                    type="text"
                    maxLength="5"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                  ></input>
                </td>

                {/* <!-- Warehouse --> */}
                <td>
                  <b>Warehouse</b>
                </td>
                <td>
                  <select id="warehouse" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>
              </tr>

              <tr>
                {/* <!-- Row 2 --> */}

                {/* <!-- Item --> */}
                <td style={{ width: '20%' }}>
                  <b>Item</b>
                </td>
                <td>
                  <select id="project" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>

                {/* <!-- Project --> */}
                <td>
                  <b>Project</b>
                </td>
                <td>
                  <select
                    id="class"
                    class="pointer"
                    onfocus="this.setAttribute('PrvSelectedValue',this.value);"
                    onchange="if(confirm('Are you sure you want to change the value of Project?  NOTE: The Project-related data in the Closeout tab will be auto-filled again.')==false){ this.value=this.getAttribute('PrvSelectedValue');return false; } else { autofillProjectClass(); }"
                  >
                    {/* <!-- <option value="default">--Please specify the project type--</option> --> */}
                  </select>
                </td>
              </tr>

              {/* <!-- Row 3 --> */}
              <tr>
                {/* <!-- Manager --> */}
                <td>
                  <b>Manager</b>
                </td>
                <td>
                  <select id="manager" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>

                {/* <!-- Supervisor --> */}
                <td style={{ width: '20%' }}>
                  <b>Supervisor</b>
                </td>
                <td style={{ width: '30%' }}>
                  <select id="supervisor" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>
              </tr>

              {/* <!-- Row 4 --> */}
              <tr>
                {/* <!-- Stage --> */}
                <td>
                  <b>Stage</b>
                </td>
                <td>
                  <select
                    id="stage"
                    class="pointer"
                    onChange="changeStatus()"
                    onLoad="changeStatus()"
                  >
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>

                {/* <!-- Status --> */}
                <td>
                  <b>Status</b>
                </td>
                <td>
                  <select id="status" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>
              </tr>

              {/* <!-- Row 5 --> */}
              <tr>
                {/* <!-- Type --> */}
                <td>
                  <b>Type</b>
                </td>
                <td>
                  <select id="pType" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>

                {/* <!-- Customer Approval --> */}
                <td>
                  <b>Customer Approval</b>
                </td>
                <td>
                  <select id="customerApproval" class="pointer">
                    <option value="default">--Please select an option--</option>
                  </select>
                </td>
              </tr>

              {/* <!-- Row 6 --> */}
              <tr>
                {/* <!-- HVAC --> */}
                <td>
                  <b>HVAC</b>
                </td>
                <td>
                  <select
                    id="autofill-HVAC"
                    class="pointer"
                    onfocus="this.setAttribute('PrvSelectedValue',this.value);"
                    onchange="if(confirm('Are you sure you want to change the value of HVAC?  NOTE: The HVAC-related data in the Closeout tab will be auto-filled again.')==false){ this.value=this.getAttribute('PrvSelectedValue');return false; }  else { autofillHVAC(); }"
                  >
                    {/* <!-- <option value="default">--Does this project require an HVAC unit?--</option> --> */}
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                    <option value="2">TBD</option>
                  </select>
                </td>

                {/* <!-- Refrigeration --> */}
                <td>
                  <b>Refrigeration</b>
                </td>
                <td>
                  <select
                    id="autofill-Refrigeration"
                    class="pointer"
                    onfocus="this.setAttribute('PrvSelectedValue',this.value);"
                    onchange="if(confirm('Are you sure you want to change the value of Refrigeration?  NOTE: The Refrigeration-related data in the Closeout tab will be auto-filled again.')==false){ this.value=this.getAttribute('PrvSelectedValue');return false; } else{ autofillRefrigeration(); }"
                  >
                    {/* <!-- <option value="default">--Does this project require refrigeration?--</option>  --> */}
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                    <option value="2">TBD</option>
                  </select>
                </td>
              </tr>

              {/* <!-- Row 7 --> */}
              <tr>
                {/* <!-- Permits --> */}
                <td>
                  <b>Permits</b>
                </td>
                <td>
                  <select
                    id="autofill-Permits"
                    class="pointer"
                    onfocus="this.setAttribute('PrvSelectedValue',this.value);"
                    onchange="if(confirm('Are you sure you want to change the value of Permits?  NOTE: All of the data in the Permits and Inspections tab will be auto-filled again.')==false){ this.value=this.getAttribute('PrvSelectedValue');return false; } else { autofillPermits(); }"
                  >
                    {/* <!-- <option value="default">--Does this project require permits?--</option>  --> */}
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    <option value="0">TBD</option>
                  </select>
                </td>

                {/* <!-- Key status --> */}
                <td style={{ width: '20%' }}>
                  <b>Key Status</b>
                </td>
                <td>
                  <input
                    id="keyStatus"
                    type="text"
                    maxLength="30"
                    style={{ width: '250px' }}
                  ></input>
                </td>
              </tr>

              {/* <!-- Row 8 --> */}

              {/* <!-- Scope --> */}
              <tr>
                <td class="bold">Scope</td>
                <td>
                  <textarea
                    class="scrollTextBox"
                    maxLength="999"
                    id="scope"
                    rows="5"
                    cols="40"
                  ></textarea>
                </td>

                {/* <!-- MCS Notes --> */}
                <td class="bold">MCS Notes</td>
                <td rowspan="2">
                  <textarea
                    style={{ width: '600px', height: '159px' }}
                    class="scrollTextBox"
                    maxLength="999"
                    id="notes"
                    rows="5"
                    cols="40"
                    onDoubleClick="dateFillFunction(this)"
                  ></textarea>
                </td>
              </tr>

              {/* <!-- This is an unused text field. If at some point someone would like to add a new text field for general information about a project, simply uncomment and rename this field.
	        <tr>
	        <td class="bold">Customer Notes TEST</td>
	        <td><textarea  class="scrollTextBox" maxLength="999" id="zUpdates" rows="5" cols="40" ondblclick = "dateFillFunction(this)"></textarea></td>
	        </tr>	
	  -->        */}
            </tbody>
          </table>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
};

export default Addproject;

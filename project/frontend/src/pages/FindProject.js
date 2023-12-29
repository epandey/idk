// core libraries
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import { useEffect, useState } from 'react';
import Spinner from '../components/layout/Spinner';
import projectsDashboard from '../components/Dashboard/projectsDashboard';

// UI libraries
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';

import SearchProjects from '../components/Projects/SearchProjects';

const pages = [
  'Project Info',
  'Proposals',
  'Equipment',
  'Pricing Element',
  'Permits/Inspections',
  'Project Scope',
  'Closeout',
  'Scorecard',
  'Settings',
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const dropdownItems = {
  'Project Info': {
    name: 'Project Info',
    items: [
      'General Info',
      'Scheduling',
      'Tasks',
      'Financial',
      'Customer Notes',
    ],
  },
  Proposals: {
    name: 'Proposals',
    items: [
      'Price Estimate Summary',
      'Worksheet',
      'Equipment',
      'Cost Comparison',
      'Item5',
    ],
  },
  Closeout: {
    name: 'Closeout',
    items: ['Closeout Documents', 'AIA', 'Warranty Letters and Final Liens'],
  },
};

function DropDownComp(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ color: 'white' }}
      >
        {props.name}
      </Button>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </div>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {props.items.map((item) => (
                    <MenuItem onClick={handleClose}>{item}</MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [stageAllButtonChecked, setStageAllButtonChecked] =
    React.useState(false);
  const [stageNoneButtonChecked, setStageNoneButtonChecked] =
    React.useState(false);
  const [stageBudgetaryButtonChecked, setStageBudgetaryButtonChecked] =
    React.useState(false);
  const [stageProposalButtonChecked, setStageProposalButtonChecked] =
    React.useState(false);
  const [stageActiveButtonChecked, setStageActiveButtonChecked] =
    React.useState(false);
  const [stageClosedButtonChecked, setStageClosedButtonChecked] =
    React.useState(false);
  const [stageOnholdButtonChecked, setStageOnholdButtonChecked] =
    React.useState(false);
  const [stageCanceledButtonChecked, setStageCanceledButtonChecked] =
    React.useState(false);

  const [typeNoneButtonChecked, setTypeNoneButtonChecked] =
    React.useState(false);
  const [typeAllButtonChecked, setTypeAllButtonChecked] = React.useState(false);
  const [typeCButtonChecked, setTypeCButtonChecked] = React.useState(false);
  const [typeCrButtonChecked, setTypeCrButtonChecked] = React.useState(false);
  const [typeFButtonChecked, setTypeFButtonChecked] = React.useState(false);
  const [typeHvacButtonChecked, setTypeHvacButtonChecked] =
    React.useState(false);
  const [typeRButtonChecked, setTypeRButtonChecked] = React.useState(false);
  const [typeRRButtonChecked, setTypeRRButtonChecked] = React.useState(false);
  const [typeRXButtonChecked, setTypeRXButtonChecked] = React.useState(false);

  const [category, setCategory] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function createData(
    warehouse,
    mcsnum,
    item,
    score,
    status,
    startdate,
    enddate,
    manager,
    keystatus
  ) {
    return {
      warehouse,
      mcsnum,
      item,
      score,
      status,
      startdate,
      enddate,
      manager,
      keystatus,
    };
  }

  const rows = [
    createData(
      '99 Ranch - Long Island',
      11112,
      '2-Tier Deli Lineup',
      'Red',
      'Awaiting Equipment',
      '06/26/2021',
      'Unavailable',
      'MCSAdmin',
      '-'
    ),
    createData(
      '99 Ranch - Long Island',
      11112,
      'Refrigeration',
      'Red',
      'Awaiting Equipment',
      '06/26/2021',
      'Unavailable',
      'MCSAdmin',
      '-'
    ),
    createData(
      '99 Ranch - Long Island',
      11112,
      '2-Tier Deli Lineup',
      'Red',
      'Awaiting Equipment',
      '06/26/2021',
      'Unavailable',
      'MCSAdmin',
      '-'
    ),
  ];

  return (
    <>
      <Card style={{ marginTop: '1rem' }}>
        <CardHeader
          title="Search Criteria"
          action={<Button variant="contained">Add Parameter</Button>}
        ></CardHeader>
        <CardContent>
          <Grid direction="column">
            <Grid item>
              <FormControl>
                <FormGroup>
                  <Grid row>
                    <FormLabel label="Stage: ">
                      <span style={{ fontWeight: 'bold', color: 'black' }}>
                        Stage: &nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageNoneButtonChecked}
                          onChange={() => {
                            setStageNoneButtonChecked(!stageNoneButtonChecked);
                          }}
                          name="All"
                        />
                      }
                      label="All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageAllButtonChecked}
                          onChange={() => {
                            setStageAllButtonChecked(!stageAllButtonChecked);
                          }}
                          name="None"
                        />
                      }
                      label="None&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageBudgetaryButtonChecked}
                          onChange={() => {
                            setStageBudgetaryButtonChecked(
                              !stageBudgetaryButtonChecked
                            );
                          }}
                          name="Budgetary"
                        />
                      }
                      label="Budgetary"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageProposalButtonChecked}
                          onChange={() => {
                            setStageProposalButtonChecked(
                              !stageProposalButtonChecked
                            );
                          }}
                          name="Proposal"
                        />
                      }
                      label="Proposal"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageActiveButtonChecked}
                          onChange={() => {
                            setStageActiveButtonChecked(
                              !stageActiveButtonChecked
                            );
                          }}
                          name="Active"
                        />
                      }
                      label="Active&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageClosedButtonChecked}
                          onChange={() => {
                            setStageClosedButtonChecked(
                              !stageClosedButtonChecked
                            );
                          }}
                          name="Closed"
                        />
                      }
                      label="Closed&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageOnholdButtonChecked}
                          onChange={() => {
                            setStageOnholdButtonChecked(
                              !stageOnholdButtonChecked
                            );
                          }}
                          name="On Hold"
                        />
                      }
                      label="On Hold&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={stageCanceledButtonChecked}
                          onChange={() => {
                            setStageCanceledButtonChecked(
                              !stageCanceledButtonChecked
                            );
                          }}
                          name="Canceled"
                        />
                      }
                      label="Canceled"
                    />
                  </Grid>
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <FormGroup>
                  <Grid row>
                    <FormLabel label="Type: ">
                      <span style={{ fontWeight: 'bold', color: 'black' }}>
                        Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeNoneButtonChecked}
                          onChange={() => {
                            setTypeNoneButtonChecked(!typeNoneButtonChecked);
                          }}
                          name="All"
                        />
                      }
                      label="All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeAllButtonChecked}
                          onChange={() => {
                            setTypeAllButtonChecked(!typeAllButtonChecked);
                          }}
                          name="None"
                        />
                      }
                      label="None&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeCButtonChecked}
                          onChange={() => {
                            setTypeCButtonChecked(!typeCButtonChecked);
                          }}
                          name="C"
                        />
                      }
                      label="C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeCrButtonChecked}
                          onChange={() => {
                            setTypeCrButtonChecked(!typeCrButtonChecked);
                          }}
                          name="CR"
                        />
                      }
                      label="CR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeFButtonChecked}
                          onChange={() => {
                            setTypeFButtonChecked(!typeFButtonChecked);
                          }}
                          name="F"
                        />
                      }
                      label="F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeHvacButtonChecked}
                          onChange={() => {
                            setTypeHvacButtonChecked(!typeHvacButtonChecked);
                          }}
                          name="HVAC"
                        />
                      }
                      label="HVAC&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeRButtonChecked}
                          onChange={() => {
                            setTypeRButtonChecked(!typeRButtonChecked);
                          }}
                          name="R"
                        />
                      }
                      label="R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeRRButtonChecked}
                          onChange={() => {
                            setTypeRRButtonChecked(!typeRRButtonChecked);
                          }}
                          name="RR"
                        />
                      }
                      label="RR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={typeRXButtonChecked}
                          onChange={() => {
                            setTypeRXButtonChecked(!typeRXButtonChecked);
                          }}
                          name="RX"
                        />
                      }
                      label="RX"
                    />
                  </Grid>
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>

          <br></br>
          <Grid item direction="row">
            <Grid item direction="row">
              <Autocomplete
                id="combo-box-demo"
                value={category}
                onChange={(event, value) => {
                  console.log(value);
                  setCategory(value);
                }}
                options={[
                  'Warehouse',
                  'Item',
                  'Manager',
                  'Project',
                  'Supervisor',
                  'Status',
                ]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
              />
            </Grid>

            <Grid item direction="row">
              <Autocomplete
                id="combo-box-demo"
                value={category}
                onChange={(event, value) => {
                  console.log(value);
                  setCategory(value);
                }}
                options={[
                  'Warehouse',
                  'Item',
                  'Manager',
                  'Project',
                  'Supervisor',
                  'Status',
                ]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category Options" />
                )}
              />
            </Grid>

            <br></br>

            <Grid>
              <Grid>
                <p>
                  <span style={{ fontWeight: 'bold' }}>Sort By:</span>
                </p>
                {/* <Autocomplete></Autocomplete> */}
              </Grid>
              <br></br>
              <Grid>
                <p>
                  <span style={{ fontWeight: 'bold' }}>View:</span>
                </p>
                {/* <Autocomplete></Autocomplete> */}
              </Grid>
            </Grid>
            {/* <Grid row>
                <p>Stage</p>
                </Grid> */}
          </Grid>
        </CardContent>
      </Card>

      <br></br>

      {/* <Card style={{ marginTop: '1rem' }}>
        <CardContent>
           <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Warehouse</TableCell>
                  <TableCell align="right">MCS #</TableCell>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Score</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">End Date</TableCell>
                  <TableCell align="right">Manager</TableCell>
                  <TableCell align="right">Key Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.warehouse}
                    </TableCell>
                    <TableCell align="right">{row.mcsnum}</TableCell>
                    <TableCell align="right">{row.item}</TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.startdate}</TableCell>
                    <TableCell align="right">{row.enddate}</TableCell>
                    <TableCell align="right">{row.manager}</TableCell>
                    <TableCell align="right">{row.keystatus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> 
           <SearchProjects /> 
        </CardContent>
      </Card> */}
    </>
  );
};

const FindProject = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
};

FindProject.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(FindProject);

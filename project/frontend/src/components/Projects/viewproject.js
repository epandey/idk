import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getProject } from '../../actions/projects';
import { getProjectItems } from '../../actions/projectItem';
import { getProjectTasks } from '../../actions/projects';
import { getWarehouses } from '../../actions/warehouses';
import { getProjectClasses } from '../../actions/projectClass';
import { getManagers } from '../../actions/managers';
import { getStages } from '../../actions/projectStages';
import { getStatuses } from '../../actions/projectStatus';
import { getTypes } from '../../actions/projectTypes';
import { getCustomerApprovals } from '../../actions/customerApproval';
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FinancialContent from './FinancialContent';
import ControlledTreeView from '../Sidebar/ControlledTreeView';


import {
  AppBar,
  Box,
  Button,
  Card,
  CardHeader,
  ClickAwayListener,
  Container,
  Divider,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TabPanel,
  TableBody,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import GeneralInfo from './GeneralInfo';
import Scheduling from './Scheduling';
import Tasks from './Tasks';
import PricingInfo from './PricingInfo';
import CustomerNotes from './CustomerNotes';
import Equipment from './Equipment';
import AIA from './AIA';
import PricingElements from './PricingElements';
import PermitsInspections from './PermitsInspections';
import CloseoutDocuments from './CloseoutDocuments';
import WarrantyLettersandFinalLiens from './WarrantyLettersandFinalLiens';

import Spinner from '../layout/Spinner';

//local libraries
import { generalInfoFieldsStyle, generalInfoNameStyle, classes } from './Style';
import { setAlert } from '../../actions/alert';
import { insertProject } from '../../actions/insertProject';
import { login } from '../../actions/auth';




const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ViewProject = ({
  getProject,
  project: { project },
  getProjectItems,
  projectItems: { projectItems },
  getProjectTasks,
  projectTasks:{projectTasks},
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
  const { state } = useLocation();
  console.log('Id to fetch project is- ', state);
  
  useEffect(() => {
    getProject(state);
    getProjectItems();
    getProjectTasks();
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
    getProjectTasks,
    getWarehouses,
    getProjectClasses,
    getManagers,
    getStages,
    getStatuses,
    getTypes,
    getCustomerApprovals,
  ]);

  const useStyles = makeStyles((theme) => ({
    tr: {
      height: 30,
    },
    td: {
      padding: '0px 0px',
    },
    textfields: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#4f86e0', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '200px', // set the maximum width here
        minWidth: '200px', // set the minimum width here
        height: '35px',
      },
    },
    textAreas: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#4f86e0', // set the border color here
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        maxWidth: '250px', // set the maximum width here
        minWidth: '250px', // set the minimum width here
        height: '110px',
      },
    },
  
    
    td :{
      padding: '8px',
      textalign: 'left',
      borderbottom: '1px solid #ddd'
    },
    tr :{
      padding: '8px',
      textalign: 'left',
      borderbottom: '1px solid #ddd',
      
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
        borderColor: 'red',
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
      borderColor: 'blue',
    },

    tab: {
      color: theme.palette.common.white, // set the text color to white
    },
    selected: {
      color: theme.palette.primary.black, // set the selected tab text color to primary color
      backgroundColor: 'black', // set the background color of the selected tab to white
      color: 'yellow',
    },

    datePickerStyles: {
      '& .react-datepicker__input-container input': {
        border: '1px solid blue',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // set the shadow here
        borderRadius: 5,
      },
    },
  }));
  const classes2 = useStyles();
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
  //console.log('in view project with id- ', projectID);
  const [appBarSelectedOption, setAppBarSelectedOption] = React.useState('');
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // For handling active tab
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const [financialSeleted, setFinancialSelected] = React.useState('');

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  }


  // css styling variables
  const headerStyle = {
    my: 2,
    color: 'white',
    display: 'inline-block',
    textTransform: 'capitalize',
    fontSize: '1.1em',
   
  };
//cardHeaderStyle
  const cardHeaderStyle = {
    background: '#1976d2',
    color: 'white',
    fontSize: '1.1em',
  };

   // css style variables
   const cardStyle = {
    // marginLeft: '10rem',
    // marginRight: '10rem',
  };

  const renderContent = (value, project) => {
    switch (value) {
      case 'General Info':
        return (
          <GeneralInfo
            project={project}
            projectItems={projectItems}
            projectTasks={projectTasks}
            warehouses={warehouses}
            projectClasses={projectClasses}
            managers={managers}
            projectStages={projectStages}
            projectStatuses={projectStatuses}
            projectTypes={projectTypes}
            customerApprovals={customerApprovals}
          />
        );
      case 'Scheduling':
        return <Scheduling project={project} />;
      case 'Tasks':
        return <Tasks project={project} />;
      case 'Financial':

      
        return(
        <>

            <FinancialContent></FinancialContent>

      </>
      
        );
      case 'Customer Notes':
        return <CustomerNotes project={project} />;
      case 'Pricing Info':
        return <PricingInfo />;
      case 'Equipment':
        return <Equipment />;
      case 'AIA':
        return <AIA />;
      case 'Pricing Elements':
        return <PricingElements />;
      case 'Permits/Inspections':
        return <PermitsInspections />;
      case 'Closeout Documents':
        return <CloseoutDocuments />;
      case 'Warranty Letters and Final Liens':
        return <WarrantyLettersandFinalLiens />;
      default:
        return null;
    }
  };

  const pages = [
    'Project Info',
    'Proposals',
    'Equipment',
    'Pricing Elements',
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

  const tabbedItems = {
    Financial: {
      name: 'Financial',
      items: [
        'Pricing Info',
        'Accounts Receivable',
        'Accounts Payable', 
        'AIA Cost Items',
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
          style={headerStyle}
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
              <Paper style={{ background: '#1976d2' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {props.items.map((item) => (
                      <MenuItem
                        style={{ color: 'white' }}
                        onClick={(value) => {
                          console.log('menu Item', item);
                          setAppBarSelectedOption(item);
                          handleClose();
                        }}
                      >
                        {item}
                      </MenuItem>
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
  return (
    <>
      {project === null ? (
        <Spinner />
      ) : (
        <>
          {/* <div className="title">
            {project[0].cityName} #{project[0].warehouseID} -{' '}
            {project[0].projectItem}
          </div>
          {console.log(project)} */}
          {/* handling the top navigation bar */}
          <ControlledTreeView></ControlledTreeView>
          {/* <AppBar position="static">
            <Container maxWidth="lg">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted 
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          setAppBarSelectedOption(page);
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <Box
                  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },zIndex:9 }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  {pages.map((page) => {
                    if (dropdownItems[page]) {
                      return (
                        <DropDownComp
                          name={dropdownItems[page].name}
                          items={dropdownItems[page].items}
                          style={headerStyle}
                        />
                      );
                    } else {
                      return (
                        <Button
                          key={page}
                          onClick={(item) => {
                            console.log(page);
                            setAppBarSelectedOption(page);
                            handleCloseNavMenu();
                          }}
                          style={headerStyle}
                        >
                          {page}
                        </Button>
                      );
                    }
                  })}
                </Box>
              </Toolbar>
            </Container>
          </AppBar> */}

          {renderContent(appBarSelectedOption, project)}
        </>
      )}
    </>
  );
};

ViewProject.propTypes = {
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
})(ViewProject);

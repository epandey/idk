    import * as React from 'react';
  import { useEffect, useState } from 'react'; // Import useState
  import { getProjectTasks } from '../../actions/projectTasks';
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';
  import AddTask from './AddTask';
  import { makeStyles } from '@material-ui/core';
  import {
    // ... other imports ...
    Modal,
    IconButton,
    
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import Moment from 'moment';
  import Checkbox from '@mui/material/Checkbox';
  import { TablePagination } from '@mui/material';
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
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
    TableBody,
  } from '@mui/material';
  import Paper from '@mui/material/Paper';
  import Button from '@mui/material/Button';
  import { Link } from 'react-router-dom';
import projectTasks from '../../reducers/projectTasks';
  const useStyles = makeStyles((theme) => ({
    truncate: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      maxWidth: '175px', // or however long you want before truncating
      cursor: 'pointer',
      '&:hover': {
        whiteSpace: 'normal',
        maxWidth: 'auto',
        backgroundColor: theme.palette.action.hover,
      }
    },
    modalContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right:'50%',
      transform: 'translate(-50%, -50%)',
      width: 800,
      bgcolor: 'background.paper',
      border: '2px solid white',
      boxShadow: 24,
      p: 4,
    },  
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }));
  console.log(projectTasks.projectTasks)
  const Tasks = ({  
    project,
    getProjectTasks,
    projectTasks,
  }) => {
    useEffect(()  => {
      
      getProjectTasks(project.project.project_id);
    }, [getProjectTasks]);

    const [status, setStatus] = useState([]); // Use useState for status
    const [printing, setPrinting] = useState(false); 
    const [showAddTask, setShowAddTask] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [editingTask,setEditingTask]=useState(null)
    const [selectedStatus,setSelectedStatus]=useState([]);
    const [combinedRows, setCombinedRows]=useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [taskStatuses, setTaskStatuses] = useState({});

    // const [statusMapping, setStatusMapping] = useState({});




    
    const classes = useStyles();

    const handleSelectRow = (id) => {
      const newSelectedRows = [...selectedRows];
    
      if (newSelectedRows.includes(id)) {
        const index = newSelectedRows.indexOf(id);
        newSelectedRows.splice(index, 1);
      } else {
        newSelectedRows.push(id);
      }
    
      setSelectedRows(newSelectedRows);
    };
    
    const statusMapping = {
      1: 'Open',
      2: 'In Progress',
      3: 'Closed',
      // Add other statuses here
    };

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setStatus(value);
      setSelectedStatus(value);
    };
    // const handleAddTaskClick=()=>{
    //   alert("button is clicked");
    //   setShowAddTask(!showAddTask);
    // }
    const handleEditButtonClick = () => {
      const updatedTasks = selectedRows.map((taskId) => {
        return {
          id: taskId,
          status: taskStatuses[taskId], // Get the new status from the taskStatuses state
        };
      });
      updateTasksInDatabase(updatedTasks);
    };
    const updateTasksInDatabase = (updatedTasks) => {
      // replace with actual implementation to update tasks in database
      console.log('Update these tasks in the database:', updatedTasks);
      // apiCallToUpdateTasks(updatedTasks);
    };

    const handleStatusChange = (taskId, newStatus) => {
      console.log('Handling status change for task', taskId, 'new status', newStatus); // Add this line
      setTaskStatuses({
        ...taskStatuses,
        [taskId]: newStatus,
      });
    };

    const handlePrintTasks = () => {
      // printing only the table content
      var divToPrint = document.getElementById('TableContainer');
      var newWin = window.open("");
      newWin.document.write(divToPrint.outerHTML);
      newWin.print();
      newWin.close();
    }
    const handleAddTaskClick = () => {
      setOpenModal(true); // Open the modal when "Add Task" button is clicked
    };
  
    const handleCloseModal = () => {
      setOpenModal(false); // Close the modal when it is closed
    };

    function createData(
      task,
      description,
      mcs,
      assignee,
      due,
      priority,
      status,
      notes,
      Checkbox
    ) {
      return {
        task,
        description,
        mcs,
        assignee,
        due,
        priority,
        status,
        notes,
        Checkbox
      };
    }

    // const staticRows = [
     
    //   createData(
    //     'Plumbing Repairs/ Gas Inspection',
    //     'Perform annual safety inspections for Con Edison.',
    //     'Alex Wagner',
    //     'Expert Mechanical',
    //     '10/08/2021',
    //     '1',
    //     'Complete',
    //     'hi my name is ekta Perform annual safety inspections for Con Edison.Perform annual safety inspections for Con Edison.'
    //   ),
    //   createData(
    //     'Plumbing Repairs/ Gas Inspection',
    //     'Perform annual safety inspections for Con Edison.',
    //     'Alex Wagner',
    //     'Expert Mechanical',
    //     '10/08/2021',
    //     '1',
    //     'Open',
    //     '-'
    //   ),
    //   createData(
    //     'Plumbing Repairs/ Gas Inspection',
    //     'Perform annual safety inspections for Con Edison.',
    //     'Alex Wagner',
    //     'Expert Mechanical',
    //     '10/08/2021',
    //     '1',
    //     'Open',
    //     '-'
    //   ),
    // ];

    const names = ['All', 'Open & Complete', 'Open', 'Complete', 'Closed'];
    console.log(project)
    const ProjectTasksData = () => {
      // const combinedRows = [...staticRows];
      const classes = useStyles();
      let displayedRows = projectTasks?.projectTasks || [];

      if (!selectedStatus.includes('All')) {
        displayedRows = displayedRows.filter((row) => selectedStatus.includes(statusMapping[row.taskStatus_id]));
      }
    
      if (!projectTasks || projectTasks === 'FAIL') {
        return <TableRow> No data to show</TableRow>;
      // } else if (Array.isArray(projectTasks)) {
      //   displayedRows.projectTasks.push(...projectTasks);
      // } else {
      //   displayedRows.push(projectTasks);
      }
      // console.log("displayedrows",displayedRows[3].projectTasks[0].id)
      return displayedRows
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((row, index) =>  (
        <TableRow
        key={index}
        sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}
        className={classes.tableRowHover}
      >
        <TableCell sx={{ border: 'none' }} component="th" scope="row" className={classes.truncate}>
          {row.title}
        </TableCell>
        <TableCell align="left" sx={{ border: 'none' }} className={classes.truncate}>
          {row.description}
        </TableCell>
        {/* <TableCell align="left" sx={{ border: 'none' }}>
          {row.mcs}
        </TableCell> */}
        <TableCell align="left" sx={{ border: 'none' }}>
          {row.assignee_id}
        </TableCell>
        <TableCell align="left" sx={{ border: 'none' }}>
          {Moment(row.due).format('MM/DD/yyyy')}
        </TableCell>
        {/* <TableCell align="left" sx={{ border: 'none' }}>
          {row.priority}
        </TableCell> */}
       <TableCell align="left" sx={{ border: 'none' }}>
          <Select
             value={taskStatuses[row.id] || row.taskStatus_id}  // Use the local state if available
             onChange={(e) => {
               handleStatusChange(row.id, e.target.value);
             }}
            sx={{
              minWidth: '100px', // Set the minimum width
              maxHeight: '30px', // Set the maximum height
            }}
          >
            <MenuItem value={1}>Open</MenuItem>
            <MenuItem value={2}>In Progress</MenuItem>
            <MenuItem value={3}>Closed</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </TableCell>
        <TableCell align="left" sx={{ border: 'none' }} className={classes.truncate}>
            {row.notes}
          </TableCell>
          <TableCell sx={{ border: 'none' }} padding="checkbox">
      <Checkbox
        checked={selectedRows.includes(row.id)}
        onChange={() => handleSelectRow(row.id)}
      ></Checkbox>
    </TableCell>
      </TableRow>
      ));
    };
    
    
    return (
      <>
        

        <Card sx={{ m: 1, maxWidth: 950 }}>
          <CardHeader
            style={{ background: '#467eac', color: 'white'}}
            title={<h1 style={{ fontSize: '18px',marginLeft:'12px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Tasks</h1>}
            action={
              <>

              <Button variant="contained" onClick={handleAddTaskClick} style={{ marginLeft: '0.4rem', marginRight: '1.5rem', textTransform: 'none' }}>
                {showAddTask ? 'Hide Add Task' : 'Add Task'}
              </Button>
              <Button 
              variant="contained" 
              onClick={handleEditButtonClick} 
              style={{ marginLeft: '0.4rem', marginRight: '1.5rem', textTransform: 'none' }}
              >
              Edit Task
             </Button>
                <Button backgroundColor="green" variant="contained" onClick={handlePrintTasks} style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' }}>
                  Print Tasks
                </Button>
              </>
            }
          ></CardHeader>
          <CardContent>
            <FormControl sx={{ m: 1, maxWidth: 650 }}>
              <InputLabel id="demo-multiple-name-label">Task</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={selectedStatus}
                onChange={handleChange}
                input={<OutlinedInput label="Status" />}
                fullWidth
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TableContainer id="TableContainer" component={Paper}>
        <Table sx={{ minWidth: 650, border: 'none' }} aria-label="simple table">
          <TableHead sx={{ border: 'none' }}>
            <TableRow sx={{ border: 'none' }}> 
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }}>Task</TableCell>
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Description</TableCell>
              {/* <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">MCS</TableCell> */}
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Assignee</TableCell>
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Due date</TableCell>
              {/* <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Priority</TableCell> */}
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Status</TableCell>
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Notes</TableCell>
              <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Update</TableCell>
              {/* <TableCell sx={{ border: 'none', fontWeight: 'bold' }} padding="checkbox">
                <Checkbox
                  // Add your own logic for checkbox state, such as:
                  // checked={isselected}
                  // onChange={(event) => handleSelectRow(event, row.name)}
                ></Checkbox>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
          {projectTasks !== null ? ProjectTasksData() : <TableRow><TableCell colSpan={8}>Loading...</TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={projectTasks?.projectTasks?.length || 0}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
      />

          </CardContent>
        </Card>
        <Modal sx={{border:"none"}} open={openModal} onClose={handleCloseModal}>
        <div className={classes.modalContainer}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <AddTask />
        </div>
      </Modal>
      </>
    );
  };

  Tasks.propTypes = {
    getProjectTasks: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => ({
    projectTasks: state.projectTasks,
  });

  export default connect(mapStateToProps, {
    getProjectTasks,
  })(Tasks);

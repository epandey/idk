import * as React from 'react';
import { useEffect, useState } from 'react'; // Import useState
import { getTasks } from '../../actions/TasksSystem';
// import TasksSystem from '../../reducers/TasksSystem';
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
import Tasks from '../../reducers/TasksSystem';
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
  body:{
    justify:'center',
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

console.log("okay this might show the task",getTasks)

const TasksSystem = ({ getTasks, Tasks }) => {
  useEffect(() => {
    getTasks()
      .then((data) => {
        if (data && data.length > 0) {
          console.log("Tasks after useEffect:", data);
        } else {
          console.log("No tasks returned");
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, []);

  console.log("getTasks:",Tasks);
  const [status, setStatus] = useState([]); // Use useState for status
  const [printing, setPrinting] = useState(false); 
  const [showAddTask, setShowAddTask] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editingTask,setEditingTask]=useState(null)
  const [selectedStatus,setSelectedStatus]=useState([]);
  const [combinedRows, setCombinedRows]=useState([]);
  const [taskStatuses, setTaskStatuses] = useState({});
  
  const classes = useStyles();

  const statusMapping = {
    1: 'Open',
    2: 'In Progress',
    3: 'Closed',
    
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
  const handleEditTasks=(task)=>{
    setOpenModal(true);
  }
  const handleStatusChange = (taskId, newStatus) => {
    // You may want to update your Redux store or make an API call here.
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
    notes
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
    };
  }

 
  const names = ['All', 'Open & Complete', 'Open', 'Complete', 'Closed'];
  
  const TasksData = () => {
    // const combinedRows = [...staticRows];
    // const classes = useStyles();
    let displayedRows = [];

    if (selectedStatus.includes('All')) {
      displayedRows = {Tasks};
    // } else {
    //   displayedRows = projectTasks.projectTasks.filter((row) =>
    //     selectedStatus.includes(row.status)
    //   );
     }
     
    if (!Tasks || Tasks === 'FAIL'  && Tasks.length === 0) {
      return <TableRow> No data to show</TableRow>;
    // } else if (Array.isArray(projectTasks)) {
    //   displayedRows.projectTasks.push(...projectTasks);
    // } else {
    //   displayedRows.push(projectTasks);
    }
    // console.log("displayedrows",displayedRows[3].projectTasks[0].id)
    return Tasks?.slice(0, 10).map((row, index) =>(
      <TableRow
      key={index}
      sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}
      className={classes.tableRowHover}
    >
      <TableCell sx={{ border: 'none' }} component="th" scope="row">
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
        {Moment(row.due).format('DD/MM/yyyy')}
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
    </TableRow>
    ));
  };
  
  
  return (
    <>
      <Card sx={{ m:'2%', maxWidth: 950,marginLeft:'16%' }}>
        <CardHeader
          style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',marginLeft:'12px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Tasks</h1>}
          action={
            <>

            <Button variant="contained" onClick={handleAddTaskClick} style={{ marginLeft: '0.4rem', marginRight: '1.5rem', textTransform: 'none' }}>
              {showAddTask ? 'Hide Add Task' : 'Add Task'}
            </Button>
            <Button variant="contained" style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' }}>
                Edit Task
              </Button>
              <Button variant="contained" onClick={handlePrintTasks} style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' }}>
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
            <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Due</TableCell>
            {/* <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Priority</TableCell> */}
            <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Status</TableCell>
            <TableCell sx={{ border: 'none', fontWeight: 'bold' }} align="left">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Tasks !== null ? TasksData() : <TableRow><TableCell colSpan={8}>Loading...</TableCell></TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
                
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

TasksSystem.propTypes = {
  getTasks: PropTypes.func.isRequired,
  Tasks: PropTypes.array.isRequired,
};


const mapStateToProps = (state) => {
  console.log('Redux state:', state);
  return {
    Tasks: state.TasksSystem.Tasks,
  };
};



export default connect(mapStateToProps, { getTasks })(TasksSystem);

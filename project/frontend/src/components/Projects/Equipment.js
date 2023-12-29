import * as React from "react";
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
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Equipmentstable from "./Equipmentstable.js"
import AddEquipment from "./AddEquipment.js";
import { Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  // ... existing styles
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,  // Adjust the width as needed
    bgcolor: 'background.paper',
    border: '2px  #000',
    boxShadow: 24,
    p: 4,
  },
}));

const Equipment = () => {
  const [status, setStatus] = React.useState([]);
  const [showAddEquipment, setShowAddEquipment] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();
  const handleAddEquipmentClick = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };
 
  

  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(value);
  };

  function createData(
    name,
    description,
    supplier,
    proposaldate,
    deliverystatus,
    ordereddate,
    scheduleddate,
    actualdate,
    notes,
    unitprice,
    quantity,
    totalprice
  ) {
    return {
    name,
    description,
    supplier,
    proposaldate,
    deliverystatus,
    ordereddate,
    scheduleddate,
    actualdate,
    notes,
    unitprice,
    quantity,
    totalprice
    };
  }

  const rows = [
    createData(
      "Plumbing Parts",
      "Perform ",
      "Supplier 1",
      "10/08/2021",
      "Delivered",
      "10/20/2021",
      "10/20/2021",
      "10/20/2021",
      "None",
      "$259",
      3,
      "$259"
    ),
    createData(
      "Plumbing Parts",
      "Perform ",
      "Supplier 2",
      "11/09/2021",
      "Yet to be delivered",
      "11/25/2021",
      "11/25/2021",
      "11/25/2021",
      "None",
      "$459",
      3,
      "$259"
    ),
    
  ];

  

  return (
    <>
      {/* <Card >
        <CardHeader
          style={{ background: "#1976d2", color: "white" }}
          title="Proposals"
        ></CardHeader>
      </Card> */}

      <Card>
        <CardHeader 
        style={{ background: '#467eac', color: 'white'}}
        title={<h1 style={{ fontSize: '18px',margin:'-6px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Equipment</h1>}
          action={
            <>
                                    <Button 
                      onClick={handleAddEquipmentClick} 
                      variant="contained" 
                      style={{ marginLeft: "0.4rem", textTransform:'none' }}
                    >
                      Add Equipment
                    </Button>

              <Button variant="contained" style={{ marginLeft: "0.4rem",textTransform:'none' }}>
                Edit Equipment
              </Button>
              <Button variant="contained" style={{ marginLeft: "0.4rem", background: "green" ,textTransform:'none'}}>
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>
        <CardContent>
          
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 950 ,border:"white"}} aria-label="simple table">

              <TableBody>
                <Equipmentstable></Equipmentstable>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Modal open={openModal} onClose={handleCloseModal}>
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
    <AddEquipment />
  </div>
</Modal>
    </>
  );
};

export default Equipment;

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
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { transform } from "framer-motion";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CloseoutDocuments = () => {
  const [category, setCategory] = React.useState();
  return (
    <>
      <Card style={{ marginLeft: "0rem", marginRight: "5rem" }}>
        <CardHeader
        style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',margin:'-6px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Closeout Documents</h1>}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", background: "green" ,textTransform:'none'}}
              >
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>

        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 950 }}
            style={{
              borderWidth: "1px",
              borderColor: "white",
              borderStyle: "solid",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{lineHeight:"0.5rem"}}> 
                <TableCell style={{ border: "white" }}></TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    borderRight: "white",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Status</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                    
                  }}
                >Updated</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                    width:"50px",
                  }}
                ></TableCell>
                
              
              </TableRow>
              <TableRow sx={{lineHeight:"0.5rem", padding:"0px",margin:"0px",}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                   
                   
                  }}
                >Customer Closeout SignOff</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                    width:"30%",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
               
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                 
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Punch List</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >As-Built Drawings</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Closeout Photos</TableCell>
                <TableCell
                 style={{
                  fontWeight: "bold",
                  borderWidth: "0px",
                  borderColor: "white",
                  borderRightColor: "white",
                  borderStyle: "solid",
                  padding:"0px",
                  margin:"0px"
                }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    margin:"0px",
                    padding:"0px",

                  }}
                >HVAC Startup Form</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
                
              </TableRow>
             
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Alarm Form</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px",
                  }}
                >PBN/MT Screenshot</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "0px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",
                    margin:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: 300, align: "center" }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Table style={{ marginTop: "0rem",lineHeight:"0px"}}>
            <TableRow sx={{lineHeight:"0px"}}>
                <TableCell style={{ border: "none" }}></TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    borderRight: "white",
                    textAlign: "center",
                    margin:"0px",
                    padding:"0px",  
                  }}
                >Salvage Status</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Amount</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Date Updated</TableCell>
            </TableRow>
            <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    borderBottomColor: "white",
                    width: "20%",
                    padding:"0px",
                    margin:"0px",
                  }}
                >Salvage Value</TableCell>
                <TableCell
                 style={{
                  fontWeight: "bold",
                  borderWidth: "0px",
                  borderColor: "white",
                  borderRightColor: "white",
                  borderStyle: "solid",
                  padding:"0px",
                  margin:"0px"
                }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      textAlign: "center",
                      fontWeight: "bold",
                      borderColor: "white",
                      borderRight: "white",
                      width: "80%",
                      height: "2.5rem", // Adjust the height as needed
                      lineHeight: "1rem", // Adjust the line height as needed
                  
                    }}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  /></TableCell>
                  <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    borderBottomColor: "white",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                   <TextField
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: "100%", align: "center" }}
                  /></TableCell>
                  <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    borderBottomColor: "white",
                    padding:"0px",
                    margin:"0px",
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    
                    style={{ width:"100%", align: "center" }}
                  />
                </TableCell>
            </TableRow>
          </Table>
          <Table style={{ marginTop: "0rem"}}>
            <TableRow sx={{lineHeight:"0px"}}>
                <TableCell style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderTopColor: "white",
                    borderStyle: "solid",
                    width: "20%",
                    padding:"0px",
                    margin:"0px",
                  }}>Closeout Documents Notes</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderTopColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",padding:"0px",
                    margin:"0px",
                  }}
                >
                  <textarea
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    style={{ width:"100%", align: "center" }}
                  />
                </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default CloseoutDocuments;

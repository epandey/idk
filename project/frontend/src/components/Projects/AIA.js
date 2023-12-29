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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withStyles, makeStyles } from '@material-ui/core';

const AIA = () => {
  const useStyles = makeStyles({
    // table: {
    //   minWidth: 130,
    // },
    // tableRow: {
    //   height: 30,
    // },
    tableCell: {
      padding:"0px",margin:"0px"
    },
    // tableHead: {
    //   fontWeight: 'bold',
    // },
  });
  const [category, setCategory] = React.useState();
  return (
    <>
      {/* <Card style={{ marginLeft: "15rem", marginRight: "15rem" }}>
        <CardHeader
          style={{ background: "#1976d2", color: "white" }}
          title="Closeout"
        ></CardHeader>
      </Card> */}
      <Card style={{ marginLeft: "0rem", marginRight: "15rem" }}>
        <CardHeader
        style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',margin:'-6px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>AIA</h1>}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", background: "green"  ,textTransform:"none"}}
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
              <TableRow sx={{padding:"0px",margin:"0px"}}>
                <TableCell style={{ border: "white", padding:"0px",margin:"0px"}}></TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    borderRightColor: "white",
                    textAlign: "center",
                    padding:"0px",margin:"0px",
                  }}
                >
                   Status
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",
                    padding:"0px",margin:"0px"
                  }}
                >
                   Updated
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  G704 - Certificate of Substantial Completion
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={["N/A", "Incomplete", "Complete"]}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" style={{height:"20%"}}/>
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
                    padding:"0px",margin:"0px"
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  G706 - Affidavit of Payment of Debts and Claims
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
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
                    padding:"0px",margin:"0px",
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  G706A - Contractor's Lien Releases
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
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
                    padding:"0px",margin:"0px",
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  MG2 Project Sign-off
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
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
                    padding:"0px",margin:"0px",
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  Equipment Submittal
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",
                    padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
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
                    padding:"0px",margin:"0px",
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
                    padding:"0px",margin:"0px",
                  }}
                >
                  Operations and Maintenance Manuals
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    sx={{width:"80%",}}
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
                    textAlign: "center",padding:"0px",margin:"0px",
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
        </TableContainer>
      </Card>
    </>
  );
};

export default AIA;

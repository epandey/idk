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
import { withStyles } from "@material-ui/core";

const Customtd = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 'bold',
    border: 'none',
  },
  body: {
    fontSize: 10,
  },
  TableCell:{
    fontWeight: "bold",
    borderColor: "white",
    borderColor: "white",
    textAlign: "center",padding:"0px",margin:"0px",
  },
}))(TableCell);

const WarrantyLettersandFinalLiens = () => {
  const [category, setCategory] = React.useState();
  
  return (
    <>
      <Card style={{ marginLeft: "0rem", marginRight: "0rem" ,overflow:"none"}}>
        <CardHeader
        style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',margin:'-6px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Warranty Letters and Final Liens</h1>}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", background: "green" ,textTransform:"none"}}
              >
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>

        <TableContainer component={Paper} sx={{overflow:"none"}}>
          <Table
            sx={{ minWidth: 950,maxWidth:950 }}
            style={{
              borderWidth: "1px",
              borderColor: "white",
              borderStyle: "solid",
              padding:"20px",
              marginLeft:"35px",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow sx={{lineHeight:"0px",overflow:"none"}}>
                <TableCell style={{ fontWeight: "bold",border: "white" ,padding:"0px",margin:"0px",}}></TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    borderColor: "white",
                    textAlign: "center",padding:"0px",margin:"0px",
                  }}
                >Warranty Letter</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",padding:"0px",margin:"0px",
                  }}
                >Updated</TableCell>
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "left",padding:"0px",margin:"0px",
                  }}
                >Final Lien</TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",padding:"0px",margin:"0px",
                  }}
                >Final Lien</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderColor: "white",
                    textAlign: "center",padding:"0px",margin:"0px",
                  }}
                >Updated</TableCell>
              </TableRow>
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >MCS</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >GC</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Mechanical</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Electrical</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Plumbing</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Gas</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Sprinkler</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Polymer Floor</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Other(A)</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Other(B)</TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
                {/* <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                ></TableCell> */}
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
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
              <TableRow sx={{lineHeight:"0px"}}>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >Notes</TableCell>
                <TableCell
                colSpan={2}
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",paddingRight:"35px"
                  }}
                >
                   <TextField
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: "100%", align: "center" }}
                  />
                </TableCell>
                
                
                <TableCell
                colSpan={2}
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",padding:"0px",margin:"0px",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: "100%", align: "center" }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: "bold",
                    borderWidth: "1px",
                    borderColor: "white",
                    borderRightColor: "white",
                    borderStyle: "solid",
                    textAlign: "center",padding:"0px",margin:"0px",paddingRight:"35px"
                  }}
                >
                 
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          
        </TableContainer>
      </Card>
    </>
  );
};

export default WarrantyLettersandFinalLiens;

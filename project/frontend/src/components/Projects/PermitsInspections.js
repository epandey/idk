import * as React from 'react';
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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PermitsInspections = () => {
  const [category, setCategory] = React.useState();
  return (
    <>
      <Card style={{ marginLeft: '1rem', marginRight: '1rem' }}>
        <CardHeader
        style={{ background: '#467eac', color: 'white'}}
          title={<h1 style={{ fontSize: '18px',marginLeft:'-4px' ,fontFamily:'Helvetica',fontWeight:'bold'}}>Permits/Inspections</h1>}
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: '0.4rem',marginRight:'1.5rem', background: 'green' ,textTransform:'none'}}
              >
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>

        <TableContainer component={Paper} >
          <Table 
            sx={{ minWidth: 950 }}
            style={{
              border:"3px solid white"
            }}
            aria-label="simple table"
          >
            <TableHead sx={{border:"3px solid white"}}>
              <TableRow sx={{border:"3px solid white"}}>
                <TableCell style={{ border:"3px solid white" }}></TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    border:"3px solid white",padding:"0px",margin:"0px",
                  }}
                >
                  Permits Required
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    border:"3px solid white",
                    textAlign: 'center',padding:"0px",margin:"0px",
                  }}
                >
                  Permit Status
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    border:"3px solid white",
                    textAlign: 'center',padding:"0px",margin:"0px",
                  }}
                >
                  Permit Updated
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    border:"3px solid white",
                    textAlign: 'center',padding:"0px",margin:"0px",
                  }}
                >
                  Inspection Required
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    border:"3px solid white",
                    textAlign: 'center',padding:"0px",margin:"0px",
                  }}
                >
                  Inspection Status
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    border:"3px solid white",
                    textAlign: 'center',padding:"0px",margin:"0px",
                  }}
                >
                  Inspection Updated
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Building
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    // sx={{maxHeight: "20%!important"}}
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:" solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Ceiling
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Mechanical
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Electrical
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                 <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Plumbing
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Gas
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Sprinkler
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                 <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Fire Alarm
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Low Voltage
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Temp Cert Occupancy
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                 <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  Cert Occupancy
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}  
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',margin:"0px",padding:"0px",
                  }}
                >
                  <Autocomplete
                    id="combo-box-demo"
                    value={category}
                    onChange={(event, value) => {
                      console.log(value);
                      setCategory(value);
                    }}
                    options={['N/A', 'Incomplete', 'Complete']}
                    size="small"
                    renderInput={(params) => (
                      <TextField {...params} label="Status" />
                    )}
                  />
                </TableCell>
                <TableCell
                 style={{
                    fontWeight: 'bold',
                    borderWidth: '1px',
                    border:"3px solid white",
                    borderRightColor: 'none',
                    borderStyle: 'solid',
                    textAlign: 'center',margin:"0px",padding:"0px"
                  }}
                >
                  <DatePicker
                    id="outlined-basic"
                    label="Enter Text"
                    variant="outlined"
                    size="small"
                    style={{ width: '50%', align: 'center' }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Table style={{ marginTop: '2rem' }}>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: 'bold',
                  borderWidth: '1px',
                  border:"3px solid white",
                  borderRightColor: 'none',
                  borderStyle: 'solid',
                  borderTopColor: 'none',
                }}
              >
                Building Permit Expiration Date
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 'bold',
                  borderWidth: '1px',
                  border:"3px solid white",
                  borderRightColor: 'none',
                  borderStyle: 'solid',
                  textAlign: 'center',
                  borderTopColor: 'none',margin:"0px",padding:"0px"
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Text"
                  variant="outlined"
                  size="small"
                  style={{ width: '50%', align: 'center' }}
                />
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 'bold',
                  borderWidth: '1px',
                  border:"3px solid white",
                  borderRightColor: 'none',
                  borderStyle: 'solid',
                  borderTopColor: 'none',margin:"0px",padding:"0px",
                }}
              >
                Permit/Inspection Notes
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 'bold',
                  borderWidth: '1px',
                  border:"3px solid white",
                  borderRightColor: 'none',
                  borderStyle: 'solid',
                  textAlign: 'center',
                  borderTopColor: 'none',margin:"0px",padding:"0px"
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Text"
                  variant="outlined"
                  size="small"
                  style={{ width: '50%', align: 'center' }}
                />
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default PermitsInspections;

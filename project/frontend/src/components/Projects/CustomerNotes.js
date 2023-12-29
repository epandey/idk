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


const CustomerNotes = (project) => {
  const [status, setStatus] = React.useState([]);

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
      totalprice,
    };
  }

  const rows = [
    createData(
      'Plumbing Parts',
      'Perform annual safety inspections for Con Edison.',
      'Supplier 1',
      '10/08/2021',
      'Delivered',
      '10/20/2021',
      '10/20/2021',
      '10/20/2021',
      'None',
      '$259',
      3,
      '$259'
    ),
  ];

  return (
    <>
      <Card>
        <CardHeader
          style={{ background: '#1976d2', color: 'white' }}
          title="Proposals"
        ></CardHeader>
      </Card>

      <Card>
        <CardHeader
          title="Equipment"
          action={
            <>
              <Button variant="contained" style={{ marginLeft: '0.4rem' }}>
                Add Equipment
              </Button>
              <Button variant="contained" style={{ marginLeft: '0.4rem' }}>
                Edit Equipment
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: '0.4rem', background: 'green' }}
              >
                Save Changes
              </Button>
            </>
          }
        ></CardHeader>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                  >
                    <TableCell component="th" scope="row">
                      Customer Notes
                    </TableCell>
                    <TableCell align="left">
                      <TextField>{project.customerNotes}</TextField>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomerNotes;

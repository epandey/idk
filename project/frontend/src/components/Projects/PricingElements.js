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

const PricingElements = () => {
  const [status, setStatus] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(value);
  };

  function createData(
    pe,
    title,
    description,
    status,
    invoicestatus,
    dsubnames,
    customer,
    submitdate,
    cost,
    sell,
    penotes
  ) {
    return {
      pe,
      title,
      description,
      status,
      invoicestatus,
      dsubnames,
      customer,
      submitdate,
      cost,
      sell,
      penotes,
    };
  }

  const rows = [];

  const names = [
    "All",
    "Review",
    "Preparing",
    "Submitted",
    "Approved",
    "Rejected",
    "Complete",
  ];

  return (
    <>
      <Card>
        <CardHeader
          style={{ background: "#467eac", color: "white" }}
          title={
            <h1
              style={{
                fontSize: "18px",
                margin: "-6px",
                fontFamily: "Helvetica",
                fontWeight: "bold",
              }}
            >
              Pricing Elements
            </h1>
          }
          action={
            <>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", textTransform: "none" }}
              >
                Add Pricing Element
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", textTransform: "none" }}
              >
                Edit Pricing Element
              </Button>
              <Button
                variant="contained"
                style={{ marginLeft: "0.4rem", textTransform: "none" }}
              >
                Print Pricing Elements
              </Button>
            </>
          }
        ></CardHeader>
        <CardContent>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Status</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={status}
              onChange={handleChange}
              input={<OutlinedInput label="Status" />}
              //   MenuProps={MenuProps}
              fullWidth
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  //   style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, border: "none" }}
              aria-label="simple table"
            >
              <TableHead sx={{ border: "none" }}>
                <TableRow sx={{ border: "none" }}>
                  <TableCell sx={{ border: "none" }}>PE#</TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Title
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Description
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Status
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Invoice Status
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Sub Name(s)
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Customer
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Submit Date
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Cost
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    Sell
                  </TableCell>
                  <TableCell sx={{ border: "none" }} align="left">
                    PE Notes
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: "none" },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.pe}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.title}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.description}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.status}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.invoicestatus}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.subnames}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.customer}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.submitdate}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.cost}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.sell}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="left">
                      {row.penotes}
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

export default PricingElements;

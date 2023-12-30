// import * as React from "react";
// import { useEffect, useState } from "react"; // Import useState
import AddPricingElement from "./AddPricingElement";
import { PrintPopup, exportToCSV } from "./PrintPricingElements";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch, useSelector } from "react-redux";
import { getProjectChangeOrders } from "../../actions/projectChangeOrder"; // Path to your action file

import {
  // ... other imports ...
  Modal,
  IconButton,
} from "@mui/material";
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
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import "./style.css";

const PricingElements = () => {
  const [selectedRowData, setSelectedRowData] = useState(null);

  const dispatch = useDispatch();
  const changeOrders = useSelector(
    (state) => state.projectChangeOrder.changeOrders
  );
  useEffect(() => {
    dispatch(getProjectChangeOrders());
  }, [dispatch]);

  const [hoveredRow, setHoveredRow] = useState(null);
  const [status, setStatus] = React.useState([]);
  const initialWidth = "200px";
  const [openModal, setOpenModal] = useState(false);
  const [selectWidth, setSelectWidth] = useState(initialWidth);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // Define a state variable to keep track of the selected rows
  const [selectedRows, setSelectedRows] = useState([]);
  const [showPrintPopup, setShowPrintPopup] = useState(false);

  const handlePrintButtonClick = () => {
    setShowPrintPopup(true);
  };
  const handlePrint = (data) => {
    exportToCSV(data);
    setShowPrintPopup(false);
  };

  const itemsPerPage = 10;

  // const handleRowSelection = (pe) => {
  //   console.log(`Toggling selection for pe: ${pe}`);
  //   if (selectedRows.includes(pe)) {
  //     setSelectedRows((prevSelected) =>
  //       prevSelected.filter((selectedId) => selectedId !== pe)
  //     );
  //   } else {
  //     setSelectedRows((prevSelected) => [...prevSelected, pe]);
  //   }
  //   console.log(`New selectedRows state: ${selectedRows}`);
  // };
  const handleRowSelection = (id) => {
    console.log("Current PE: ", id);
    setSelectedRows((prevSelected) => {
      const newSelectedRows = prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id];
      console.log("Updated selected rows: ", newSelectedRows); // Debugging

      console.log("New selected rows: ", newSelectedRows);
      return newSelectedRows;
    });
  };

  const formatCurrency = (value) => {
    if (value == null) {
      return "";
    }
    return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  // Function to handle edit button click
  const handleEditButtonClick = () => {
    if (selectedRows.length !== 1) {
      alert("Please select exactly one row to edit.");
      return;
    }

    // Find the data for the selected row
    const dataToEdit = changeOrders.find(
      (order) => order.id === selectedRows[0]
    );
    setSelectedRowData(dataToEdit);

    // Open the edit modal (you need a state or a method to do this)
    // ...
    setOpenModal(true); // Open the modal when "Add Pricing Element Button" button is clicked
  };

  const handleChange = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setStatus(value);

    const { value } = event.target;

    if (value.includes("All")) {
      // Option 1: Select all statuses
      setStatus(names.filter((name) => name !== "All"));
      // Option 2: Clear selection (if you want "All" to deselect everything else)
      // setStatus(["All"]);
    } else {
      setStatus(value.filter((v) => v !== "All")); // Remove "All" from the selection
    }
    calculateWidth(value);
  };

  const calculateWidth = (selectedValues) => {
    if (selectedValues.length === 0) {
      setSelectWidth(initialWidth);
      return;
    }
    const newWidth = `${selectedValues.length * 100}px`; // Adjust as needed
    setSelectWidth(newWidth);
  };
  const handleAddPricingElementClick = () => {
    setOpenModal(true); // Open the modal when "Add Pricing Element Button" button is clicked
  };

  const handleCloseModal = () => {
    // // Reset state variables to their initial values
    // setTaskTitle("");
    // setTaskDescription("");
    // setPE("2"); // or whatever your default value is
    // setPEType("");
    // setStatus("");
    // setSubNames("");
    // setSubsSubmittedDate("");
    // setCustomerGroup("");
    // setSubmitDate("");
    // setApprovedDate("");
    // setCost("");
    // setSell("");
    // setInvoiceStatus("");
    // setSubInvoiceStatus("");
    // setMcsInvoiceNumber("");
    // setSubInvoiceNumber("");
    // setAIACOPNumber("");
    // setWSCONumber("");
    // setPENotes("");
    setSelectedRowData(null);

    setOpenModal(false); // Close the modal when it is closed
  };

  function createData(
    pe,
    title,
    description,
    petype,
    status,
    subssubmitteddate,
    approveddate,
    invoicestatus,
    dsubnames,
    customer,
    submitdate,
    cost,
    sell,
    subinvoicestatus,
    mcsinvoicenumber,
    subinvoicenumber,
    aiacopnumber,
    wsconumber,
    penotes
  ) {
    return {
      pe,
      title,
      description,
      petype,
      status,
      subssubmitteddate,
      approveddate,
      invoicestatus,
      dsubnames,
      customer,
      submitdate,
      cost,
      sell,
      subinvoicestatus,
      mcsinvoicenumber,
      subinvoicenumber,
      aiacopnumber,
      wsconumber,
      penotes,
    };
  }

  const names = [
    "All",
    "Review",
    "Preparing",
    "Submitted",
    "Approved",
    "Rejected",
    "Complete",
  ];

  const tableContainerStyle = {
    tableLayout: "fixed",
    margin: "0 auto", // This will center the table
    maxWidth: "100%", // This will ensure the table takes up to 95% of the viewport width
    overflowX: "auto", // This will add horizontal scrolling when necessary
  };

  const titleColumn = {
    width: "20%",
  };

  const cardStyle = {
    marginLeft: "-5%", // Adjust this value as needed
    marginRight: "3%",
    marginTop: "-1.5%", // Adjust this value as needed
    width: "100%",
  };

  const rows = changeOrders || [];
  console.log(rows);
  // const rows = [
  //   createData(
  //     "PE001",
  //     "Title 1",
  //     "Description 1",
  //     "Project",
  //     "Preparing",
  //     "2023-01-01",
  //     "2023-01-05",
  //     "Invoice Status 1",
  //     "Sub Name 1",
  //     "CostCo Warehouse",
  //     "2023-01-02",
  //     "$100",
  //     "$150",
  //     "No",
  //     "No",
  //     "Sub001",
  //     "AIA001",
  //     "WS001",
  //     "Note 1"
  //   ),
  //   createData(
  //     "PE002",
  //     "Title 2",
  //     "Description 2",
  //     "Project",
  //     "Preparing",
  //     "2023-01-03",
  //     "2023-01-06",
  //     "Invoice Status 2",
  //     "Sub Name 2",
  //     "CostCo Warehouse",
  //     "2023-01-04",
  //     "$200",
  //     "$250",
  //     "No",
  //     "No",
  //     "Sub002",
  //     "AIA002",
  //     "WS002",
  //     "Note 2"
  //   ),
  // ];

  const noOfPages = Math.ceil(rows.length / itemsPerPage);

  //Harcoded status values
  const statusMapping = {
    1: "Preparing",
    2: "Submitted",
    3: "Approved",
    4: "Rejected",
    5: "Complete",
    6: "Review",
  };

  return (
    <>
      <Card style={cardStyle}>
        <CardHeader
          style={{
            background: "#467eac",
            color: "white",
            display: "flex", // Use flexbox
            justifyContent: "space-between", // Center align items horizontally
            alignItems: "center", // Center align items vertically
            padding: "16px", // Add some padding for aesthetics
          }}
          title={
            // <h1
            //   style={{
            //     fontSize: "18px",
            //     margin: "-6px",
            //     fontFamily: "Helvetica",
            //   }}
            // >
            //   Pricing Elements
            // </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "20px",
              }}
            >
              <FormControl sx={{ m: 1, width: selectWidth }}>
                <InputLabel
                  id="demo-multiple-name-label"
                  style={{
                    position: "absolute",
                    top: "-10px",
                    height: "20px",
                    color: "white",
                    align: "center",
                  }}
                >
                  Status Filter
                </InputLabel>
                <Select
                  style={{ height: "50px", textAlign: "top", color: "white" }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={status}
                  onChange={handleChange}
                  input={
                    <OutlinedInput
                      label="Status Filter"
                      style={{ width: "150px", height: "30px", color: "white" }}
                    />
                  }
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
            </div>
          }
          action={
            <div
              style={{
                display: "flex",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleAddPricingElementClick}
                style={{
                  marginLeft: "0.4rem",
                  textTransform: "none",
                  marginRight: "10px",
                  marginTop: "0.8rem",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                Add Pricing Element
              </Button>
              <Button
                variant="contained"
                onClick={handleEditButtonClick}
                style={{
                  marginLeft: "0.4rem",
                  textTransform: "none",
                  marginRight: "4px",
                  marginTop: "0.8rem",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                Edit Pricing Element
              </Button>
              <Button
                variant="contained"
                onClick={handlePrintButtonClick}
                style={{
                  marginLeft: "0.4rem",
                  textTransform: "none",
                  marginRight: "4px",
                  marginTop: "0.8rem",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                }}
              >
                Print Pricing Elements
              </Button>
              <PrintPopup
                open={showPrintPopup}
                onClose={() => setShowPrintPopup(false)}
                data={changeOrders} // Assuming this is your table data
                handleExport={handlePrint}
              />
            </div>
          }
        ></CardHeader>
        <CardContent>
          {/* <FormControl sx={{ m: 1, width: selectWidth }}>
            <InputLabel
              id="demo-multiple-name-label"
              style={{
                position: "absolute",
                top: "-10px",
              }}
            >
              Status
            </InputLabel>
            <Select
              // style={{ width: "200px", height: "35px", textAlign: "top" }}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={status}
              onChange={handleChange}
              input={
                <OutlinedInput
                  label="Status"
                  //style={{ width: "150px", height: "30px" }}
                />
              }
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
          </FormControl> */}
          <TableContainer
            component={Paper}
            style={{ ...tableContainerStyle, width: "1500px" }}
          >
            <Table
              className="table"
              sx={{ width: "1500px", border: "none" }}
              aria-label="simple table"
              style={{ width: "100%" }}
            >
              <TableHead sx={{ border: "none" }}>
                <TableRow sx={{ border: "none" }}>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    className="table-column"
                  >
                    PE#
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="title-column"
                  >
                    Title
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="description-column"
                  >
                    Description
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="table-column"
                  >
                    Status
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="table-column"
                  >
                    AP/AR Status
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="table-column"
                  >
                    Sub Name(s)
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="table-column"
                  >
                    Customer
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="submit-date-column"
                  >
                    Submit Date
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="cost-sell-column"
                  >
                    Cost
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="cost-sell-column"
                  >
                    Sell
                  </TableCell>

                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    sx={{ border: "none" }}
                    align="left"
                    className="pe-notes-column"
                  >
                    PE Notes
                  </TableCell>
                  <TableCell
                    style={{
                      fontWeight: "bold",
                      background: "#467EAC",
                      color: "white",
                    }}
                    scope="row"
                    sx={{ border: "none" }}
                    align="left"
                    className="pe-notes-column"
                  >
                    {/* <Checkbox
                      checked={selectedRows.includes(row.id)} // Check if 'id' is in selectedRows
                      onChange={() => handleRowSelection(row.id)} // Toggle checkbox selection by 'id'
                    /> */}
                    Update
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.pe}
                      sx={{
                        "&:last-child td, &:last-child th": { border: "none" },
                        background: selectedRows.includes(row.pe)
                          ? "#e0e0e0"
                          : "transparent",
                      }}
                      style={{ padding: "10px !important" }}
                    > */}
                {/* {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.pe}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                          cursor: "pointer",
                        },
                        "&:last-child td, &:last-child th": { border: "none" },
                        background: selectedRows.includes(row.pe)
                          ? "#e0e0e0"
                          : "transparent",
                      }}
                      style={{ padding: "10px !important" }}
                    > */}
                {rows
                  .filter((row) => {
                    if (status.includes("All") || status.length === 0) {
                      return true; // Show all rows if "All" is selected or if no status is selected
                    }
                    // Convert the row's numeric status to its string representation
                    const rowStatusName = statusMapping[row.status];
                    // Check if the row's status name is in the selected statuses
                    return status.some(
                      (selectedStatus) => selectedStatus === rowStatusName
                    );
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.pe}
                      onMouseEnter={() => setHoveredRow(row.pe)}
                      onMouseLeave={() => setHoveredRow(null)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                          ".cellContent": {
                            // Styles to expand the cell content on hover
                            whiteSpace: "normal",
                            overflow: "visible",
                            maxHeight: "none",
                          },
                        },
                        backgroundColor: selectedRows.includes(row.id)
                          ? "#aec9de !important"
                          : "", // Highlight the row if selected
                        // Additional styling as needed
                      }}
                    >
                      <TableCell
                        scope="row"
                        sx={{ border: "none" }}
                        align="left"
                      >
                        <div className="cellContent">{row.id}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.title}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">
                          {row.briefDescription}
                        </div>
                      </TableCell>

                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">
                          {statusMapping[row.status] || row.status}
                          {/* {row.status} */}
                        </div>
                      </TableCell>

                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.invoicestatus}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.subNames}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.customer}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.submissionDate}</div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">
                          {formatCurrency(row.cost)}
                        </div>
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">
                          {formatCurrency(row.sell)}
                        </div>
                      </TableCell>

                      <TableCell sx={{ border: "none" }} align="left">
                        <div className="cellContent">{row.notes}</div>
                      </TableCell>
                      <TableCell
                        scope="row"
                        sx={{ border: "none" }}
                        align="left"
                      >
                        <div className="cellContent">
                          <Checkbox
                            checked={selectedRows.includes(row.id)}
                            onChange={() => handleRowSelection(row.id)}
                            sx={{
                              "&.Mui-checked": {
                                color: "#4caf50", // Change the color as needed
                                "&:hover": {
                                  backgroundColor: "rgba(76, 175, 80, 0.04)", // Optional: Change hover color
                                },
                              },
                              "& .MuiSvgIcon-root": {
                                // Targeting the SVG icon inside the Checkbox
                                fontSize: "1.15rem", // Adjust the size as needed
                              },
                            }}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              component="div"
              count={rows.length} // total number of rows
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0); // reset to the first page
              }}
            />
          </TableContainer>
        </CardContent>
      </Card>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="modalContainer">
          {/* <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          // </IconButton> */}

          {/* // <IconButton
          //   aria-label="close"
          //   style={{ color: "red", outline: "none" }}
          //   className="close-button"
          //   // onClick={() => {
          //   //   // Add your close logic here
          //   //   console.log("Close button clicked");
          //   // }}
          //   onClick={handleCloseModal}
          // >
          //   <CloseIcon />
          // </IconButton> */}
          <AddPricingElement
            handleCloseModal={handleCloseModal}
            rowData={selectedRowData}
          />
        </div>
      </Modal>
    </>
  );
};

export default PricingElements;

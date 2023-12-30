import React, { useState } from "react";
import { FaFilePdf, FaPaperclip } from "react-icons/fa";
// import { makeStyles } from "@mui/styles";

import Table from "@mui/material/Table"; // Correct import for Table component
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper"; // Import if you are using Paper component

const Invoice = () => {
  const iconSize = "1.5em";
  const [selectedTab, setSelectedTab] = useState("queue");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedRows, setSelectedRows] = useState([]);

  // State for the "All" checkbox
  const [selectAll, setSelectAll] = useState(false);

  // Function to handle row selection
  const handleRowSelection = (pe) => {
    const selectedIndex = selectedRows.indexOf(pe);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = newSelectedRows.concat(selectedRows, pe);
    } else if (selectedIndex === 0) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelectedRows);
  };

  const [selectedStatuses, setSelectedStatuses] = useState({
    all: false,
    requested: false,
    review: false,
    approved: false,
    submitted: false,
    rejected: false,
    canceled: false,
  });

  const handleSelectAll = (event) => {
    const newSelectedStatuses = {};
    Object.keys(selectedStatuses).forEach((key) => {
      newSelectedStatuses[key] = event.target.checked;
    });
    setSelectedStatuses(newSelectedStatuses);
  };

  const handleCheckboxChange = (status) => {
    setSelectedStatuses((prevStatuses) => ({
      ...prevStatuses,
      [status]: !prevStatuses[status],
      all: false,
    }));
  };

  // Ensure that when all individual checkboxes are checked, the "All" checkbox reflects this state
  React.useEffect(() => {
    const allSelected = Object.entries(selectedStatuses)
      .filter(([key, value]) => key !== "all")
      .every(([key, value]) => value);
    setSelectedStatuses((prevStatuses) => ({
      ...prevStatuses,
      all: allSelected,
    }));
  }, [selectedStatuses]);

  // Custom styles for the components
  // const useStyles = makeStyles({
  //   // ... your other styles,
  //   hoverRow: {
  //     "&:hover": {
  //       backgroundColor: "#bbdefb !important", // Semi-transparent blue on hover
  //       // cursor: "pointer", // Change cursor to pointer on hover
  //     },
  //   },
  //   // Add other styles if needed
  // });

  // ... (other states for checkboxes and table data)

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // Handle filtering the invoice data based on this selection
  };

  //
  //
  //
  const table = {
    width: "100%",
    border: "1px solid",
    background: "#467eac",
    // maxWidth: '1500px', // Uncomment if you want to set a maximum width
  };

  //
  //
  //

  // Inline styles
  const pageStyle = {
    width: "100%",
    maxWidth: "1500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const tabStyle = {
    display: "inline-block",
    padding: "10px 15px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  };

  const tableStyles = {
    width: "100%",
    display: "inline-block",
    padding: "10px 15px",
    cursor: "pointer",
    // borderBottom: selectedTab === "queue" ? "2px solid blue" : "none",
    borderBottom: "2px solid transparent", // Default to transparent border
    border: "none",
    maxWidth: "2000px",
  };

  const thStyle = {
    backgroundColor: "#467EAC",
    padding: "10px 15px",
    textAlign: "left",
    fontWeight: "bold",
    border: "1px solid #ddd",
    color: "white",
  };

  const tableContainerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    overflow: "hidden",
    width: "auto",
    maxWidth: "100%",
  };
  const tableCellStyles = {
    border: "none",

    width: `calc(100% / 8)`,
  };

  // Define a base style for all table cells
  const baseCellStyle = {
    padding: "10px 15px",
    textAlign: "left",
    border: "1px solid #ddd",
  };

  // Specific styles for larger columns
  const largeColumnStyle = {
    ...baseCellStyle,
    width: "15%", // Assign a larger width for the "Customer Group", "Location", and "Project" columns
  };

  // Styles for the rest of the columns
  const regularColumnStyle = {
    ...baseCellStyle,
    width: "10%", // Adjust this width so the total of all columns equals 100%
  };

  const activeTabStyle = {
    ...tabStyle,
    borderBottom: "2px solid blue", // Only active tab gets the blue border
  };

  const filtersContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    backgroundColor: "#f8f8f8",
    padding: "10px 20px",
  };

  const labelStyle = {
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  };
  const selectStyle = {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const checkboxLabelStyle = {
    marginRight: "15px",
    display: "flex",
    alignItems: "center",
  };

  const checkboxStyle = {
    marginRight: "5px",
    marginLeft: "10px",
    cursor: "pointer",
    width: "20px", // Making the checkbox larger
    height: "20px", // Making the checkbox larger
    border: "1px solid #000", // Adding a border if it's not visible
    backgroundColor: "#fff", // Ensuring background is white
    appearance: "checkbox", // This line ensures default checkbox appearance is used
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  // Inline styles for the new buttons and icons
  const iconStyle = {
    cursor: "pointer",
  };

  const tabContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 20px",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ccc",
  };

  const saveButtonStyle = {
    // ... styles for your save button
  };

  // const checkboxLabelStyle = {
  //   display: "inline-flex",
  //   alignItems: "center",
  //   marginRight: "10px",
  //   cursor: "pointer",
  // };

  const checkboxSpanStyle = {
    marginLeft: "5px",
  };

  const getPDFIconColor = (status) => {
    switch (status) {
      case "review":
        return "blue";
      case "approved":
        return "green";
      default:
        return "red"; // Red is now the default color
    }
  };

  const getPaperclipIconColor = (status) => {
    switch (status) {
      case "status1": // Replace with actual status
        return "black";
      case "status2": // Replace with actual status
        return "green";
      default:
        return "red"; // Red is now the default color for the paper clip as well
    }
  };

  // const classes = useStyles();
  // ... (rest of the inline styles for other elements)
  const sampleInvoiceData = [
    {
      customerGroup: "Group A",
      location: "New York",
      project: "Project X",
      mcsPeNumber: "MCS-001",
      amount: "$10,000",
      arStatus: "Pending",
      requested: "2023-01-01",
      updated: "2023-01-02",
    },
    {
      customerGroup: "Group B",
      location: "New York",
      project: "Project X",
      mcsPeNumber: "MCS-001",
      amount: "$10,000",
      arStatus: "Pending",
      requested: "2023-01-01",
      updated: "2023-01-02",
    },
    {
      customerGroup: "Group C",
      location: "New York",
      project: "Project X",
      mcsPeNumber: "MCS-001",
      amount: "$10,000",
      arStatus: "Pending",
      requested: "2023-01-01",
      updated: "2023-01-02",
    },
    {
      customerGroup: "Group D",
      location: "New York",
      project: "Project X",
      mcsPeNumber: "MCS-001",
      amount: "$10,000",
      arStatus: "Pending",
      requested: "2023-01-01",
      updated: "2023-01-02",
    },
    // Add more invoice objects here
  ];
  return (
    <>
      <div style={pageStyle}>
        {/* <div style={{ ...filtersContainerStyle, justifyContent: "flex-start" }}> */}
        {/* Tab section */}

        <div style={tabContainerStyle}>
          {" "}
          {/* Corrected style application here */}
          <div
            style={selectedTab === "queue" ? activeTabStyle : tabStyle}
            onClick={() => setSelectedTab("queue")}
          >
            Invoice Queue
          </div>
          <div
            style={selectedTab === "approval" ? activeTabStyle : tabStyle}
            onClick={() => setSelectedTab("approval")}
          >
            Invoice Approval List
          </div>
        </div>
        {/* Filter and checkbox section */}
        {/* <div style={filtersContainerStyle}> */}
        {/* <select
            value={selectedFilter}
            onChange={handleFilterChange}
            style={selectStyle}
          >
            <option value="all">All</option>
            <option value="requested">Requested</option>
            <option value="review">Review</option>
            <option value="approved">Approved</option>
            <option value="submitted">Submitted</option>
            <option value="rejected">Rejected</option>
          </select> */}

        {/* Dynamic Checkboxes based on selectedStatuses */}
        {/* {Object.entries(selectedStatuses).map(([status, isChecked]) => (
            <label key={status} style={checkboxLabelStyle}>
              <input
                type="checkbox"
                name={status}
                checked={isChecked} // The checked attribute is tied to the component's state
                onChange={() => handleCheckboxChange(status)} // Handler updates the state
                style={checkboxStyle}
              />
              <span style={checkboxSpanStyle}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </label>
          ))}
          <button style={buttonStyle}>Save Selected Invoices</button>
        </div> */}

        <div style={filtersContainerStyle}>
          {/* The "All" checkbox */}
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="all"
              checked={selectedStatuses.all}
              onChange={handleSelectAll}
              style={checkboxStyle}
            />
            <span style={checkboxSpanStyle}>All</span>
          </label>

          {/* Other checkboxes */}
          {Object.entries(selectedStatuses).map(([status, isChecked]) => {
            if (status !== "all") {
              return (
                <label key={status} style={checkboxLabelStyle}>
                  <input
                    type="checkbox"
                    name={status}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(status)}
                    style={checkboxStyle}
                  />
                  <span style={checkboxSpanStyle}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </label>
              );
            }
            return null;
          })}
        </div>

        {selectedTab === "queue" ? (
          <div>{/* Render Invoice Queue content here */}</div>
        ) : (
          <div>{/* Render Invoice Approval List content here */}</div>
        )}

        <TableContainer component={Paper} style={tableContainerStyle}>
          <Table
            className="table"
            aria-label="simple table"
            style={tableStyles} // Apply your table styles here
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#99ccff", // Your desired semi-transparent background color
                  "& th": {
                    fontWeight: "bold", // Make the font bold
                    // Define other styles for th elements here
                  },
                }}
                // className={classes.hoverEffect}
              >
                <th style={(largeColumnStyle, thStyle)}>Customer Group</th>
                <th style={(largeColumnStyle, thStyle)}>Customer Group</th>
                <th style={(largeColumnStyle, thStyle)}>Location</th>
                <th style={(largeColumnStyle, thStyle)}>Project</th>
                <th style={(regularColumnStyle, thStyle)}>MCS-PE #</th>
                <th style={(regularColumnStyle, thStyle)}>Amount</th>
                <th style={(regularColumnStyle, thStyle)}>AR Status</th>
                <th style={(regularColumnStyle, thStyle)}>Requested</th>
                <th style={(regularColumnStyle, thStyle)}>Updated</th>
                <th style={(regularColumnStyle, thStyle)}></th>
                <th style={(regularColumnStyle, thStyle)}></th>
                <th style={(regularColumnStyle, thStyle)}></th>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleInvoiceData.map((invoice, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": {
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    }, // For striped rows
                    "&:hover": {
                      backgroundColor: "#bbdefb !important",
                    }, // For hover effect
                  }}
                  onClick={() => handleRowSelection(invoice.pe)} // Assuming you have a way to identify each row
                >
                  <TableCell style={largeColumnStyle}>
                    {invoice.customerGroup}
                  </TableCell>
                  <TableCell style={largeColumnStyle}>
                    {invoice.location}
                  </TableCell>
                  <TableCell style={largeColumnStyle}>
                    {invoice.project}
                  </TableCell>
                  <TableCell style={regularColumnStyle}>
                    {invoice.mcsPeNumber}
                  </TableCell>
                  <TableCell style={tableCellStyles}>
                    {invoice.amount}
                  </TableCell>
                  <TableCell style={regularColumnStyle}>
                    {invoice.arStatus}
                  </TableCell>
                  <TableCell style={regularColumnStyle}>
                    {invoice.requested}
                  </TableCell>
                  <TableCell style={regularColumnStyle}>
                    {invoice.updated}
                  </TableCell>
                  {/* PDF file icon */}
                  <TableCell style={regularColumnStyle}>
                    <FaFilePdf
                      style={{
                        color: getPDFIconColor(invoice.status),
                        cursor: "pointer",
                      }}
                      size={iconSize}
                    />
                  </TableCell>
                  {/* Clip icon */}
                  <TableCell style={regularColumnStyle}>
                    <FaPaperclip
                      style={{
                        color: getPaperclipIconColor(invoice.status),
                        cursor: "pointer",
                      }}
                      size={iconSize}
                    />
                  </TableCell>
                  {/* Save button */}
                  <TableCell style={regularColumnStyle}>
                    <button style={buttonStyle}>Save</button>
                  </TableCell>
                  {/* Checkbox */}
                  <TableCell style={regularColumnStyle}>
                    <Checkbox
                      checked={selectedRows.includes(invoice.pe)}
                      onChange={() => handleRowSelection(invoice.pe)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Invoice;

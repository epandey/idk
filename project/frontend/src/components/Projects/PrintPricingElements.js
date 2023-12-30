import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TablePagination,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

// Custom styles for the components
// const useStyles = makeStyles({
//   title: {
//     textAlign: "center", // Center the title text
//     backgroundColor: "#467eac", // Blue background color
//     color: "white", // White text color
//     padding: "10px 0", // Some padding for aesthetic spacing
//   },
//   headerCell: {
//     fontWeight: "bold", // Make the header text bold
//     background: "#467EAC",
//     color: "white",
//   },

//   hoverRow: {
//     "&:hover": {
//       backgroundColor: "#f9f9f9", // Or any color for hover state
//       // If you want to expand the row in terms of height, you can add:
//       // height: '70px', // Adjust the height as needed
//       // transition: 'height 0.3s ease', // For a smooth transition
//       cursor: "pointer", // Change cursor to pointer on hover
//     },
//   },
// });

export const PrintPopup = ({ open, onClose, data, handleExport }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  // Use the custom styles
  // const classes = useStyles();
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0); // Reset to the first page
  };

  // Check if data is null or not
  if (!data) {
    return <div>Loading...</div>;
  }

  const displayData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handlePrint = () => {
    window.print();
  };

  const handleExportToCSV = () => {
    // The export logic here
    handleExport(data); // Assuming handleExport is passed as a prop for exporting CSV
  };
  //   return (
  //     <Dialog open={open} onClose={onClose}>
  //       <DialogTitle>Export Pricing Elements</DialogTitle>
  //       <DialogContent>
  //         <p>
  //           Select the format in which you want to export the pricing elements.
  //         </p>
  //       </DialogContent>
  //       <DialogActions>
  //         <Button onClick={onClose}>Cancel</Button>
  //         <Button onClick={() => handleExport(data)}>Export as CSV</Button>
  //       </DialogActions>
  //     </Dialog>
  //   );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      {/* <DialogTitle className={classes.title}>
        Print Pricing Elements
      </DialogTitle> */}
      <DialogContent>
        <Select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
          {[10, 25, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <TableContainer component={Paper} style={{ marginTop: "20px" }}>
          <Table>
            <TableHead>
              {/* <TableRow>
                <TableCell className={classes.headerCell}>PE#</TableCell>
                <TableCell className={classes.headerCell}>Title</TableCell>
                <TableCell className={classes.headerCell}>
                  Description
                </TableCell>
                <TableCell className={classes.headerCell}>PE Type</TableCell>
                <TableCell className={classes.headerCell}>Status</TableCell>
                <TableCell className={classes.headerCell}>Sub Names</TableCell>
                <TableCell className={classes.headerCell}>
                  Subs Submitted Date
                </TableCell>
                <TableCell className={classes.headerCell}>
                  Customer Group
                </TableCell>
                <TableCell className={classes.headerCell}>
                  Submit Date
                </TableCell>
                <TableCell className={classes.headerCell}>
                  Approved Date
                </TableCell>
                <TableCell className={classes.headerCell}>Cost</TableCell>
                <TableCell className={classes.headerCell}>Sell</TableCell>
                <TableCell className={classes.headerCell}>
                  Invoice Status
                </TableCell>
                <TableCell className={classes.headerCell}>
                  Sub Invoice Status
                </TableCell>
                <TableCell className={classes.headerCell}>
                  MCS Invoice Number
                </TableCell>
                <TableCell className={classes.headerCell}>
                  Sub Invoice Number
                </TableCell>
                <TableCell className={classes.headerCell}>
                  AIA COP Number
                </TableCell>
                <TableCell className={classes.headerCell}>
                  WS CO Number
                </TableCell>
                <TableCell className={classes.headerCell}>PE Notes</TableCell>
              </TableRow> */}
            </TableHead>
            <TableBody>
              {displayData.map((row, index) => (
                // <TableRow key={index} className={classes.hoverRow}>
                <TableRow key={index}>
                  <TableCell>{row.PE}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.briefDescription}</TableCell>
                  <TableCell>{row.PEType}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.subNames}</TableCell>
                  <TableCell>{row.subsSubmittedDate}</TableCell>
                  <TableCell>{row.customerGroup}</TableCell>
                  <TableCell>{row.submitDate}</TableCell>
                  <TableCell>{row.approvedDate}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                  <TableCell>{row.sell}</TableCell>
                  <TableCell>{row.invoiceStatus}</TableCell>
                  <TableCell>{row.subInvoiceStatus}</TableCell>
                  <TableCell>{row.mcsInvoiceNumber}</TableCell>
                  <TableCell>{row.subInvoiceNumber}</TableCell>
                  <TableCell>{row.AIACOPNumber}</TableCell>
                  <TableCell>{row.WSCONumber}</TableCell>
                  <TableCell>{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handlePrint}>Print</Button>
        <Button onClick={handleExportToCSV}>Export to CSV</Button>
      </DialogActions>
    </Dialog>
  );
};

export const exportToCSV = (data) => {
  if (!data || data.length === 0) {
    console.error("No data available for export.");
    return;
  }
  let csvContent = "data:text/csv;charset=utf-8,";
  // Add header row (assuming `data` is an array of objects and keys are column names)
  csvContent += Object.keys(data[0]).join(",") + "\r\n";
  // Add data rows
  data.forEach((row) => {
    const rowString = Object.values(row).join(",");
    csvContent += rowString + "\r\n";
  });

  // Create a download link and click it programmatically
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "pricing_elements.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default PrintPopup;

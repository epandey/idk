import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { CardHeader } from "@mui/material";

const columns = [
  { id: "Item", label: "Item", minWidth: 80 },
  { id: "Invoice", label: "Invoice", minWidth: 80 },
  { id: "InvoiceAmount", label: "InvoiceAmount", minWidth: 80 },
  { id: "SubName", label: "SubName", minWidth: 80 },
  { id: "SubmitDate", label: "SubmitDate", minWidth: 80 },
  { id: "Description", label: "Description", minWidth: 80 },
  { id: "Status", label: "Status", minWidth: 80 },
  { id: "DB", label: "DB", minWidth: 80 },
  { id: "CO", label: "CO", minWidth: 80 },
  { id: "PO", label: "PO", minWidth: 80 },
  { id: "Notes", label: "Notes", minWidth: 80 },

];

function createData(Item, Invoice, InvoiceAmount, SubName, SubmitDate,Description,Status,DB ,CO,PO,Notes) {
  return { Item, Invoice, InvoiceAmount, SubName, SubmitDate,Description,Status,DB ,CO,PO,Notes };
}

const rows = [
  createData("", "", "", "", "","","",""),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" ,border:'none'}}>
      <TableContainer sx={{ maxHeight: 440, border: "none" }}>
      <CardHeader></CardHeader>
          <button style={{ marginLeft: '0.4rem',marginRight:'1.5rem',textTransform:'none' ,float: 'right', backgroundColor: 'rgb(20, 34, 140)', color: 'white' }} class="project-edit btn" onclick="createPendInv()"> Add Pending Invoice </button>
<button style={{ float: 'right', backgroundColor: '#1976d2', color: 'white' }} class="project-edit btn" onclick="createPendInv()"> Edit Pending Invoice </button>
<button style={{ float: 'right', backgroundColor: 'green', color: 'white' }} class="project-edit btn" onclick="createPendInv()"> Print Pending Invoice </button>
<br></br>
<br></br>
<br></br>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{border:0}}> 
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    backgroundColor: "rgb(70, 126, 172)",
                    color: "white",
                    border:0
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      border: 0,
                      "&:nth-of-type(even)": {
                        backgroundColor: "grey"
                      },
                      "&:nth-of-type(even):hover": {
                        backgroundColor: "#grey"
                      },
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#grey"
                      },
                      "&:nth-of-type(odd):hover": {
                        backgroundColor: "#grey"
                      }
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
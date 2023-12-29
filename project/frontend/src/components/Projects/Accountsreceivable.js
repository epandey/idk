import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "PE#", label: "PE#", minWidth: 80 },
  { id: "Title", label: "Title", minWidth: 80 },
  { id: "PE", label: "PE", minWidth: 80 },
  { id: "Type", label: "Type", minWidth: 80 },
  { id: "Customer", label: "Customer", minWidth: 80 },
  { id: "Status", label: "Status", minWidth: 80 },
  { id: "Amount", label: "Amount", minWidth: 80 },
  { id: "Invoiced to Date", label: "Invoiced to Date", minWidth: 80 },
  { id: "Balance", label: "Balance", minWidth: 80 },
  { id: "Invoices", label: "Invoices", minWidth: 80 },
  { id: "Pending", label: "Pending", minWidth: 80 },
  { id: "Add invoices", label: "Add invoices", minWidth: 80 },
];

function createData(PE, Title, Type, Customer,Amount,InvoicedtoDate,Balance ,Invoices,Pending,Addinvoices) {
  return { PE, Title, Type, Customer,Amount,InvoicedtoDate,Balance ,Invoices,Pending,Addinvoices };
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, border: "none" }}>
      
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
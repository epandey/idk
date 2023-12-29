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
  { id: "Name", label: "Name", minWidth: 80 },
  { id: "Description", label: "Description", minWidth: 80 },
  { id: "Supplier", label: "Supplier", minWidth: 80 },
  { id: "ProposalDate", label: "Proposal Date", minWidth: 80 },
  { id: "DeliveryStatus", label: "Delivery Status", minWidth: 80 },
  { id: "OrderedDate", label: "Ordered Date", minWidth: 80 },
  { id: "ScheduledDate", label: "Scheduled Date", minWidth: 80 },
  { id: "InvoicedtoDate", label: "Invoiced to Date", minWidth: 80 },
  { id: "ActualDate", label: "Actual Date", minWidth: 80 },
  { id: "Notes", label: "Notes", minWidth: 80 },
  { id: "UnitPrice", label: "Unit Price", minWidth: 80 },
  { id: "Quantity", label: "Quantity", minWidth: 80 },
  { id: "TotalPrice", label: "Total Price", minWidth: 80 },
  
];

function createData(Name, Description, Supplier, ProposalDate,DeliveryStatus,OrderedDate,ScheduledDate ,InvoicedtoDate,ActualDate,Notes,UnitPrice,Quantity,TotalPrice) {
  return {Name, Description, Supplier, ProposalDate,DeliveryStatus,OrderedDate,ScheduledDate ,InvoicedtoDate,ActualDate,Notes,UnitPrice,Quantity,TotalPrice };
}

const rows = [
    createData("Plumbing Parts","Perform ","Supplier 1","10/08/2021","Delivered","10/20/2021","10/20/2021","10/20/2021","10/20/2021","None","$259","3","$259",""),
  createData("Plumbing Parts","Perform","Supplier 2","10/08/2021","Delivered","10/20/2021","10/20/2021","10/20/2021","10/20/2021","None","$259","3","$259",""),
  
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
    <Paper sx={{ width: 950, overflow: "hidden" ,border:"white"}}>
      <TableContainer sx={{ maxHeight: 440, border: "none"  }}>
      
        <Table stickyHeader aria-label="sticky table" sx={{border:"none"}}>
          <TableHead sx={{backgroundColor:"#467eac"}}>
            <TableRow > 
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    backgroundColor: "none",
                    color: "black",
                    border:"none"
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
                        backgroundColor: "none"
                      },
                      "&:nth-of-type(even):hover": {
                        backgroundColor: "none"
                      },
                      "&:nth-of-type(odd)": {
                        backgroundColor: "none"
                      },
                      "&:nth-of-type(odd):hover": {
                        backgroundColor: "none"
                      }
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{border:0}}>
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
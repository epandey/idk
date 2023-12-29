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
  { id: "Summary", label: "Summary", minWidth: 170 },
  { id: "Total", label: "Total", minWidth: 100 },
  {
    id: "Invoicedtodate",
    label: "Invoiced To Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "Balance",
    label: "Balance",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "Invoiced",
    label: "%Invoiced",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2)
  }
];

function createData(Summary, Total, Invoicedtodate, Balance, Invoiced) {
  return { Summary, Total, Invoicedtodate, Balance, Invoiced };
}

const rows = [
  createData("Labor", "$0", "$0", "$0", "$0"),
  createData("Materials", "$0", "$0", "$0", "$0"),
  createData("Project", "$0", "$0", "$0", "$0"),
  createData("AIA", "$0", "$0", "$0", "$0"),
  createData("Total", "$0", "$0", "$0", "$0")
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
      <TableContainer sx={{ maxHeight: 440, border: "none"}}>
        <Table stickyHeader aria-label="sticky table" sx={{border:"none"}}>
          <TableHead>
            <TableRow sx={{border: 0}}> 
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    backgroundColor: "#467eac",
                    color: "white",
                    border: 0
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isLastRow = index === rows.length - 1;
                return (
                  <TableRow 
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    sx={{
                      border: 0,
                      "&:last-of-type": {
                        backgroundColor: isLastRow ? "#FF0000" : "red",
                        color: isLastRow ? "white" : "inherit"
                      },
                      "&:nth-of-type(even)": {
                        backgroundColor: "#FEFEFE"
                      },
                      "&:nth-of-type(even):hover": {
                        backgroundColor: "white"
                      },
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#ECECEC"
                      },
                      "&:nth-of-type(odd):hover": {
                        backgroundColor: "white"
                      }
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            border: 0,
                          }}
                        >
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
    </Paper>
  );
}

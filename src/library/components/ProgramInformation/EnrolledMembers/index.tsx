import * as React from "react";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "../../Button";

interface List {
  headings: { id: string; label: string }[];
  list: { [key: string]: string }[];
  updateHouseHold: () => {};
}

const StyleEnrollMembers = styled("div")(() => {
  return {
    ".MuiTableRow-head": {
      th: {
        color: "#454d58",
        paddingBottom: 0,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "Roboto",
        fontWeight: "normal",
        borderBottom: "none",
        letterSpacing: 1.12,
      },
    },
    ".MuiTableBody-root": {
      "tr:first-of-type": {
        td: {
          fontFamily: "Roboto",
          fontSize: 14,
          fontWeight: 600,
        },
      },
      td: {
        fontWeight: 500,
      },
    },
    ".update-household": {
      marginTop: 20,
      ".MuiButtonBase-root": {
        width: "max-content",
        borderRadius: 30,
        border: "2px solid var(--NETWELL-btn-color)",
        fontFamily: "Lato",
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        color: "var(--NETWELL-btn-color)",
        backgroundColor: "#fff",
        padding: "7px 10px",


      },
    },
  };
});

export const EnrolledMembers: React.FC<List> = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <StyleEnrollMembers>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.headings.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.list
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                    {props.headings.map((column) => {
                      return (
                        <TableCell key={column.id}>{row[column.id]}</TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {props.list.length > 10 ? (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
      <Grid item xs={12} className="update-household">
        <Button
          label="UPDATE HOUSEHOLD"
          variant="outlined"
          onClick={props.updateHouseHold}
        />
      </Grid>
    </StyleEnrollMembers>
  );
};

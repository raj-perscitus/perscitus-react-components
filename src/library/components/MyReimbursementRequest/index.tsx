import React, { useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { getReimbursementByMember, tableHeaders } from "./handler";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PopupState from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { bindMenu, bindTrigger } from "material-ui-popup-state/hooks";
import { MenuItem } from "@mui/material";
import { ReimbursementUpdate } from "./ReimbursementUpdate";
import StyleTableBodyWrapper from "./style";

export function MyReimbursement() {
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedRow, setselectedRow] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoader(true);
      const response = await getReimbursementByMember();
      setData(response);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const actionHandler = useCallback((rowData: any) => {
    return () => {
      console.log("rowData: ", rowData);
      setselectedRow(rowData);
    };
  }, []);

  return (
    <StyleTableBodyWrapper sx={{ width: "100%", overflow: "hidden" }}>
        <ReimbursementUpdate selectedMember={selectedRow} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {Object.values(tableHeaders).map((column) => (
                <TableCell
                  key={column.value}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loader ? <p> Fetching Data...</p> : null}
            {loader || !data.length
              ? null
              : 
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {Object.keys(tableHeaders).map((column) => {
                          const value = row[column];
                          return (
                            <>
                              {column !== "action" ? (
                                <TableCell
                                  key={row[value]}
                                  className={`table-${column} table-${
                                    row.className[row.id + column]
                                  }`}
                                >
                                  <span>{value}</span>
                                </TableCell>
                              ) : (
                                <UpdatePopup update={actionHandler(row)} />
                              )}
                            </>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                  </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
          </StyleTableBodyWrapper>
  );
}

const UpdatePopup = (props: any) => {
  const updateHandler = useCallback(() => {
    props.update();
  }, []);
  return (
    <TableCell align="left" className="rowTableCell">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <IconButton {...bindTrigger(popupState)}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              {...bindMenu(popupState)}
              onClick={popupState.close}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: -10,
                horizontal: 30,
              }}
            >
              <MenuItem onClick={updateHandler}>Update</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </TableCell>
  );
};

import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";

const StyleTableBodyWrapper = styled(Paper)(() => {
  return {
    padding: "10px 20px",
    fontFamily: "Roboto",
    td: {
      fontSize: 16,
      fontFamily: "Lato",
    },
    h5: {
    marginBottom: 5
    },
    label: {
        maxWidth: "max-content"
    },
    ".table-status span": {
      color: "#fff",
      height: 16,
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: 400,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.33",
      letterSpacing: ".4px",
      textAlign: "left",
      padding: "5px 10px",
      borderRadius: 4,
    },
    ".table-status-submitted span": {
      backgroundColor: "#27ae60",
    },
    ".table-status-pending span": {
      backgroundColor: "#eb5757",
    },
    ".table-action": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
});

export default StyleTableBodyWrapper;
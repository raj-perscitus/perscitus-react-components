import styled from "@mui/material/styles/styled";

const CustomListWrapper = styled("div")(({ theme }) => {
  return {
    width: "100%",
    "&.pointer-events-none": {
      pointerEvents: "none",
    },
    ".cursor-hand-hover": {
      cursor: "pointer",
      "&.MuiListItem-root .label-warapper": {
        color: "#fff"
      }
    },
    "& .MuiListItem-root": {
      ".list-item-img": {
        minWidth: 45,
      },
      img: {
        width: 36,
      },
      padding: "0px 10px",
    },
    "& .MuiGrid-item": {
      width: "100%",
    },
    ".only-description": {
      padding: "5px 10px",
      display: "block",
      fontSize: "1vw",
      fontWeight: "400",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.2",
      letterSpacing: ".15px",
      color: "#4f4f4f",
    },
    ".MuiListItemText-secondary": {
      color: "rgb(78, 78, 78)",
      fontWeight: 500,
      fontSize: 12,
    },
    ".label-warapper": {
      textTransform: "uppercase",
      fontSize: 12,
      marginBottom: 5,
      fontWeight: 400,
      lineHeight: 1,
      letterSpacing: 0.15,
      color: "#8c827a",
    },
    [theme.breakpoints.down(770)]: {
      ".only-description": {
        fontSize: "2.5vw",
      },
    },
  };
});

export default CustomListWrapper;

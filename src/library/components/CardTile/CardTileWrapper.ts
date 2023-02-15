import { styled } from "@mui/system";
import Card from "@mui/material/Card";

export default styled(Card)(({ theme }) => {
  return {
    cursor: "pointer",
    boxSizing: "border-box",
    width: "11vw",
    height: "11vw",
    boxShadow: "0 2px 4px 0 #e5e5e5, 0 1px 2px 0 #bdbdbd",
    ".MuiList-root": {
      height: 110,
      overflow: "auto",
    },
    "& .MuiCardContent-root": {
      paddingBottom: "0 !important",
      width: "100%",
      height: "100%",
      display: "flex",
      padding: 0,
      justifyContent: "center",
    },
    "& .MuiBox-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: ".1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    "& *": {
      boxSizing: "border-box",
    },
    img: {
      width: "2.5vw",
    },
    "& .cardTitle": {
      marginLeft: "0.3vw",
      fontSize: "1.2vw",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1,
      letterSpacing: 0.15,
      color: "#162242",
      marginTop: 10,
      padding: "10px 0px",
    },
    "& .MuiListItem-root": {
      ".only-description": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
      "&:hover": {
        "& .only-description": {
          color: "white",
        },
      },
    },
    "&.hoverOnContentWrapper": {
      alignItems: "flex-start",
      "& .MuiCardContent-root": {
        justifyContent: "flex-start",
        flexDirection: "column",
      },
      "& .MuiBox-root": {
        display: "flex",
        flexDirection: "row",
        padding: "0px 10px",
        justifyContent: "flex-start",
        borderBottom: "1px solid #ccc",
        gap: 5,
        "& img": {
          width: 35,
          height: 25,
        },
        "& h6": {
          fontSize: "14px",
          marginTop: 5,
          color: "#162242",
        },
      },
    },

    [theme.breakpoints.down(770)]: {
      width: "34vw",
      height: "42vw",
      img: {
        width: "12vw",
      },
      "& h6": {
        fontSize: "4.5vw !important",
        color: "#162242",
      },
    },
    [theme.breakpoints.down(500)]: {
      width: "34vw",
      height: "42vw",
      "& .cardTitle": {
        fontSize: 13,
      },
      "& .MuiListItem-root": {
        ".only-description": {
          fontSize: "2.5vw",
        },
      },
    },
  };
});

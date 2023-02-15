import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export default styled(Box)(({ theme }) => {
  return {
    ".MuiInputBase-root": {
      position: "relative",
      ".MuiInputAdornment-root": {
        position: "absolute",
        right: 25,
      },
    },
    margin: 44,
    section: {
      display: "flex",
      gap: 50,
      alignItems: "start",
      justifyContent: "center",
      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid #697a86 !important",
      },
      form: {
        display: "flex",
        gap: 40,
        alignItems: "start",
        justifyContent: "center",
        input: {
          width: 316,
          minHeight: 32,
          fontSize: 24,
          fontWeight: 500,
          lineHeight: 1,
          fontStretch: "normal",
          fontStyle: "normal",
          fontFamily: ["'Lato'", "sans-serif"].join(","),
          padding: "16px 30px",
          color: "#697a86",
        },
        button: {
          justifyContent: "left",
        },
        ".forgot-password": {
          paddingLeft: 2,
          fontSize: 18,
          fontWeight: 500,
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 0.96,
          letterSpacing: "normal",
          marginLeft: "8%",
          fontFamily: ["'Roboto'", "sans-serif"].join(","),
          textTransform: "initial",
          backgroundColor: "#ffff",
          ":active": {
            backgroundColor: "transparent !important",
          },
        },
        ".sign-in": {
          width: 180,
          padding: "12px 30px",
          borderRadius: 100,
          outlineWidth: 0,
          border: "none",
          fontSize: 24,
          textAlign: "center",
          justifyContent: "center",
          fontFamily: ["'Oswald'", "sans-serif"].join(","),
        },
      },
      ".error-message": {
        display: "flex",
        justifyContent: "center",
        marginBottom: 20,
        animation: "hideMe 1s forwards",
        span: {
          padding: 10,
          border: "1px solid red",
          borderRadius: 3,
        },
      },
    },
    ".login_please-check": {
      fontFamily: ["'Roboto'", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "30px",
      letterSpacing: "normal",
      padding:0,
      p: {
        textAlign: "center",
        color: " #000",
        marginTop: 36,
        marginBottom: 12,
      },
      button: {
        textTransform: "none",
      },
    },
    "@keyframes hideMe": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
    [theme.breakpoints.down(1025)]: {
      form: {
        flexDirection: "column",
        alignItems: "center",
        ".forgot-password": {
          marginLeft: "8% !important",
        },
      },
    },
    [theme.breakpoints.down(1024)]: {
      section: {
        ".sign-in": {
          width: "100% !important",
          display: "block",
          textAlign: "center",
        },
      },
    },
    [theme.breakpoints.down(425)]: {
      "&.login": {
        margin: 20,
        section: {
          display: "block",
        },
        input: {
          width: "100% !important",
          fontSize: "16px !important",
        },
      },
      ".MuiOutlinedInput-root": {
        width: "100%",
      },
      ".MuiFormControl-root": {
        width: "100%",
      },
    },
  };
});

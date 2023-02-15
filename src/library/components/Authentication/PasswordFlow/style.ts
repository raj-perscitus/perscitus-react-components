import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export default styled(Box)(({ theme }) => {
  return {
    textAlign: "center",
    margin: "30px 0",
    ".change-password-flow_heading": {
      h4: {
        marginTop: "2vw",
        fontSize: "1.9vw",
        fontFamily: ['"Roboto"', "sans-serif"].join(","),
        fontWeight: 300,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.4,
        letterSpacing: "normal",
        color: "#000",
      },
      p: {
        fontSize: "1.4vw",
        fontWeight: 400,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1,
        letterSpacing: "normal",
        color: "#000",
        fontFamily: ["'Roboto'", "sans-serif"].join(","),
      },
    },
    ".change-password-flow_fields": {
      display: "flex",
      justifyContent: "center",
      gap: 20,
      fontFamily: ['"Roboto"', "sans-serif"].join(","),
      marginTop: 44,
      flexWrap: "wrap",
      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid #697a86 !important",
      },
      ".resend-btn": {
        display: "flex",
        aliginItem: "center",
        marginTop: 20,
        justifyContent: "center",
        fontWeight: 300,
        alignItems: "center",
        button: {
          textTransform: "none",
          fontSize: "1rem",
          fontFamily: ['"Roboto"', "sans-serif"].join(","),
        },
      },
      input: {
        outlineWidth: 0,
        fontFamily: ['"Oswald"', "sans-serif"].join(","),
        fontSize: "1.6vw",
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        color: "#697a86",
        lineHeight: 0.2,
        width: 322,
        padding: "16px 27px",
      },
      ".MuiOutlinedInput-root": {
        marginRight: "1vw",
      },
      ".MuiButtonBase-root": {
        display: "block",
        textAlign: "left",
      },
    },
    ".change-password-flow_submit": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      marginTop: "2vw",
      button: {
        width: 260,
        padding: "14px 30px",
        borderRadius: 100,
        border: "none",
        color: "#fff",
        fontFamily: ['"Oswald"', "sans-serif"].join(","),
        fontSize: 24,
        textAlign: "center",
        marginBottom: ".5rem",
      },
    },
    ".forgot-password_go-to-sign": {
      textAlign: "center",
      fontFamily: ["'Roboto'", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.4,
      letterSpacing: "normal",
      color: "#000",
      paddingTop: 44,
      paddingBottom: 30,
      button: {
        fontSize: 18,
        fontWeight: 500,
        textTransform: "none",
        padding: 0,
      },
    },
    [theme.breakpoints.down(1024)]: {
      padding: "0 16px",
      ".change-password-flow_heading": {
        p: {
          fontSize: 14,
          fontWeight: 400,
          padding: "10px 0 20px",
          margin: 0,
        },
      },
      ".change-password-flow_fields": {
        marginTop: 0,
        ".MuiOutlinedInput-root": {
          marginRight: 0,
          marginBottom: 10,
          width: "100%",
        },
        input: {
          fontSize: 20,
          fontWeight: 500,
          width: "100vw",
          padding: " 16px 43px 16px 30px",
        },
      },
      ".change-password-flow_submit": {
        button: {
          width: "100%",
          fontSize: 20,
          padding: "8px 22px",
          marginTop: 30,
        },
      },
      ".forgot-password_go-to-sign": {
        marginTop: "10px",
        fontFamily: ['"Roboto",sans-serif'].join(","),
        fontSize: "18px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.06",
        letterSpacing: "normal",
        color: "#000",
        padding: 0,
      },
    },
    [theme.breakpoints.down(425)]: {
      input: {
        width: "100% !important",
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

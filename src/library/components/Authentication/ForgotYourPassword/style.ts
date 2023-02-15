import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export default styled(Box)(({ theme }) => {
  return {
    margin: 44,
    section: {
      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        border: "1px solid #697a86 !important",
      },
      ".forgot-text": {
        fontFamily: ["'Roboto'", "sans-serif"].join(","),
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
        position: "absolute",
        left: "10%",
        div: {
          margin: 0,
          fontSize: "20px",
          lineHeight: "1.4",
          color: "#162242",
          marginBottom: "4px",
        },
        p: {
          margin: 0,
        },
      },
      display: "flex",
      gap: 50,
      alignItems: "start",
      justifyContent: "center",
      form: {
        display: "flex",
        gap: 50,
        marginLeft: 300,
      },
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
      ".reset-password": {
        width: 276,
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
      section: {
        flexDirection: "column-reverse",
        alignItems: "center",
        gap: 20,
        ".reset-password": {
          width: "100%",
          fontSize: "20px !important",
          lineHeight: "1 !important",
        },
        input: {
          fontSize: "20px !important",
          fontFamily: ["'Oswald'", "sans-serif"].join(","),
        },
        form: {
          flexDirection: "column",
          alignItems: "center",
          gap: "20px !important",
          margin: "0 !important",
        },
        ".forgot-text": {
          textAlign: "center",
          position: "unset !important",
          div: {
            fontSize: 18,
          },
          p: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1,
            color: "#000",
            fontStretch: "normal",
            fontStyle: "normal",
            letterSpacing: "normal",
            fontFamily: ["'Roboto'", "sans-serif"].join(","),
          },
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
    },
  };
});

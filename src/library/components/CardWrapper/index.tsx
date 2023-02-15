import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Fab from "@mui/material/Fab";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ForumIcon from "@mui/icons-material/Forum";
import styled from "@mui/material/styles/styled";

const StyleWrapper = styled(Box)(() => {
  return {
    maxWidth: "100%",
    margin: "0px auto",
    paddingBottom: 50,
    ".MuiTabs-flexContainer": {
      justifyContent: "space-around",
    },
    ".MuiCardContent-root .MuiButtonBase-root": {
      minWidth: "13%",
      background: "#fff !important",
      color: "#162242",
    },
    ".MuiTabs-indicator": {
      backgroundColor: "#162242",
    },
    ".MuiTabs-scroller": {
      borderBottom: "1px solid #999999",
    },
    ".MuiPaper-root": {
      padding: 0,
    },
    ".product-wrapper_title span": {
      fontFamily: "Roboto",
      fontSize: 42,
      textTransform: "uppercase",
    },
    "#product-wrapper_component": {
      minHeight: "40vh",
    },
    ".product-wrapper_footer": {
      background: "#f7f7f7",
      borderTop: "1px solid #bdbdbd",
      padding: 10,
      justifyContent: "flex-end",
      textAlign: "right",
    },
    p: {
      margin: 0,
    },
    ".product-wrapper_footer-text": {
      margin: 0,
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.14,
      letterSpacing: "normal",
      color: "#333333",
      padding: "2px 0",
    },
  };
});

interface ProductCard {
  title: string;
  Component: React.ComponentType<any>;
  footerText: string;
  showChatIcon?: boolean;
}

export const CardWrapper: React.FC<ProductCard> = (props) => {
  return (
    <StyleWrapper>
      <Card variant="outlined">
        <CardHeader title={props.title} className="product-wrapper_title" />
        <CardContent>
          <div id="product-wrapper_component">{<props.Component />}</div>
        </CardContent>
        <CardActions className="product-wrapper_footer">
          <div>
            <b>Need help?</b>
            <p
              className="product-wrapper_footer-text"
              style={{ marginTop: 0 }}
              dangerouslySetInnerHTML={{ __html: props.footerText }}
            />
          </div>
          <div className="product-wrapper_footer-chat">
            <Fab aria-label="add" sx={{ background: "#fb6647", color: "#fff" }}>
              <ForumIcon sx={{ color: "#fff" }} />
            </Fab>
          </div>
        </CardActions>
      </Card>
    </StyleWrapper>
  );
};

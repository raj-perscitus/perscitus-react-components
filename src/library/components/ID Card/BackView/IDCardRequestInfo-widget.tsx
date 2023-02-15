import React from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export interface IDCardRequestInfoProps {
  heading: string;
  headingStyle?: object;
  text: string;
  EdiId?: string; // EDI PAYOR ID
  style?: object;
}

const IDCardRequestInfoWrapper = styled(Card)(({ theme }) => {
  return {
    ".request-info_heading": {
      color: "#fff",
      margin: 0,
      fontSize: 19,
      fontWeight: 650,
      textDecoration: "underline",
    },
    ".request-info_text": {
      fontSize: 17,
      fontWeight: 600,
      margin: 2,
    },
    ".request-info_edi_payor": {
      fontWeight: 650,
      marginBottom: 0,
      span: {
        color: "#fff",
      },
    },
    // Responsive
    [theme.breakpoints.down(768)]: {
      ".request-info_content": {
        padding: 10,
        ".request-info_heading": {
          fontSize: "1.9vw",
          fontWeight: 650,
        },
        ".request-info_text": {
          fontSize: "1.7vw",
          fontWeight: 600,
        },
        ".request-info_edi_payor": {
          fontSize: "1.9vw",
        },
      },
    },
  };
});

export const IDCardRequestInfo = React.memo((props: IDCardRequestInfoProps) => {
  return (
    <IDCardRequestInfoWrapper className="request-info" style={props.style}>
      <CardContent className="request-info_content">
        {props.heading ? (
          <h4 className="request-info_heading">
            <span style={props.headingStyle}>{props.heading}</span>
          </h4>
        ) : null}
        <p className="request-info_text">{props.text}</p>

        {props.EdiId ? (
          <p className="request-info_edi_payor">
            <span>EDI PAYOR ID </span> {props.EdiId}
          </p>
        ) : null}
      </CardContent>
    </IDCardRequestInfoWrapper>
  );
});

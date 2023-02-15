import React from "react";
import styled from "@mui/material/styles/styled";

export interface IdCardTeleMedcineProps {
  heading: string;
  description: string;
}

const IdCardTeleMedcineWrapper = styled("div")(({ theme }) => {
  return {
    borderRadius: 5,
    backgroundColor: "",
    padding: 10,
    color: "red",
    fontWeight: 700,
    textAlign: "center",
    ".telemedicine_heading span": {
      borderBottom: `1px solid red`,
      letterSpacing: 0.7,
    },
    [theme.breakpoints.down(768)]: {
      padding: 5,
      fontWeight: 800,
      ".telemedicine_description, .telemedicine_heading": {
        fontSize: "1.8vw",
        fontWeight: "550",
        paddingBottom: 2,
      },
    },
  };
});

export const IdCardTeleMedcine = React.memo((props: IdCardTeleMedcineProps) => {
  return (
    <IdCardTeleMedcineWrapper className="id-card_telemedicine">
      <div className="telemedicine_heading">
        <span>TALK TO A TELEMEDICINE PHYSICIAN 24/7</span>
      </div>
      <div className="telemedicine_description">
        $0 CO-PAY | 833- SWIFTMD | (833) 794-3863
      </div>
    </IdCardTeleMedcineWrapper>
  );
});

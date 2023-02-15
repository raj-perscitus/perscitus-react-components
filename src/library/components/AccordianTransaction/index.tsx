import React, { useState } from "react";
import styled from "@mui/material/styles/styled";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#ffffff",
  boxShadow: "none",
  padding: "0px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&$expanded": {
    margin: "auto",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  marginBottom: -1,
  minHeight: 49,
  position: "fixed",
  zIndex: 100,
  width: "100%",
  paddingLeft: "24px",
  paddingRight: "5px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    minHeight: 12,
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionSummary2 = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  marginBottom: 56,
  minHeight: 49,
  width: "100%",
  zIndex: 1031,
  position: "fixed",
  paddingLeft: "24px",
  paddingRight: "5px",
  bottom: "0",
  "&.Mui-expanded": {
    paddingLeft: "24px",
    paddingRight: "5px",
    top: 129,
    marginBottom: "100vh",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  marginTop: 48,
  height: "100vh",
}));

const AccordionDetails2 = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  marginTop: 75,
  height: "50vh",
}));

interface Card {
  titleOne: string;
  ComponentOne: React.ComponentType<any>;
  titleTwo: string;
  ComponentTwo: React.ComponentType<any>;
}

export const AccordianTransaction: React.FC<Card> = (props) => {
  const [panel, setPanel] = useState("panel2");
  const changePannel = (currentPlannel: string) => {
    if (currentPlannel === "panel1") {
      setPanel("panel2");
    } else {
      setPanel("panel1");
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Accordion
        expanded={panel === "panel1"}
        onChange={() => changePannel(panel)}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "#fff" }}
        >
          <span className="labelRECENTTRANSACTIONS">{props.titleOne}</span>
        </AccordionSummary>
        <AccordionDetails>
          <div>{<props.ComponentOne />}</div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={panel === "panel2"}
        onChange={() => changePannel(panel)}
      >
        <AccordionSummary2
          aria-controls="panel2d-content"
          id="panel2d-header"
          style={{ backgroundColor: "#fff" }}
        >
          <span className="labelRECENTTRANSACTIONS">{props.titleTwo}</span>
        </AccordionSummary2>
        <AccordionDetails2>
          <div style={{ marginTop: 100 }}>{<props.ComponentTwo />}</div>
        </AccordionDetails2>
      </Accordion>
      {/* <div>Hello</div> */}
    </>
  );
};

import React, { useCallback, useState } from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { FrontView, FrontViewProps } from "./FrontView";
import { BackView, BackViewProps } from "./BackView";
import { Button } from "../Button";

export interface CardViewProps {
  frontView: FrontViewProps;
  backView: BackViewProps;
}
const IDCardViewWrapper = styled(Card)(({ theme }) => {
  return {
    "@page": {
      size: "Portrait",
    },

    "@media print": {
      clear: "both",
      WebkitPrintColorAdjust: "exact",
      margin: "0 auto",
      ".id-card_hidden": {
        display: "block !important",
      },
    },
    ".id-card_hidden": {
      display: "none",
    },
    ".id-card_content > div": {
      borderRadius: 10,
      border: "2px dashed #000",
      padding: 10,
    },
    ".id-card_content > section": {
      borderRadius: 10,
      border: "2px dashed #000",
      padding: 10,
    },
    ".id-card_actions": {
      justifyContent: "flex-end",
      "@media print": {
        display: "none",
      },
    },

    // Responsive
    [theme.breakpoints.down(768)]: {
      padding: "10px !important",
      ".MuiCardContent-root": {
        padding: 10,
      },
    },
  };
});

export const IDCardView: React.FunctionComponent<CardViewProps> = (props) => {
  const [isBackView, setCardView] = useState(false);

  const updateView = useCallback(() => setCardView(!isBackView), [isBackView]);
  const printIdCard = useCallback(() => window.print(), []);

  return (
    <IDCardViewWrapper>
      <CardContent
        className={`id-card_content ${
          isBackView ? "show-back-view" : "show-front-view"
        }`}
      >
        <div className={`${!isBackView ? "id-card_hidden" : ""}`}>
          <FrontView {...props.frontView} />
        </div>
        <div className={`${isBackView ? "id-card_hidden" : ""}`}>
          <BackView {...props.backView} />
        </div>
      </CardContent>
      <CardActions className="id-card_actions">
        <Button size="small" onClick={printIdCard} label="PRINT" />
        <Button
          size="small"
          onClick={updateView}
          label={`VIEW ${isBackView ? "BACK OF CARD" : "FRONT OD CARD"}`}
        />
      </CardActions>
    </IDCardViewWrapper>
  );
};

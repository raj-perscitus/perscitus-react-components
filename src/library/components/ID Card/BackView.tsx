import React from "react";
import styled from "@mui/material/styles/styled";
import { IdCardWidgetProps, IdCardWidget } from "./ID-Widgets";
import {
  IDCardRequestInfo,
  IDCardRequestInfoProps,
} from "./BackView/IDCardRequestInfo-widget";
import { IDCardFooter, IDCardFooterProps } from "./BackView/ID-Footer";

export interface BackViewProps {
  BVleftWidgets: IdCardWidgetProps[];
  BVrightWidgets: IDCardRequestInfoProps[];
  footer: IDCardFooterProps;
}

const BackViewWrapper = styled("section")(({ theme }) => {
  return {
    "#id-card_back-view": {
      display: "flex",
      gap: 30,
      ".back-view_left": {
        display: "flex",
        flexDirection: "column",
        flexBasis: "30%",
        gap: 10,
      },
      ".back-view_right": {
        flexBasis: "70%",
        ".right_applies": {
          textAlign: "end",
        },
        ".right_widgets": {
          display: "flex",
          flexDirection: "column",
          gap: 10,
        },
      },
    },
    // Responsive
    [theme.breakpoints.down(768)]: {
      padding: 10,
      ".right_applies": {
        fontSize: "1.5vw",
      },
    },
  };
});

export const BackView = React.memo((props: BackViewProps) => {
  return (
    <BackViewWrapper id="id-card_back-wrapper">
      <section id="id-card_back-view">
        <div className="back-view_left">
          {props.BVleftWidgets.map((data: IdCardWidgetProps) => (
            <IdCardWidget {...data} />
          ))}
        </div>
        <div className="back-view_right">
          <p className="right_applies">Pre-existing limitations may apply</p>
          <div className="right_widgets">
            {props.BVrightWidgets.map((data: IDCardRequestInfoProps) => (
              <IDCardRequestInfo {...data} />
            ))}
          </div>
          <p className="right_applies">THIS IS NOT INSURANCE</p>
        </div>
      </section>
      <IDCardFooter {...props.footer} />
    </BackViewWrapper>
  );
});

import React from "react";
import styled from "@mui/material/styles/styled";
import { MemberList, MemberListProps } from "./MembersList";
import { IdCardHeader, IdCardHeaderProps } from "./ID-Header";
import { IdCardDepends, IdCardDependsProps } from "./ID-Depends";
import { IdCardTeleMedcine, IdCardTeleMedcineProps } from "./TELEMEDICINE";
import { IdCardNote, IdCardNoteProps } from "./ID-Note";
import { IdCardWidget, IdCardWidgetProps } from "./ID-Widgets";

export interface FrontViewProps extends MemberListProps, IdCardHeaderProps {
  depends: IdCardDependsProps;
  teleMedicine: IdCardTeleMedcineProps;
  note: IdCardNoteProps;
  widgets: IdCardWidgetProps[];
  CallComponent: any;
}

const FrontViewWrapper = styled("div")(({ theme }) => {
  return {
    ".id-card-details": {
      padding: 15,
      display: "flex",
      gap: 30,
      // [theme.breakpoints.down(768)]: {
      //   flexDirection: "column",
      //   gap: 10,
      // },
      ".details_left": {
        flexBasis: "70%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        justifyContent: "space-between",
      },
      ".details_right": {
        flexBasis: "30%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "stretch",
        justifyContent: "space-between",
        gap: 10,
      },
    },
    ".id-card_memberlist": {
      borderBottom: "1px solid #4782c4",
      marginBottom: 5,
    },

    // Responsive

    [theme.breakpoints.down(768)]: {
      ".details_right": {
        justifyContent: "flex-start !important",
      },
      ".id-card-details": {
        padding: "10px 15px",
      },
    },
  };
});

export const FrontView = React.memo((props: FrontViewProps) => {
  const { CallComponent } = props;
  return (
    <FrontViewWrapper
      sx={{
        "@media print": {
          ".id-card-details": { color: "rgba(0, 0, 0, 0.87)" },
        },
      }}
      id="id-card_front-view"
    >
      <IdCardHeader leftImg={props.leftImg} rightImg={props.rightImg} />
      <section className="id-card-details">
        <div className="details_left">
          <MemberList list={props.list} />
          <IdCardDepends {...props.depends} />
          <IdCardTeleMedcine {...props.teleMedicine} />
          <IdCardNote {...props.note} />
        </div>
        <div className="details_right">
          {props.widgets.map((data: IdCardWidgetProps) => (
            <IdCardWidget {...data} />
          ))}
          {CallComponent ? <CallComponent /> : null}
        </div>
      </section>
    </FrontViewWrapper>
  );
});

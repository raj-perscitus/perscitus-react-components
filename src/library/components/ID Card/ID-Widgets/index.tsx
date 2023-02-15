import React from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";

export interface IdCardWidgetProps {
  heading: string;
  headingStyle?: object;
  description?: string;
  list: {
    title: string;
    value: string;
  }[];
  highLightList: boolean;
  style: object;
}

const IdCardWidgetWrapper = styled(Card)(({ theme }) => {
  return {
    padding: "5px 10px",
    h4: {
      marginBottom: 5,
      marginTop: 5,
      span: {
        borderBottom: `2px solid`,
        color: "#fff",
      },
    },
    ".description": {
      fontWeight: "bold",
      fontSize: "1.2em",
      width: "auto",
      marginTop: "0px",
      marginBottom: "0px",
    },
    ".widget_list": {
      ".list_title": {
        fontWeight: 600,
      },
      "& .widget_hightlightKey": {
        color: "#fff",
      },
      "&> div": {
        display: "flex",
        justifyContent: "space-between",
        span: {
          marginBottom: 1,
        },
        "span:last-child": {
          fontWeight: 500,
        },
      },
    },

    // Responsive
    [theme.breakpoints.down(768)]: {
      ".widget_heading": {
        fontSize: "1.8vw",
        fontWeight: 550,
      },
      ".widget_list span": {
        fontSize: "1.8vw",
        fontWeight: 600,
      },
    },
  };
});

export const IdCardWidget = React.memo((props: IdCardWidgetProps) => {
  return (
    <IdCardWidgetWrapper className="id-card_widget" style={props.style}>
      {props.heading ? (
        <h4 className="widget_heading">
          <span style={props.headingStyle}>{props.heading}</span>
        </h4>
      ) : null}
      {props.description ? (
        <p className="description">{props.description}</p>
      ) : null}
      <div className="widget_list">
        {props.list.map((data) => (
          <div>
            <span
              className={`list_title ${
                props.highLightList ? "widget_hightlightKey" : ""
              }`}
            >
              {data.title}
            </span>
            <span>{data.value}</span>
          </div>
        ))}
      </div>
    </IdCardWidgetWrapper>
  );
});

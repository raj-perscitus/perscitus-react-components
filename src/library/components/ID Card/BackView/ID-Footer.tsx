import React from "react";
import styled from "@mui/material/styles/styled";
import { IdCardNote } from "../ID-Note";

export interface IDCardFooterProps {
  style?: object;
  registeredText: string;
  Link: React.FunctionComponent;
  img: {
    src: string;
    alt: string;
    style?: object;
    subTitle?: string;
  };
  note: string;
}

const IDCardFooterWrapper = styled("section")(({ theme }) => {
  return {
    display: "flex",
    ".id-footer_left": {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ".id-footer_registeredText": {
        fontSize: 9.5,
      },
    },
    ".id-footer_right": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginRight: 0,
      float: "right",
      flex: 1,
      gap: 7,
      ".id-footer_note": {
        flexBasis: "20%",
        borderLeft: "1px solid rgb(71, 130, 196)",
        paddingLeft: 10,
        p: {
          marginTop: 0,
          marginBottom: 0,
          fontWeight: 550,
        },
      },
    },
    ".id-footer_brandImg": {
      img: {
        width: 200,
        height: 47,
      },
      p: {
        margin: 0,
      },
    },

    // Responsive
    [theme.breakpoints.down(768)]: {
      ".id-footer_left": {
        gap: 0,
      },
      ".id-footer_registeredText": {
        fontSize: "6px !important",
      },
      ".id-footer_link": {
        fontSize: 7,
        marginLeft: 10,
        marginRight: 5,
      },
      ".id-footer_brandImg": {
        img: {
          width: 70,
          height: 18,
        },
        p: {
          fontSize: "0.28em",
        },
      },
      ".id-footer_note": {
        p: {
          fontSize: "1.2vm",
        },
      },
    },
  };
});

export const IDCardFooter = React.memo((props: IDCardFooterProps) => {
  const { Link, img, note } = props;
  const { subTitle, ...imgProps } = img || {};

  return (
    <IDCardFooterWrapper className="id-card_footer" style={props.style}>
      <div className="id-footer_left">
        <p className="id-footer_registeredText">{props.registeredText}</p>
        {Link ? (
          <div className="id-footer_link">
            <Link />
          </div>
        ) : null}
      </div>
      <div className="id-footer_right">
        <div className="id-footer_brandImg">
          <img {...imgProps} alt={imgProps.alt} />
          <p>{subTitle}</p>
        </div>
        <div className="id-footer_note">
          <IdCardNote text={note} />
        </div>
      </div>
    </IDCardFooterWrapper>
  );
});

import React from "react";
import styled from "@mui/material/styles/styled";

export interface IdCardHeaderProps {
  leftImg: {
    src: string;
    style?: object;
    alt?: string;
  };
  rightImg: {
    src: string;
    style?: object;
    alt?: string;
  };
}

const IdCardHeaderWrapper = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: 112,
    backgroundColor: "#a9c43b",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    "@media print": {
      WebkitPrintColorAdjust: "exact",
    },
    ".header_left": {
      width: 232,
    },
    ".header_right": {
      width: 145,
      height: 45,
    },
    "& :first-of-type": {
      height: 100,
      width: 200,
    },

    // Responsive

    [theme.breakpoints.down(768)]: {
      ".header_left": {
        width: 90,
        height: 36,
      },
      ".header_right": {
        width: 60,
        height: 15,
      },
    },
  };
});

export const IdCardHeader = React.memo((props: IdCardHeaderProps) => {
  const { leftImg, rightImg } = props;

  if (![leftImg, rightImg].some((data) => data)) return null;

  return (
    <IdCardHeaderWrapper className="id-card_header">
      <img
        className="header_left"
        src={leftImg.src}
        alt={leftImg.alt || "ID Card Header left"}
        style={leftImg.style}
      />
      <img
        className="header_right"
        src={rightImg.src}
        alt={rightImg.alt || "ID Card Header right"}
        style={rightImg.style}
      />
    </IdCardHeaderWrapper>
  );
});

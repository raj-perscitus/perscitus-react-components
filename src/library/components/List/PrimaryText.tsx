// Library Imports
import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

// Own Imports
import { ListProps } from "./index";

const CustomPrimaryTextWrapper = styled(Typography)((data) => {
  return {
    display: "flex",
    justifyContent: "space-between",
    "& span": {
      padding: "0.5vw",
      "&:first-of-type": {
        width: "65%",
        // whiteSpace: "nowrap",
        // textOverflow: "ellipsis",
        // overflow: "hidden",
      },
    },
  };
});

const PrimaryText = (props: ListProps) => {
  const { label, labelRight } = props;

  if (!label) return null;

  return (
    <CustomPrimaryTextWrapper className="label-warapper">
      <span title={label}>{label}</span>
      {labelRight ? <span className="label-right">{labelRight}</span> : null}
    </CustomPrimaryTextWrapper>
  );
};

export default React.memo(PrimaryText);

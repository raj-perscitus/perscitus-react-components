import React from "react";
import styled from "@mui/material/styles/styled";

export interface IdCardDependsProps {
  heading: string;
  list: string[];
}

const IdCardDependsWrapper = styled("div")(({ theme }) => {
  return {
    ".depends_header": {
      fontWeight: 700,
      color: "#fff",
      marginBottom: 3,
      textAlign: "center",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
      columnCount: 2,
      marginTop: 5,
      marginBottom: 10,
      li: {
        padding: "1px 0px",
        fontWeight: 600,
      },
    },

    [theme.breakpoints.down(768)]: {
      ".depends_header": {
        fontSize: "2.2vw",
        fontWeight: 550,
      },
      "ul li": {
        fontSize: "2.2vw",
        fontWeight: "550",
      },
    },
  };
});

export const IdCardDepends = React.memo((props: IdCardDependsProps) => {
  return (
    <IdCardDependsWrapper className="id-card_depends">
      <div className="depends_header">{props.heading}</div>
      <ul>
        {props.list.map((list, index) => (
          <li key={`${list}-${index}`}>{list}</li>
        ))}
      </ul>
    </IdCardDependsWrapper>
  );
});

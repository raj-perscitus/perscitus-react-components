import React from "react";
import styled from "@mui/material/styles/styled";

export interface MemberListProps {
  list: {
    title: string;
    value: string;
  }[];
}

const MemberListWrapper = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexWrap: "wrap",
    gap: "0px 20px",
    strong: {
      color: "#fff",
    },
    p: {
      marginTop: 0,
      marginBottom: 7,
    },
    [theme.breakpoints.down(768)]: {
      fontSize: "2.2vw",
      fontWeight: "550",
    },
  };
});

export const MemberList = React.memo((props: MemberListProps) => {
  return (
    <MemberListWrapper className="id-card_memberlist">
      {props.list.map(({ title, value }) => (
        <div key={title}>
          {" "}
          <strong>{title}</strong>
          <p>{value}</p>
        </div>
      ))}
    </MemberListWrapper>
  );
});

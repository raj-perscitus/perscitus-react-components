import React from "react";
import styled from "@mui/material/styles/styled";

export interface IdCardNoteProps {
  text: string;
}

const IdCardNoteWrapper = styled("p")(({ theme }) => {
  return {
    fontSize: 13,
    [theme.breakpoints.down(768)]: {
      fontSize: ".23em",
      fontWeight: 645,
    },
  };
});

export const IdCardNote = React.memo((props: IdCardNoteProps) => {
  return <IdCardNoteWrapper>{props.text}</IdCardNoteWrapper>;
});

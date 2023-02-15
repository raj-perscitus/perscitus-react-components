import styled from "@emotion/styled";
import React from "react";

const Styled = styled("section")(({ theme }) => {
  return {
    ".label-head": {
      fontSize: 16,
      color: "#000",
      fontWeight: 400,
    },
  };
});

const ForcedPasswordDialog = (props: {
  emailStatus?: string;
  content: string;
}) => {
  return (
    <Styled>
      <h4 className="label-head">{props.content}</h4>
      {props.emailStatus && (
        <p style={{ margin: 0, color: "#28a745" }}>{props.emailStatus}</p>
      )}
    </Styled>
  );
};

export default ForcedPasswordDialog;

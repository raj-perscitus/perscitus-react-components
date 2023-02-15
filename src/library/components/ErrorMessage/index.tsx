import React from "react";
import { styled } from "@mui/system";

export interface ErrorMessageType {
  error: string;
}

const ErrorElement = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDireaction: "column",
    gap: 20,
    justifyContent: "center",
    animation: "hideMe 1s forwards",
    color: "red",
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 400,
    span: {
      padding: 10,
      border: "1px solid",
      borderRadius: 30,
      background: "#f5f5f5",
    },
    "@keyframes hideMe": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
  };
});

export const ErrorMessage: React.FC<ErrorMessageType> = ({ error }) => {
  if (!error) return null;
  return (
    <ErrorElement className="error-message">
      <span>{error}</span>
    </ErrorElement>
  );
};

import React from "react";
import { passwordCheck } from "./handlers";
import { styled } from "@mui/system";

const Styled = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    alignItems: "center",
    ".pwd-validations": {
      fontWeight: 300,
      fontSize: "1rem",
    },
    ">div": {
      margin: "5px 0",
      textAlign: "left",
    },
    ".valid": {
      color: "#19bf00",
    },
    ".invalid": {
      color: "#df3312",
    },
    ".pwd-validation-txt": {
      marginLeft: 5,
      lineHeight: 1.5,
    },
  };
});

const PasswordValidations: React.FC<{ value: string }> = ({ value }) => {
  if (!value) return null;

  return (
    <Styled>
      <div className="pwd-validations">
        {passwordCheck(value).map((check) => {
          return (
            <div
              key={check.message}
              className={check.valid ? "valid" : "invalid"}
            >
              <span aria-hidden="true">{check.valid ? "✓" : "✖"} </span>
              <span className="pwd-validation-txt">
                Password must contain {check.message}
              </span>
            </div>
          );
        })}
      </div>
    </Styled>
  );
};
export default React.memo(PasswordValidations);

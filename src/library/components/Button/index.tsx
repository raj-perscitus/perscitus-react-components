import React from "react";
import MaterialButton from "@mui/material/Button";
import styled from "@mui/system/styled";

export interface CustomButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  disableRipple?: boolean;
}

const ButtonWrapper = styled(MaterialButton)(({ theme }) => {
  return {};
});

export const Button: React.FunctionComponent<CustomButtonProps> = (props) => {
  const { label, ...rest } = props;
  return (
    <ButtonWrapper
      disableFocusRipple
      disableElevation
      disableRipple
      variant="contained"
      {...rest}
    >
      {label}
    </ButtonWrapper>
  );
};

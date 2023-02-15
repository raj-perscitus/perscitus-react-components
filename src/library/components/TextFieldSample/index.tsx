import React from "react";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";

export interface TextFieldSampleProps {
  label?: string;
  name?: string;
  value?: string;
  disable?: boolean;
  reqFlag?: boolean;
  length?: number;
  fieldType: string;
  List?: Array<string | number | object>;
  renderList?: React.ComponentType;
  helperText?: string;
  errMsg?: string;
  required?: boolean;
  onChange?: (val: any) => void;
  error?:boolean;
  InputLabelProps?:{style: {}} | {};
  inputProps?:{maxLength:{}} | {};
  type?: string;
  InputProps:React.FC | any;
}

export const TextFieldSample: React.FC<TextFieldSampleProps> = (props) => {
  const { InputPropsComponent } = props?.InputProps;
  return (
   
      <TextField
        error={props.error}
        label={props.label}
        name={props.name}
        variant="filled"
        autoComplete="off"
        value={props.value}
        helperText={props.helperText}
        onChange={props?.onChange}
        disabled={props.disable}
        required={props.reqFlag}
        InputLabelProps={props.InputLabelProps}
        inputProps={{
          maxLength: props.length,
        }}
        type={props.fieldType}
        select={props.fieldType === "select" ? true : false}
        InputProps={props?.InputProps && <InputPropsComponent/>}
      >
        {props?.List?.length &&
          props?.List?.map((option: any, index: number) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
  );
};


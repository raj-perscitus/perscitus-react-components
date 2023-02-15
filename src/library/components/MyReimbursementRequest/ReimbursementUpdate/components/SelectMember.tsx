import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from '@mui/material/NativeSelect';

export const SelectMember = (props: { value: string, list: Array<any> }) => {
  return (
    <section>
      <FormControl fullWidth disabled>
        <InputLabel htmlFor="select-reimbursement-member">Select Member</InputLabel>
        <NativeSelect
          inputProps={{
            name: 'Select Member',
            id: 'select-reimbursement-member',
          }}
          value={props.value}
        >
            { props?.list?.map((data: string) => <MenuItem value={data}>{data}</MenuItem>)}
        </NativeSelect>
      </FormControl>
    </section>
  );
};

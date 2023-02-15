import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function MemberDOB(props: any) {
  const [value, setValue] = React.useState<any | null>(getDateFormat(props.date));

  useEffect(() => {
    getDateFormat(props.date) !== value && setValue(getDateFormat(props.date))
  }, [props.date])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disabled={props.disabled}
        label="Date of Service"
        value={value}
        onChange={(newValue: any) => {
          const serviceDate: any = getDateFormat(newValue);
          setValue(serviceDate);
          props.updateSelectedRow({ ...props.selectedMember, data: { ...props.selectedMember.data, serviceDate  }  })
        }}
        renderInput={(params: any) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

const getDateFormat = (date: any) => {
  let serviceDate: any = new Date(date);
  serviceDate = `${serviceDate.getFullYear()}-${serviceDate.getMonth()+1}-${serviceDate.getDate()}`;
  return serviceDate;
}
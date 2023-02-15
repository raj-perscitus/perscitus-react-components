import { useState } from "react";

interface UserFormType {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  values: { [index: string]: string };
}

// useForm functional component
export const useForm = (callback: any, initialState = {}): UserFormType => {
  const [values, setValues] = useState(initialState);

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  // onSubmit
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    callback(event); // triggering the callback
  };

  // return values
  return {
    onChange,
    onSubmit,
    values,
  };
};

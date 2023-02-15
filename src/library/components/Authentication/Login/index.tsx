import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "../../Button";
import { useForm } from "../../../hooks/UseForm";
import {
  inputFields,
  initialState,
  getQueryParams,
  basicLoginFormValidation,
} from "./data-hanlders";
import Styled from "./style";
import { ErrorMessage } from "../../ErrorMessage";
import appConfig from "../../../assests/config";
import { AuthenticationScreens } from "../data";

export const loginHandles = [AuthenticationScreens.login];

export interface LoginType {
  config: "LOGIN";
  authenticationFlow: (data: object) => Promise<unknown>;
  changeConfig: (config: string) => void;
}

const LoginComponent: React.FC<LoginType> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState("");
  const [fieldReadOnly, setFieldReadOnly] = useState(true);

  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    initialState
  );

  const updateValuesFromURL = () => {
    const getValuesFromURL = getQueryParams();
    getValuesFromURL.forEach((credential: any) => {
      onChange(credential);
    });

    if (!getValuesFromURL.length) return;

    const submitValues = getValuesFromURL.reduce(
      (acc, { target }) => ({ ...acc, [target.name]: target.value }),
      {}
    );

    loginUserCallback({ submitValues });
  };

  useEffect(() => {
    updateValuesFromURL();
    const timer = setTimeout(() => {
      setFieldReadOnly(false);
      clearTimeout(timer);
    }, 1000);
  }, []);

  // a submit function that will execute upon form submission
  async function loginUserCallback(e: any | { submitValues: object }) {
    try {
      // authenticationFlow()
      /**
       * It will validate about the length of the value as per requirement
       */

      if (basicLoginFormValidation(e.submitValues || values))
        return setError("Please provide valid details");

      await props.authenticationFlow(e.submitValues || values);
    } catch (error: any) {
      setError(error?.message || appConfig.errorMessages.SOMETHING_WRONG);
    }
  }

  const changeConfig = (navigateTo: string) => () => {
    props.changeConfig(navigateTo);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Styled className="login">
      {error ? <ErrorMessage error={error} /> : null}
      
      <section>
        <form onSubmit={onSubmit}>
          <OutlinedInput
            {...inputFields.email}
            readOnly={fieldReadOnly}
            value={values.email}
            onChange={onChange}
          />
          <FormControl>
            <OutlinedInput
              {...inputFields.password}
              type={showPassword ? "text" : "password"}
              value={values.password}
              readOnly={fieldReadOnly}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{backgroundColor:'transparent !important'}}
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              {...inputFields.forgotPassword}
              onClick={changeConfig(AuthenticationScreens.FP)}
            />
          </FormControl>
          <Button {...inputFields.signIn} />
        </form>
      </section>
      <div className="login_please-check">
        <p>
          <span>Having trouble logging in?</span>
          <br />{" "}
          <Button
            {...inputFields.checkRegistration}
            onClick={changeConfig(AuthenticationScreens.CR)}
          />{" "}
          <span>if your email has been registered on the portal.</span>
        </p>
      </div>
    </Styled>
  );
};

export const Login = React.memo(LoginComponent);

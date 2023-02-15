import { FormControl, OutlinedInput } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import configParams from "../../../assests/config";
import { useForm } from "../../../hooks/UseForm";
import { Button, CustomButtonProps } from "../../Button";
import { ErrorMessage } from "../../ErrorMessage";
import { AuthenticationScreens } from "../data";
import { AuthenticationPropsPass } from "../interface";
import PasswordValidations from "../PasswordValidation";
import * as data from "./data";
import { initializeState } from "./handlers";
import Styled from "./style";

/**
 * OTP: One Time Password
 * FTP: First Time Password
 * CP: Change Password
 * CPWC: Change Password with Code
 * RP: Reset Passoword form
 */

export const passwordFlowHandles = [
  AuthenticationScreens.OTP,
  AuthenticationScreens.FTP,
  AuthenticationScreens.CPWC,
  AuthenticationScreens.CP,
  AuthenticationScreens.RP,
];

export type Configuration = "OTP" | "FTP" | "CPWC" | "CP" | "RP";

export interface PasswordFlowType extends AuthenticationPropsPass {
  config: Configuration;
  authenticationFlow: (data: object) => Promise<unknown>;
  userInfo: any;
}

export const PasswordFlow: React.FC<PasswordFlowType> = (props) => {
  const [config] = useState(props.config);
  const [errorMessage, setErrorMessage] = useState("");

  const [initialState, setInitialState] = useState(initializeState(config));

  const { onChange, onSubmit, values } = useForm(formOnSubmit, initialState);
  const { changeConfig, authenticationFlow } = props;

  useEffect(() => {
    setInitialState(initializeState(config));
  }, [config]);

  async function formOnSubmit() {
    setErrorMessage("");
    if (config === AuthenticationScreens.CPWC) {
      try {
        const cpwcResponse: any = await authenticationFlow({ ...values });
        props.changeConfig(cpwcResponse.nextAuth);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else if (config === AuthenticationScreens.FTP) {
      try {
        if (values?.newpassword !== values?.newpasswordagain) return;
        await authenticationFlow({ ...values });
        props.changeConfig(AuthenticationScreens.OTP);
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    } else {
      try {
        await authenticationFlow({ ...values });
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    }
  }

  const bottomInputBtn = (btn: CustomButtonProps) => async () => {
    if (btn.label === configParams.labels.Resend_Code) {
      try {
        await authenticationFlow({ resend: true });
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    }
  };

  const inputFields = useMemo(
    () => data.inputFields[props.config || config],
    [props.config, config]
  );

  const getDescription = React.useCallback(() => {
    if (props.config === "CPWC" || props.config === "RP") {
      return inputFields.heading.description.replace(
        "email",
        maskEmail(props?.userInfo?.email)
      );
    }
    return inputFields.heading.description;
  }, []);

  const maskEmail = (mail: string) => {
    const split: Array<string> = mail?.split("@");
    if (!split.length) return "";
    const id = split[0].replace(split[0].substring(1, split[0].length), "***");
    const domain = split[1].replace(
      split[1].substring(1, split[1].length),
      "***"
    );
    return `${id}@${domain}`;
  };

  const navigateToSignIn = () => changeConfig(AuthenticationScreens.login);

  return (
    <Styled className="change-password-flow">
      <section>
        <div className="change-password-flow_heading">
          <h4>{inputFields.heading.title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: getDescription(),
            }}
          />
        </div>
        <ErrorMessage error={errorMessage} />
        <form autoComplete="off" onSubmit={onSubmit}>
          <div className="change-password-flow_fields">
            {inputFields.fields.map((field: data.Welcome3) => {
              const { buttonProps, ...rest } = field;
              return (
                <FormControl>
                  <OutlinedInput
                    {...rest}
                    onChange={onChange}
                    value={values[field.name]}
                  />
                  {buttonProps && (
                    <div className="resend-btn">
                      <span>{buttonProps?.text}</span>
                      <Button
                        {...(buttonProps as CustomButtonProps)}
                        onClick={bottomInputBtn(buttonProps)}
                      />
                    </div>
                  )}
                </FormControl>
              );
            })}
          </div>
          <div className="change-password-flow_submit">
            {inputFields.submit.map((btn: data.Submit) => {
              const { text, ...rest } = btn;
              return (
                <>
                  {text && <b>{text}</b>} <Button type="submit" {...rest} />
                </>
              );
            })}
          </div>
        </form>
        {values["newpassword"] && (
          <PasswordValidations value={values["newpassword"]} />
        )}
      </section>
      <div className="forgot-password_go-to-sign">
        <span>Go back to</span>{" "}
        <Button
          {...{
            label: "Sign In",
            size: "small",
            variant: "text",
            type: "submit",
            className: "sign-in_password",
          }}
          onClick={navigateToSignIn}
        />
      </div>
    </Styled>
  );
};

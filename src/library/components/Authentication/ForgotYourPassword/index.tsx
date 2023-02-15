import React, { useCallback, useMemo, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import config from "../../../assests/config";
import { Button, CustomButtonProps } from "../../Button";
import { Dialog } from "../../Dialog";
import ForcedPasswordDialog from "./ForcedPasswordChanged";
import { ErrorMessage } from "../../ErrorMessage";
import { useForm } from "../../../hooks/UseForm";
import { AuthenticationPropsPass } from "../interface";
import { modifyDialogContent } from "./hanlders";
import { getInputFields, initialState, dialogDetails } from "./data";
import { AuthenticationScreens } from "../data";
import Styled from "./style";

export const forgotPasswordHandles = [
  AuthenticationScreens.FP,
  AuthenticationScreens.CR,
];
export interface PasswordType extends AuthenticationPropsPass {
  appConfig: {
    brand: string;
  };
  config: "forgot-password" | "check-registration";
  theme?: object;
  authenticationFlow: (data: object) => Promise<unknown>;
}

interface DialogType {
  title: string;
  content: string;
  emailStatus?: string;
  buttons: CustomButtonProps[];
}

const ForgotPasswordComponent: React.FC<PasswordType> = (props) => {
  const { changeConfig, authenticationFlow } = props;

  const [error, setError] = useState("");

  // Forgotpassword response
  const [showDialog, setShowDialog] = useState<DialogType | null>(null);
  const [emailStatus, setEmailStatus] = useState("");

  const { onChange, onSubmit, values } = useForm(submitCallback, initialState);

  // a submit function that will execute upon form submission
  async function submitCallback() {
    showDialog && setShowDialog(null);
    error && setError("");
    /**
     * It will validate about the length of the value as per requirement
     */

    const hasMinLengthValues: Array<string> = Object.values(values);
    if (hasMinLengthValues.find((data: string) => data.length < 3))
      return setError("Please provide valid details");
    try {
      const response = (await authenticationFlow({ ...values })) as {
        nextAuth: string;
        showResendEmailDialog: boolean;
        dialog: string;
      };
      if (response.dialog) {
        // Open Resend Dialog
        let dialogContent =
          dialogDetails[response.dialog as keyof typeof dialogDetails];
        dialogContent = modifyDialogContent({
          dialog: response.dialog,
          dialogContent: { ...(dialogContent || {}) },
          props,
          values,
        });
        return setShowDialog(dialogContent);
      }
      changeConfig(response?.nextAuth);
    } catch (error: any) {
      if (error?.dialog) {
        let dialogContent =
          dialogDetails[
            (error?.dialog as keyof typeof dialogDetails) || "noActiveAccount"
          ];
        console.log(error);
        dialogContent = modifyDialogContent({
          dialog: error?.dialog,
          dialogContent: { ...dialogContent },
          props,
          values,
        });
        if (error?.dialog !== "noActiveAccount")
          setError(
            error.message === config.errorMessages.NETWORK_ERROR
              ? config.errorMessages.SOMETHING_WRONG
              : error.message
          );
        setShowDialog({ ...dialogContent });
      }
    }
  }

  const inputFields = useMemo(
    () => getInputFields(props.config),
    [props.config]
  );

  const resendEmailHandler = useCallback(
    async (btnInfo: any) => {
      setShowDialog(null);
      if (btnInfo.label === "Close" || !btnInfo.label) {
        return emailStatus && setEmailStatus("");
      } else if (btnInfo.label === config.sections.FORGOT_YOUR_PASSWORD) {
        return changeConfig(AuthenticationScreens.FP);
      } else if (btnInfo.label === config.headings.GO_TO_SIGNIN) {
        return changeConfig(AuthenticationScreens.login);
      }

      // Resend Email
      try {
        setShowDialog(null);
        await authenticationFlow({ resendEmail: true });
        setEmailStatus(config.headings.EMAIL_SENT);
        setShowDialog(dialogDetails["emailSentSuccesfully"]);
      } catch (error) {
        setShowDialog(null);
        setEmailStatus(config.errorMessages.SOMETHING_WRONG);
        setShowDialog(dialogDetails["noActiveAccount"]);
      }
      alert(emailStatus);
    },
    [emailStatus, showDialog, changeConfig, authenticationFlow, showDialog]
  );

  const navigateToSignIn = () => changeConfig(AuthenticationScreens.login);

  return (
    <Styled className="forgot-password">
      {error ? <ErrorMessage error={error} /> : null}
      <section>
        <div className="forgot-text">
          <div>{inputFields.info.title}</div>
          <p
            dangerouslySetInnerHTML={{ __html: inputFields.info.description }}
          />
        </div>
        <form onSubmit={onSubmit}>
          <OutlinedInput {...inputFields.email} onChange={onChange} />
          <Button {...inputFields.resetPassword} />
        </form>
      </section>
      <div className="forgot-password_go-to-sign">
        <span>Go back to</span>{" "}
        <Button {...inputFields.signIn} onClick={navigateToSignIn} />
      </div>
      {showDialog && (
        <Dialog
          show={true}
          title={showDialog.title}
          body={() => (
            <ForcedPasswordDialog
              content={showDialog.content}
              emailStatus={emailStatus || showDialog.emailStatus}
            />
          )}
          buttons={showDialog.buttons}
          handleCallback={resendEmailHandler}
        />
      )}
    </Styled>
  );
};

export const ForgotPassword = React.memo(ForgotPasswordComponent);

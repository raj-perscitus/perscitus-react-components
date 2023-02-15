import { Configuration } from "./index";
import { inputFields } from "./data";
import config from "../../../assests/config";
import { Auth } from "aws-amplify";

export const initializeState = (config: Configuration) => {
  return inputFields[config].fields.reduce(
    (acc, data) => ({ ...acc, [data.name]: "" }),
    {}
  );
};

/**
 * Flow: Forgot password -> Change password(CPWC)
 * handleCPWC: It will validate change password with code fields
 */

export interface handlePWCType {
  userInfo: {
    newpassword: string;
    newpasswordagain: string;
    email: string;
    code: string;
  };
}

interface handlePWCResponseType {
  message: string;
  passwordChanged: boolean;
  nextAuth: string;
}

const handlePWCResponse = () => ({
  message: "",
  passwordChanged: false,
  nextAuth: "",
});

export const handleCPWC = async ({
  userInfo,
}: handlePWCType): Promise<handlePWCResponseType> => {
  try {
    const { newpassword, newpasswordagain } = userInfo;

    // if entered passwords not equal will return error message
    if (newpassword !== newpasswordagain)
      return Promise.reject({
        ...handlePWCResponse(),
        message: config.errorMessages.PASS_NOT_MATCHED,
      });
    await Auth.forgotPasswordSubmit(userInfo.email, userInfo.code, newpassword);
    return Promise.resolve({
      ...handlePWCResponse(),
      passwordChanged: true,
      nextAuth: "LOGIN",
    });
  } catch (error: any | { message: string }) {
    return Promise.reject({
      ...handlePWCResponse(),
      message: config.errorMessages.SOMETHING_WRONG,
    });
  }
};

export const FTPSubmitHandler = async ({
  authenticatedUser,
  newpassword,
}: any) => {
  try {
    return Auth.completeNewPassword(
      authenticatedUser.authUserInfo,
      newpassword
    );
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      config.errorMessages.SOMETHING_WRONG;
    return Promise.reject({
      message,
    });
  }
};

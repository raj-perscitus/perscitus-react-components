import { Auth } from "aws-amplify";
import config from "../../../assests/config";
import apiService from "../../../helpers/apiService";
import { getIdCardDetails, getOriginalEmailId } from "../api";
import { errorHandler } from "../api/handlers";
import { SignInReturnType, storeAuthUserDetails } from "../handlers";

const forgotPasswordScenarios = {
  CONFIRMED: "CONFIRMED", // Navigate to change passoword page
  FORCE_CHANGE_PASSWORD: "FORCE_CHANGE_PASSWORD", // Navigate to Reset passoword page
};

const checkRegistrationScenarios = {
  CONFIRMED: "CONFIRMED", // Navigate to change passoword page
  FORCE_CHANGE_PASSWORD: "FORCE_CHANGE_PASSWORD", // Navigate to Reset passoword page
};

export const forgotPasswordHandler = async (data: any) => {
  try {
    const validEmailId = await getOriginalEmailId({
      sessionURL: data.appConfig.sessionURL,
      email: data.userInfo.email,
      brand: data.appConfig.brand,
    });
    return await getUserDetails({
      validEmailId,
      awsConfig: data.awsConfig,
      appConfig: data.appConfig,
    });
  } catch (error: any) {
    const message = errorHandler(error, config.errorMessages.SOMETHING_WRONG);
    return Promise.reject({
      dialog: "noActiveAccount",
      message,
    });
  }
};

export const getUserDetails = async ({
  awsConfig,
  validEmailId,
  appConfig,
}: any) => {
  let forgotPasswordResult = {
    isVerificationSent: false,
    codeToEmail: null,
    dialog: "", // send reset email to user and open popup
    nextAuth: "",
    email: validEmailId,
  };
  try {
    const createRequestURL = appConfig.sessionURL + config.API_URLS.getUser;

    const getUserRequest = {
      cognitoUserPool: awsConfig.aws_user_pools_id,
      username: validEmailId,
    };

    const { data: getUserApiResponse } =
      (await apiService.post({
        URL: createRequestURL,
        brand: appConfig.brand,
        data: getUserRequest,
      })) || {};

    if (!getUserApiResponse)
      return Promise.reject({
        message: config.errorMessages.SOMETHING_WRONG,
        dialog: "noActiveAccount",
      });

    let { userStatus } = getUserApiResponse || {};
    if (userStatus === forgotPasswordScenarios.CONFIRMED) {
      const confirmedResponse = await AuthForgotPassword({ validEmailId });
      forgotPasswordResult = {
        ...forgotPasswordResult,
        ...confirmedResponse,
        nextAuth: ForgotPassNextSteps({ ...confirmedResponse }),
      };
    } else if (userStatus === forgotPasswordScenarios.FORCE_CHANGE_PASSWORD) {
      const resetPassword = await ResetPassword({
        awsConfig,
        validEmailId,
        appConfig,
      });
      forgotPasswordResult = {
        ...forgotPasswordResult,
        ...resetPassword,
      };
    } else {
      forgotPasswordResult = {
        ...forgotPasswordResult,
        dialog: "forcedPassword",
      };
    }
    return Promise.resolve(forgotPasswordResult);
  } catch (error: any) {
    return Promise.reject({
      ...forgotPasswordResult,
      message: errorHandler(error, config.errorMessages.TRY_AGAIN),
    });
  }
};

export const AuthForgotPassword = async ({ validEmailId }: any) => {
  try {
    const { CodeDeliveryDetails } = await Auth.forgotPassword(validEmailId);
    return Promise.resolve({
      isVerificationSent: true,
      codeToEmail: CodeDeliveryDetails.Destination,
    });
  } catch (error: any) {
    return Promise.reject({
      isVerificationSent: false,
      codeToEmail: null,
      message: errorHandler(error, config.errorMessages.TRY_AGAIN),
    });
  }
};

// Used in 2 functions
export const ResetPassword = async ({
  appConfig,
  awsConfig,
  validEmailId,
  email,
}: any) => {
  try {
    const getUserRequest = {
      cognitoUserPool: awsConfig.aws_user_pools_id,
      username: email || validEmailId,
    };
    const resetRequest = {
      URL: appConfig.sessionURL + config.API_URLS.resetuser,
      brand: appConfig.brand,
      data: getUserRequest,
    };
    await apiService.post(resetRequest);
    return Promise.resolve({ dialog: "forcedPassword" });
  } catch (error: any) {
    return Promise.reject({
      dialog: "",
      message: errorHandler(error, config.errorMessages.TRY_AGAIN),
    });
  }
};

export const ForgotPassNextSteps = ({ isVerificationSent }: any) => {
  return isVerificationSent ? "CPWC" : "RP";
};

export const checkRegistrationHander = async ({
  appConfig,
  awsConfig,
  userInfo,
}: any) => {
  let response = {
    dialog: "notFound",
  };

  try {
    const validEmailId = await getOriginalEmailId({
      sessionURL: appConfig.sessionURL,
      email: userInfo.email,
      brand: appConfig.brand,
    });

    const createRequestURL = appConfig.sessionURL + config.API_URLS.getUser;

    const getUserRequest = {
      cognitoUserPool: awsConfig.aws_user_pools_id,
      username: validEmailId,
    };

    const { data: getUserApiResponse } =
      (await apiService.post({
        URL: createRequestURL,
        brand: appConfig.brand,
        data: getUserRequest,
      })) || {};

    if (!getUserApiResponse)
      return Promise.reject({ message: config.errorMessages.SOMETHING_WRONG });

    let { userStatus } = getUserApiResponse || {};

    if (userStatus === checkRegistrationScenarios.CONFIRMED) {
      response = {
        ...response,
        dialog: "Confirmed",
      };
    } else if (
      userStatus === checkRegistrationScenarios.FORCE_CHANGE_PASSWORD
    ) {
      await ResetPassword({ appConfig, awsConfig, validEmailId });
      response = {
        ...response,
        dialog: "forcedPassword",
      };
    } else {
      response = {
        ...response,
        dialog: "notFound",
      };
    }
    return Promise.resolve(response);
  } catch (error: any) {
    return Promise.reject({
      message: errorHandler(error, config.errorMessages.TRY_AGAIN),
      ...response,
    });
  }
};

export const conifrmationSignIn = async ({
  userInfo,
  appConfig,
}: any): Promise<SignInReturnType> => {
  try {
    const { code, email, authUserInfo } = userInfo;
    const userDetails = await getIdCardDetails({
      sessionURL: appConfig.sessionURL,
      email,
      brand: appConfig.brand,
    });

    if (!userDetails)
      return Promise.reject({ message: config.errorMessages.INCORRECT_USER });

    await Auth.confirmSignIn(authUserInfo, code, "SMS_MFA");
    storeAuthUserDetails({ userDetails, authUserInfo });

    return Promise.resolve({
      authUserInfo: authUserInfo.attributes,
      isAuthenticated: true, // saved all user realted info in storage
    });
  } catch (error: any) {
    return Promise.reject({
      message: errorHandler(error, config.errorMessages.SOMETHING_WRONG),
      isAuthenticated: false,
    });
  }
};

export const modifyDialogContent = ({
  dialog,
  dialogContent,
  values,
  props,
}: any) => {
  if (dialog === "notFound") {
    dialogContent.title = `${dialogContent.title} ${values.email}`;
    dialogContent.content =
      dialogContent.content +
      (props.appConfig?.brand === config.netwell
        ? "1(866) 638-9355"
        : "(888) 308 0024");
  }
  if (dialog === "noActiveAccount") {
    dialogContent.title = `${dialogContent.content} ${values.email}`;
  }
  return dialogContent;
};

import { Auth } from "aws-amplify";
import config from "../../assests/config";
import { setLocalStorage } from "../../helpers/storage";
import { getOriginalEmailId, getIdCardDetails, CreateSessionType } from "./api";

export interface SignInAuthType {
  appConfig: CreateSessionType;
  userInfo: { [key: string]: string }; // email: string; password: string
}

export interface SignInReturnType {
  nextAuth?: string;
  authenticatedUser?: { [key: string]: string };
  isAuthenticated?: boolean;
  message?: string;
}

const nextAuth: { [key: string]: string } = {
  SMS_MFA: "OTP",
  SOFTWARE_TOKEN_MFA: "OTP",
  NEW_PASSWORD_REQUIRED: "FTP",
};

export const storeAuthUserDetails = ({
  userDetails,
  authUserInfo: { authUserInfo },
  eMail,
}: any) => {
  const { memberIdCardList } = userDetails;
  memberIdCardList.forEach((data: any) => {
    data?.planInfo?.find(({ idcardField }: any) => {
      return idcardField === "contact number";
    });
  });
  const memberData = memberIdCardList[memberIdCardList.length - 1];
  const contact = memberData?.planInfo?.find(
    ({ idcardField }: any) => idcardField === "contact number"
  );
  [
    { key: "SOURCE", value: memberData?.source },
    { key: "CLIENT_ID", value: memberData?.clientId },
    { key: "sourceid", value: memberIdCardList?.[0].memberId },
    { key: "CONTACT_NUMBER", value: contact?.fieldValue || "NA" },
    { key: "userMail", value: eMail },
    { key: "subscriberName", value: authUserInfo?.attributes?.name },
    { key: "planId", value: memberData?.planId },
    { key: "popupShow", value: "true" },
  ].forEach(({ key, value }) => setLocalStorage(key, value));
};

let authError: string = "";
export const signInAuth = async ({
  appConfig,
  userInfo,
}: SignInAuthType): Promise<SignInReturnType> => {
  authError = "";
  try {
    const emailRequest = {
      sessionURL: appConfig.sessionURL,
      email: userInfo.email,
      brand: appConfig.brand,
    };
    const validEmail = await getOriginalEmailId(emailRequest);
    emailRequest.email = validEmail;

    let authUserInfo = await Auth.signIn({
      username: emailRequest.email,
      password: userInfo.password,
    });
    if (!authUserInfo || authError) {
      return Promise.reject({
        message: authError || config.errorMessages.INCORRECT_USER,
        isAuthenticated: false,
      });
    }
    authUserInfo = {
      challengeName: authUserInfo.challengeName,
      authUserInfo,
    };
    const userDetails = await getIdCardDetails(emailRequest);
    storeAuthUserDetails({
      userDetails,
      authUserInfo,
      eMail: emailRequest.email,
    });
    if (nextAuth[authUserInfo.challengeName]) {
      return Promise.resolve({
        authenticatedUser: authUserInfo,
        nextAuth: nextAuth[authUserInfo.challengeName],
        isAuthenticated: false,
      });
    }

    return Promise.resolve({
      authenticatedUser: authUserInfo.authUserInfo.attributes,
      isAuthenticated: true, // saved all user realted info in storage
    });
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      config.errorMessages.SOMETHING_WRONG;
    authError = message;
    return Promise.reject({
      message,
      isAuthenticated: false,
    });
  }
};

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AuthenticationType, HandleFeatures } from "./interface";
import { Banner } from "./Banner";
import { Login, LoginType, loginHandles } from "./Login";
import {
  ForgotPassword,
  forgotPasswordHandles,
  PasswordType,
} from "./ForgotYourPassword";
import {
  PasswordFlow,
  passwordFlowHandles,
  PasswordFlowType,
} from "./PasswordFlow";
import { createSession, getBearerToken } from "./api";
import { AuthenticationScreens } from "./data";
import { signInAuth } from "./handlers";
import {
  checkRegistrationHander,
  conifrmationSignIn,
  forgotPasswordHandler,
  ResetPassword,
} from "./ForgotYourPassword/hanlders";
import { FTPSubmitHandler, handleCPWC } from "./PasswordFlow/handlers";
import { useCommonLoader } from "../Loader";

const AuthenticationComponent: React.FC<AuthenticationType> = (props) => {
  const [config, setConfig] = useState(props.config);
  const [userInfo, setUserInfo] = useState<{ [key: string]: string | any }>({});
  const [session, setSession] = useState(false);

  const { awsConfig, bannerProps } = props;
  const { setLoading, unSetLoading } = useCommonLoader();

  useEffect(() => {
    setConfig(props.config);
    setSession(getBearerToken());
  }, [props.config]);

  const sessionCreation = useCallback(async () => {
    if (session || getBearerToken()) return Promise.resolve();
    try {
      await createSession(props.appConfig);
      setSession(true);
      return Promise.resolve(session);
    } catch (error) {
      setSession(false);
      return Promise.reject(session);
    }
  }, [props.appConfig, session]);

  const LoginAuth = useCallback(
    async (data: object) => {
      setLoading();
      setUserInfo({ ...userInfo, ...data });
      try {
        // creating session for user
        await sessionCreation();
        // Authentication process
        const authResponse = await signInAuth({
          appConfig: props.appConfig,
          userInfo: { ...userInfo, ...data },
        });
        // Update state with auth user info
        setUserInfo({ ...userInfo, authenticatedUser: authResponse, ...data });
        // Next level Authentication process
        if (authResponse.nextAuth) {
          unSetLoading();
          return setConfig(authResponse.nextAuth as HandleFeatures);
        }
        // Invoking parent callback function once all process is done
        props?.authCallback?.(authResponse);
        // Passing promise to child component to get the result
        unSetLoading();
        return Promise.resolve({ message: "" });
      } catch (error: any) {
        unSetLoading();
        // Invoking parent callback function once all process is done
        // props?.authCallback?.(error);
        // Passing promise to child component to get the result
        return Promise.reject({
          message: error?.message,
          isAuthenticated: false,
        });
      }
    },
    [userInfo, props, sessionCreation]
  );

  const forgotPassword = useCallback(
    async (data: any) => {
      try {
        // creating session for user
        await sessionCreation();
        const forgotPasswordResponse = await forgotPasswordHandler({
          appConfig: props.appConfig,
          awsConfig,
          userInfo: { ...userInfo, ...data },
        });

        setUserInfo((userInfo) => ({
          ...userInfo,
          ...data,
          email: forgotPasswordResponse.email,
        }));

        return Promise.resolve(forgotPasswordResponse);
      } catch (error: any) {
        return Promise.reject(error); // Passing promise to child component to get the result
      }
    },
    [props.appConfig, userInfo, sessionCreation, setUserInfo, awsConfig]
  );

  // Forgot password
  const resendEmail = useCallback(async () => {
    const resetPassResponse = await ResetPassword({
      appConfig: props.appConfig,
      awsConfig,
      email: userInfo.email,
    });
    return resetPassResponse;
  }, [userInfo, props.appConfig, awsConfig]);

  const otpHandler = useCallback(
    async (data: { code: string }) => {
      try {
        const otpResponse = await conifrmationSignIn({
          appConfig: props.appConfig,
          awsConfig,
          userInfo: { ...userInfo, ...data },
        });
        // Invoking parent callback function once all process is done
        return props?.authCallback?.(otpResponse);
      } catch (error: any) {
        // Passing promise to child component to get the result
        return Promise.reject({
          message: error?.message,
          isAuthenticated: false,
        });
      }
    },
    [props.authCallback, userInfo, awsConfig, props.appConfig]
  );

  const authentication = useCallback(
    async (data: any) => {
      switch (config) {
        case AuthenticationScreens.login:
          setUserInfo({ ...userInfo, ...data });
          return LoginAuth(data);

        case AuthenticationScreens.FP:
          setUserInfo({ ...userInfo, ...data });
          // Forgot Password -> Forced change password in respone -> Resend Email Dialog
          if (data.resendEmail) return resendEmail();
          return forgotPassword(data);

        case AuthenticationScreens.CPWC:
          setUserInfo({ ...userInfo, ...data });
          return handleCPWC({ userInfo: { ...userInfo, ...data } });

        case AuthenticationScreens.FTP:
          return FTPSubmitHandler({ ...userInfo, ...data });

        case AuthenticationScreens.CR:
          return checkRegistrationHander({
            appConfig: props.appConfig,
            awsConfig,
            userInfo: { ...userInfo, ...data },
          });

        case AuthenticationScreens.OTP:
          if (data.resend) return LoginAuth({});
          return otpHandler(data);

        default:
          break;
      }
    },
    [
      config,
      LoginAuth,
      forgotPassword,
      userInfo,
      setUserInfo,
      resendEmail,
      otpHandler,
    ]
  );

  const changeConfig = (config: HandleFeatures) => config && setConfig(config);

  const childrenProps = useMemo(
    () => ({
      config,
      authenticationFlow: authentication,
      changeConfig,
      appConfig: props.appConfig,
      userInfo,
    }),
    [config, authentication, props.appConfig, userInfo]
  );

  return (
    <div>
      <Banner {...bannerProps} />
      <section>
        {loginHandles.includes(config) && (
          <Login {...(childrenProps as LoginType)} />
        )}
        {forgotPasswordHandles.includes(config) && (
          <ForgotPassword {...(childrenProps as PasswordType)} />
        )}
        {passwordFlowHandles.includes(config) && (
          <PasswordFlow {...(childrenProps as PasswordFlowType)} />
        )}
      </section>
    </div>
  );
};

export const Authentication = React.memo(AuthenticationComponent);

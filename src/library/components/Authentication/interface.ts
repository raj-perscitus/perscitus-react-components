import { CreateSessionType } from "./api";
import { BannerTypes } from "./Banner";

export interface AxiosErrorType {
  message: string;
}

export interface AuthenticationPropsPass {
  config: string;
  authenticationFlow: (data: object) => Promise<unknown>;
  changeConfig: (config: string) => void;
}

export type HandleFeatures =
  | "LOGIN"
  | "forgot-password"
  | "check-registration"
  | "OTP"
  | "FTP"
  | "CPWC"
  | "CP"
  | "RP";

export interface AuthenticationType {
  config: HandleFeatures;
  authCallback?: (data: any) => void;
  bannerProps: BannerTypes;
  appConfig: CreateSessionType;
  awsConfig: object;
}

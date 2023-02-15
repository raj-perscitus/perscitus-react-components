import config from "../../../assests/config";
import { CustomButtonProps } from "../../Button";

export interface Welcome10 {
  heading: Heading;
  fields: Welcome3[];
  submit: Submit[];
}

export interface Welcome3 {
  buttonProps?: Submit;
  placeholder: string;
  id: string;
  required: boolean;
  name: string;
  className: string;
  type: string;
  autoComplete: string;
}

export interface Heading {
  title: string;
  description: string;
}

export interface Submit extends CustomButtonProps {
  text?: string;
  className: string;
  type?: string;
}

const OTP = [
  {
    placeholder: "ENTER CODE",
    id: "OTP_code",
    required: true,
    name: "code",
    className: "code",
    type: "text",
    autoComplete: "off",
    buttonProps: {
      text: "Didn't receive?",
      label: config.labels.Resend_Code,
      size: "small",
      variant: "text",
    },
  },
] as Welcome3[];

const FTP = [
  {
    placeholder: "ENTER NEW PASSWORD",
    id: "FTP_New-Password",
    required: true,
    name: "newpassword",
    className: "new-Password",
    type: "password",
    autoComplete: "off",
  },
  {
    placeholder: "ENTER NEW PASSWORD",
    id: "FTP_New-Password-again",
    required: true,
    name: "newpasswordagain",
    className: "new-Password-again",
    type: "password",
    autoComplete: "off",
  },
];
// Forgot password -> Change Password
const CPWC = [
  {
    placeholder: "ENTER CODE",
    id: "CP_code",
    required: true,
    name: "code",
    type: "text",
    className: "code",
    autoComplete: "off",
  },
  {
    placeholder: "ENTER NEW PASSWORD",
    id: "FTP_New-Password",
    required: true,
    name: "newpassword",
    type: "password",
    autoComplete: "off",
    className: "new-Password",
  },
  {
    placeholder: "ENTER NEW PASSWORD AGAIN",
    id: "FTP_New-Password-again",
    required: true,
    name: "newpasswordagain",
    type: "password",
    autoComplete: "off",
    className: "new-Password-again",
  },
];

const CP = [
  {
    placeholder: "ENTER NEW PASSWORD",
    id: "CP_New-Password",
    required: true,
    name: "newpassword",
    type: "password",
    autoComplete: "off",
    className: "new-Password",
  },
  {
    placeholder: "ENTER NEW PASSWORD AGAIN",
    id: "CP_New-Password-again",
    required: true,
    name: "newpasswordagain",
    type: "password",
    autoComplete: "off",
    className: "new-Password-again",
  },
];

const RP = [
  {
    placeholder: "ENTER CODE",
    id: "RP_code",
    required: true,
    name: "code",
    type: "text",
    className: "code",
    autoComplete: "off",
  },
  {
    placeholder: "ENTER NEW PASSWORD",
    id: "RP_New-Password",
    required: true,
    name: "newpassword",
    type: "password",
    autoComplete: "off",
    className: "new-Password",
  },
  {
    placeholder: "ENTER NEW PASSWORD AGAIN",
    id: "RP_New-Password-again",
    required: true,
    name: "newpasswordagain",
    type: "password",
    autoComplete: "off",
    className: "new-Password-again",
  },
];

export const inputFields: { [key: string]: Welcome10 } = {
  OTP: {
    heading: {
      title: "",
      description:
        "We have delivered the authentication code by SMS to +*****6789. Please enter the code to complete authentication.",
    },
    fields: OTP,
    submit: [
      {
        label: "Sign In",
        size: "large",
        variant: "contained",
        className: "OTP_sign_in",
        text: "",
      },
    ],
  },
  FTP: {
    heading: {
      title: "Change Password",
      description: "Please enter your new password below.",
    },
    fields: FTP,
    submit: [
      {
        label: "Send",
        size: "large",
        variant: "contained",
        type: "submit",
        className: "FTP_sign_in",
      },
    ],
  },
  CPWC: {
    heading: {
      title: "",
      description:
        "We have sent a password reset code by email. Enter it below to reset your password.",
    },
    fields: CPWC,
    submit: [
      {
        label: "CHANGE PASSWORD",
        size: "large",
        variant: "contained",
        type: "submit",
        className: "CPWC_sign_in",
      },
    ],
  },
  CP: {
    heading: {
      title: "Change Password",
      description: "Please enter your new password below.",
    },
    fields: CP,
    submit: [
      {
        label: "Send",
        size: "large",
        variant: "contained",
        type: "button",
        className: "CP_sign_in",
      },
    ],
  },
  RP: {
    heading: {
      title: "Reset Password",
      description:
        "We have sent a password reset code by email. Enter it below to reset your password.",
    },
    fields: RP,
    submit: [
      {
        label: "Reset PASSWORD",
        size: "large",
        variant: "contained",
        type: "button",
        className: "RP_reset-password",
      },
    ],
  },
};

export const initialState = {
  code: "",
  password: "",
  reEnterpassword: "",
};

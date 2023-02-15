import config from "../../../assests/config";
import { CustomButtonProps } from "../../Button";

const ForgotInputFields = {
  email: {
    placeholder: "ENTER YOUR EMAIL",
    id: "forgot-password_user-email",
    required: true,
    name: "email",
    type: "email",
    // pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$",
    autoComplete: "off",
  },
  resetPassword: {
    label: "RESET MY PASSWORD",
    size: "large",
    variant: "contained",
    type: "submit",
    className: "reset-password",
  } as CustomButtonProps,
};

const CheckRegInputFields = {
  email: {
    placeholder: "ENTER YOUR EMAIL",
    id: "forgot-password_user-email",
    required: true,
    name: "email",
    type: "email",
    autoComplete: "off",
  },
  resetPassword: {
    label: "CHECK REGISTRATION",
    size: "large",
    variant: "contained",
    type: "submit",
    className: "reset-password",
  } as CustomButtonProps,
};

export const getInputFields = (config: string) => {
  const isForgortPassword = config === "forgot-password";
  return {
    ...(isForgortPassword ? ForgotInputFields : CheckRegInputFields),
    signIn: {
      label: "Sign In",
      size: "small",
      variant: "text",
      type: "submit",
      className: "sign-in_password",
    } as CustomButtonProps,
    info: {
      title: isForgortPassword
        ? "Forgot your password?"
        : "Having trouble logging in",
      description: isForgortPassword
        ? "Enter your Email and we will send a <br /> message to reset your password."
        : "Let’s check if your email has <br /> been registered on the portal.",
    },
  };
};

export const initialState = {
  email: "",
};

export const dialogDetails = {
  forcedPassword: {
    title: "",
    content: config.headings.TEMP_PASS,
    buttons: [
      {
        label: config.headings.RESEND_EMAIL,
        size: "large",
        variant: "text",
        type: "button",
        className: "resend-email",
      } as CustomButtonProps,
      {
        label: "Close",
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
    ],
  },
  noActiveAccount: {
    title: "",
    content: `${config.headings.NO_ACTIVE_ACCOUNT}`,
    buttons: [
      {
        label: "Close",
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
    ],
  },
  Confirmed: {
    title: config.headings.ALL_SET,
    content: config.headings.REMEMBER_PASSWORD,
    buttons: [
      {
        label: config.headings.GO_TO_SIGNIN,
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
      {
        label: config.sections.FORGOT_YOUR_PASSWORD,
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
      {
        label: "Close",
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
    ],
  },
  notFound: {
    title: config.headings.NO_ACTIVE_ACCOUNT,
    content: config.headings.ACCOUNT_ACTIVATION,
    buttons: [
      {
        label: config.headings.GO_TO_SIGNIN,
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
      {
        label: "Close",
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
    ],
  },
  emailSentSuccesfully: {
    title: "",
    content: "",
    buttons: [
      {
        label: config.headings.GO_TO_SIGNIN,
        size: "large",
        variant: "text",
        type: "button",
        className: "Close",
      } as CustomButtonProps,
    ],
  },
};

export const forceChangePasswordBtns = [
  {
    label: "Resend Email",
    size: "large",
    variant: "text",
    type: "button",
    className: "resend-email",
  } as CustomButtonProps,
  {
    label: "Close",
    size: "large",
    variant: "text",
    type: "button",
    className: "Close",
  } as CustomButtonProps,
];

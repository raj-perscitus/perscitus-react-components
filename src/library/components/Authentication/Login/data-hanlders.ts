import { CustomButtonProps } from "../../Button";

export const inputFields = {
  email: {
    placeholder: "ENTER YOUR EMAIL",
    id: "login_user-email",
    required: true,
    name: "email",
    type: "email",
    autoComplete: "off",
    value: "",
  } as any,
  password: {
    placeholder: "ENTER YOUR PASSWORD",
    id: "login_user-password",
    required: true,
    name: "password",
    type: "password",
    autoComplete: "off",
    value: "",
  },
  signIn: {
    label: "SIGN IN",
    size: "large",
    variant: "contained",
    type: "submit",
    className: "sign-in",
  } as CustomButtonProps,
  forgotPassword: {
    label: "Forgot your password?",
    size: "large",
    variant: "text",
    disabled: false,
    disableRipple: false,
    onClick: () => {},
    className: "forgot-password",
  } as CustomButtonProps,
  checkRegistration: {
    label: "Please check",
    size: "small",
    variant: "text",
    disableRipple: true,
    className: "login_please-check",
  } as CustomButtonProps,
};

export const initialState = {
  email: "",
  password: "",
};

export const getQueryParams = (url = window.location.href) => {
  const queryString = url?.split("login?");

  if (!(queryString?.length > 1 && queryString[1].length)) return [];

  const queryParams = new URLSearchParams(queryString[1]);

  if (!(queryParams.has("u") && queryParams.has("p"))) return [];

  const email = decodeURI(queryParams.get("u") || "");
  const password = decodeURI(queryParams.get("p") || "");
  return [
    {
      target: {
        name: "email",
        value: email,
      },
    },
    {
      target: {
        name: "password",
        value: password,
      },
    },
  ];
};

export const basicLoginFormValidation = (values: { [key: string]: string }) => {
  const hasMinLengthValues: Array<string> = Object.values(values);
  return Boolean(hasMinLengthValues.find((data: string) => data.length < 3));
};

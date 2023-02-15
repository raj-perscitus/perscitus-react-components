interface Check {
  message: string;
  test: RegExp;
  valid: boolean;
}

const requirements: Check[] = [
  {
    message: "an upper case letter",
    test: /[A-Z]/,
    valid: false,
  },
  {
    message: "a lower case letter",
    test: /[a-z]/,
    valid: false,
  },
  {
    message: "a special character",
    test: /[^A-Za-z0-9]/,
    valid: false,
  },
  {
    message: "a number",
    test: new RegExp(/\d+/g),
    valid: false,
  },
];

export const passwordCheck = (value: string): Array<Check> => {
  let checks = requirements.map((validation) => {
    let valid = new RegExp(validation.test).test(value);
    return {
      ...validation,
      valid,
    };
  });
  checks.push({
    message: "at least 8 characters",
    test: /[A-Za-z]/,
    valid: value.length > 7,
  });
  return checks;
};

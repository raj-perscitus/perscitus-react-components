const config: { [key: string]: string | object | any } = Object.freeze({
  netwell: "netwell",
  bearerToken: "bearerToken",
  API_URLS: {
    session: "v1/login",
    verifyEmail: "v1/memberportal/verifyemail/",
    userInfo: "v2/memberportal/idcard/",
    getUser: "v1/memberportal/getuser",
    resetuser: "v1/memberportal/resetuser",
    NETWELL_MYNEEDS_PROD: "https://jc08o9dt14.execute-api.us-east-2.amazonaws.com/v0",
    NETWELL_MYNEEDS_DEV: "https://jc08o9dt14.execute-api.us-east-2.amazonaws.com/v0",
    UHF_MYNEEDS_PROD: "https://apiMYNEEDS.carynhealth.com/",
    UHF_MYNEEDS_DEV: "https://jc08o9dt14.execute-api.us-east-2.amazonaws.com/test/",
    NETWELL_MYNEEDS_EOS_GET_TOKEN: process.env.REACT_APP_NETWELL_MYNEEDS_EOS_URL_GET_TOKEN || "https://prodnetwell.auth.us-east-2.amazoncognito.com/oauth2/token?grant_type=client_credentials&client_id=7s7nub5kqc537lojb7v3p6pcib&scope=apiauthidentifier/member.read",
    NETWELL_MYNEEDS_EOS_GET_DATA: process.env.REACT_APP_NETWELL_MYNEEDS_EOS_URL_GET_LIST || "https://klazjadjh1.execute-api.us-east-2.amazonaws.com/v0/member-report?report-type=myNeeds&uuid=",
    NETWELL_MY_REIMBURSEMENT_DEV: process.env.REACT_APP_REIMBURSEMENT_PROD || "https://dev.fabric.carynhealth.com/api/v17/",
    NETWELL_MY_REIMBURSEMENT_PROD: process.env.REACT_APP_REIMBURSEMENT_DEV || "https://testfabric.carynhealth.com/api/v17/"
  },
  errorMessages: {
    NETWORK_ERROR: "Network Error",
    INCORRECT_USER: "Not a valid user information",
    SOMETHING_WRONG: "Something went wrong",
    TRY_AGAIN: "Please try again!",
    PASS_NOT_MATCHED: "Please enter same password",
    CODE_NOT_VALID: "The code entered is invalid, please try again.",
    PROVIDE_VALID_VALUES: "Please provide valid details",
  },
  headings: {
    TEMP_PASS:
      "Great news! We found your registration! We have sent a next step email with your temporary password to your email address.",
    EMAIL_SENT: "Email sent succesfully.",
    NO_ACTIVE_ACCOUNT: "Sorry! We could not find an active registration for",
    REMEMBER_PASSWORD:
      "If you can’t remember your password, you can reset it by clicking the “Forgot your password?”",
    ACCOUNT_ACTIVATION:
      "If it’s been more than one business day since you signed up, please contact our Account Activation line: ",
    ALL_SET: "You are all set! ",
    GO_TO_SIGNIN: "Go to Sign In",
    RESEND_EMAIL: "Resend Email",
    DELIVER_CODE:
      "We have delivered the authentication code by SMS to registered mail. Please enter the code to complete authentication.",
  },
  sections: {
    FORGOT_YOUR_PASSWORD: "Forgot your password",
  },
  labels: {
    Resend_Code: "Resend Code",
  },
  text: {
    HELLO: "Hello,",
  },
  credentials: {
    getEmployeeIdApi: { // Same credentials using for UHF- /user/shareplus/login
      prod: {
        username:  process.env.REACT_APP_GET_EMPLOYEE_ID_PROD_USERNAME || 'regulator',
        password: process.env.REACT_APP_GET_EMPLOYEE_ID_PROD_PASSWORD || '##Infyadmin1',
        xApiKey: process.env.REACT_APP_GET_EMPLOYEE_ID_PROD_XAPIKEY || "lIIwjqkmZF3V5T2Mk8qYG3aUStltuWQAaPkpq9JL"
      },
      dev: {
        username:  process.env.REACT_APP_GET_EMPLOYEE_ID_DEV_USERNAME || 'admin',
        password: process.env.REACT_APP_GET_EMPLOYEE_ID_DEV_PASSWORD || '##Infyadmin1',
        xApiKey: process.env.REACT_APP_GET_EMPLOYEE_ID_DEV_XAPIKEY || "v0czWdfD762x5smnLY72g2eZcwWt5QLLaOn5sKAs"
      }
      },
    NETWELL_myNeedsEOS: {
        username: process.env.REACT_APP_NETWELL_MYNEEDS_EOS_PROD_USERNAME || "7s7nub5kqc537lojb7v3p6pcib",
        password: process.env.REACT_APP_NETWELL_MYNEEDS_EOS_PROD_PASSWORD || "1539f1301c4cji9cppagdeo3a1qgnqfmt14ocu6gqsturnf94rd4"
    },
    }
});

export default config;

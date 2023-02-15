import axios from "axios";
import * as StorageHelpers from "../../helpers/storage";
import config from "../../assests/config";

interface EmployeeRequest {
  mode: string;
  appConfig: any;
}

const getEmployeeIdToken = async ({ appConfig, mode }: EmployeeRequest) => {
  try {
    console.clear();
    const requestURL =
      config.API_URLS[
        `${appConfig.brand.toUpperCase()}_MYNEEDS_${mode.toUpperCase()}`
      ] + "/login/";
    const data = config.credentials.getEmployeeIdApi[mode];
    const requestData = {
      username: data.username,
      password: data.password,
    };

    const { data: tokenResponse } =
      (await axios.post(requestURL, requestData, {
        headers: {
          "Content-type": "application/json",
          "x-api-key": data.xApiKey,
        },
      })) || {};
    return tokenResponse.data.id_token;
  } catch (error) {
    console.log("getEmployeeIdToken ERROR: ", error);
    return error;
  }
};

export const getEmployeeId = async ({ appConfig, mode }: EmployeeRequest) => {
  try {
    const token = await getEmployeeIdToken({ appConfig, mode });
    const requestURL =
      config.API_URLS[
        `${appConfig.brand.toUpperCase()}_MYNEEDS_${mode.toUpperCase()}`
      ];
    const data = config.credentials.getEmployeeIdApi[mode];
    const requestData = {
      URL:
        requestURL +
        "/member-report?report-type=getEmpi&email=" + StorageHelpers.getLocalStorage("userMail"),
      headers: {
        "x-api-key": data.xApiKey,
        token,
      },
    };
    const { data: getEmployeeIdResponse } =
      (await axios.get(requestData.URL, {
        headers: {
          "Content-type": "application/json",
          "x-api-key": data.xApiKey,
          token: token,
        },
      })) || {};
    StorageHelpers.setLocalStorage("EMPID", getEmployeeIdResponse?.[0].empi || "");
    return getEmployeeIdResponse;
  } catch (error) {
    console.log("getEmployeeId ERROR: ", error);
    return error;
  }
};

export const getMyneedsEOSForNetwell = async ({
  appConfig,
  mode,
}: EmployeeRequest) => {
  try {
    let requestData = {
      // Default for NETWELL
      username: config.credentials.NETWELL_myNeedsEOS.username,
      password: config.credentials.NETWELL_myNeedsEOS.password,
    };

    if (appConfig.brand !== config.netwell) {
      const data = config.credentials.getEmployeeIdApi[mode];
      requestData = {
        username: data.username,
        password: data.password,
      };
    }
    const { data: netwellMyNeedsEosResponse } = await axios.post(
      config.API_URLS.NETWELL_MYNEEDS_EOS_GET_TOKEN,
      {},
      {
        auth: requestData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    // 2nd API
    const myNeedsDataForEmployeeURL =
      "https://klazjadjh1.execute-api.us-east-2.amazonaws.com/v0/member-report?report-type=myNeeds&uuid=" +
      (localStorage.getItem("Member_EMPID") || "444228937");
    const { data: netwellMyNeedsEosEmployeeResponse } = await axios.get(
      myNeedsDataForEmployeeURL,
      {
        headers: {
          "x-api-key": "fylhvz5mOP1FroRvrVkiz1Q8YzW5KTmYaR8mf2Sv",
          token: netwellMyNeedsEosResponse.access_token,
        },
      }
    );
    return netwellMyNeedsEosEmployeeResponse;
  } catch (error) {
    return error;
  }
};

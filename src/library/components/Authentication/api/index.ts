import apiService from "../../../helpers/apiService";
import configVariables from "../../../assests/config";
import { getLocalStorage, setLocalStorage } from "../../../helpers/storage";

export interface CreateSessionType {
  sessionURL: string;
  tokenUserName: string;
  tokenUserPassword: string;
  brand: string;
}

export const getBearerToken = () =>
  Boolean(getLocalStorage(configVariables.bearerToken));

export const createSession = async (config: CreateSessionType) => {
  try {
    let request = {
      username: config.tokenUserName,
      password: config.tokenUserPassword,
    };
    const data = await apiService.post({
      URL: config.sessionURL + configVariables.API_URLS.session,
      brand: config.brand,
      disableConfig: true,
      data: request,
    });
    let bearer = data["headers"].authorization as string;
    var array = bearer.split("Bearer ");
    setLocalStorage(configVariables.bearerToken, array[1]);
    return Promise.resolve({});
  } catch (error) {
    return Promise.reject({
      message: configVariables.errorMessages.SOMETHING_WRONG,
    });
  }
};

export const getOriginalEmailId = async (data: {
  sessionURL: string;
  email: string;
  brand: string;
}) => {
  const createRequestURL =
    data.sessionURL + configVariables.API_URLS.verifyEmail + data.email;
  try {
    const response = await apiService.get({
      URL: createRequestURL,
      brand: data.brand,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    throw error;
  }
};

export const getIdCardDetails = async (config: {
  sessionURL: string;
  email: string;
  brand: string;
}) => {
  const createRequestURL =
    config.sessionURL + configVariables.API_URLS.userInfo;
  try {
    const response = await apiService.post({
      URL: createRequestURL,
      data: { email: config.email },
      brand: config.brand,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    return error;
  }
};

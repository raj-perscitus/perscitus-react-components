import axios, { AxiosInstance } from "axios";
import appConfig from "../assests/config";
import { getLocalStorage } from "./storage";
import { Buffer } from "buffer";

interface APIServiceType {
  URL: string;
  brand?: string;
  disableConfig?: boolean;
  data?: object;
  headers?: object;
}

class ApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create();
  }

  get({ URL, disableConfig, brand }: APIServiceType) {
    let _confg: any = this.getConfig({ disableConfig, brand });
    return this.axiosInstance.get(URL, _confg);
  }

  post({ URL, data, disableConfig, brand, headers }: APIServiceType) {
    let _confg: any = this.getConfig({ disableConfig, brand, headers });

    return this.axiosInstance.post(URL, data, _confg);
  }

  private getConfig({
    disableConfig,
    brand,
    headers,
  }: {
    disableConfig: boolean | undefined;
    brand?: string;
    headers?: object;
  }) {
    if (disableConfig) return {};

    let config = {
      headers: {
        ...headers,
      } as { [key: string]: string },
    };

    if (brand?.toLowerCase().includes(appConfig.netwell as string)) {
      // Creating base64 value with netwell name & date
      const bufferParam = `${(
        appConfig.netwell as string
      ).toUpperCase()};${new Date()}`;
      const base64 = Buffer.from(bufferParam).toString("base64");
      config.headers = {
        ...config.headers,
        "X-Tenant-Id": base64,
      };
    }
    config.headers.Authorization = "Bearer " + getLocalStorage("bearerToken");
    return config;
  }
}

export default new ApiService();

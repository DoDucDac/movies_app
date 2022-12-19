import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../../constants";

const instance = (header?: Record<string, string>) => {
  let returnValue = axios.create();

  returnValue.interceptors.request.use(
    async (config) => {
      config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json-patch+json",
      };

      return config;
    },
    (error) => {
      console.log(error);
    }
  );

  returnValue.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  return returnValue;
};

export const apiCall = (
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: Record<string, unknown>,
  header?: Record<string, string>
): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    baseURL: BASE_URL,
  };

  if (method === "GET") {
    config.params = data;
  } else {
    config.data = data;
  }

  return instance(header)(config).then((response: any) => {
    return response.data;
  });
};

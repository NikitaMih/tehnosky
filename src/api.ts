import axios from "axios";

export const domainUrl = 'http://localhost:3001';

export enum Endpoints {
  PARAMETERS = '/parameters',
}

export const api = axios.create({
  baseURL: domainUrl,
});

export const getStringParams = (params: string[] | string | undefined) => {
    if (!params) {
      return '';
    }
    if (Array.isArray(params)) {
      return params.join("&");
    }
    return params;
};

export const combineUrl = (
    endpoint: Endpoints,
    path: (string | number)[] = [],
    params?: string[] | string | undefined,
  ) => {
    let url = `${domainUrl}${endpoint}`;

    if (path.length) {
      url += `${path.join("/")}/`;
    }
  
    const query = getStringParams(params);
    if (query) {
      url += `?${query}`;
    }

    return url;
};
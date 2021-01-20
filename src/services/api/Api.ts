/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from 'axios';
import { IncomingMessage } from 'http';

import { getCookie } from '@src/lib/utils';

const API_HOST =
  process.env.VERCEL_GITHUB_COMMIT_REF === 'staging'
    ? process.env.STAGING_DJANGO_API_HOST
    : process.env.DJANGO_API_HOST;

class RequestConfig {
  public baseURL: string;
  public headers?: any;
  public method?: Method;
  public url?: string;
  public data?: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public setToken(token?: any) {
    if (token) {
      this.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  public get(path: string, config?: AxiosRequestConfig) {
    this.method = 'GET';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public delete(path: string, config?: AxiosRequestConfig) {
    this.method = 'DELETE';
    this.url = this.baseURL + path;

    return { ...config, ...this };
  }

  public post(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'POST';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public put(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PUT';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }

  public patch(path: string, data?: any, config?: AxiosRequestConfig) {
    this.method = 'PATCH';
    this.url = this.baseURL + path;
    this.data = data;

    return { ...config, ...this };
  }
}

export const baseConfig = (auth?: boolean, req?: IncomingMessage) => {
  const requestConfig = new RequestConfig(API_HOST);
  if (auth) {
    requestConfig.setToken(getCookie('accessToken', req));
  }
  return requestConfig;
};

const base = (auth?: boolean) => {
  const requestConfig = new RequestConfig(API_HOST);
  if (auth) {
    requestConfig.setToken(getCookie('accessToken'));
  }
  return axios.create(requestConfig);
};

export default base;

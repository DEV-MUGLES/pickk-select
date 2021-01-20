import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { mutate } from 'swr';

export const prefetchItem = <Data = unknown>(
  config: AxiosRequestConfig
): AxiosPromise<Data> => {
  return axios(config).then((data) => {
    mutate(JSON.stringify(config), data, false);
    return data;
  });
};

export const handleItemPrefetch = <Data = unknown>(
  config: AxiosRequestConfig
) => () => {
  if (!config) {
    return;
  }
  prefetchItem<Data>(config);
};

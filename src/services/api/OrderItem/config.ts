import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

import { ListRequestParams } from '@src/types';
import { IOrderItemExchangeDTO } from '@src/interfaces';

export const readConfig = (id: number) =>
  baseConfig(true).get(`/order_items/${id}/`);

export const listConfig = (params: ListRequestParams, req?: IncomingMessage) =>
  baseConfig(true, req).get('/order_items/', { params });

export const exchangeConfig = (
  id: number,
  params: IOrderItemExchangeDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post(`/order_items/${id}/exchange/`, params);

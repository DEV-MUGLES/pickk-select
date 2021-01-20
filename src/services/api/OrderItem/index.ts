import axios from 'axios';
import { IncomingMessage } from 'http';

import { IOrderItem, IOrderItemExchangeDTO } from '@src/interfaces';
import { ListResponse, ListRequestParams } from '@src/types';
import { exchangeConfig, listConfig, readConfig } from './config';

const read = async (id: number): Promise<void> =>
  axios(readConfig(id)).then((res) => res.data);

const list = async (
  params: ListRequestParams,
  req?: IncomingMessage
): Promise<ListResponse<IOrderItem>> =>
  axios(listConfig(params, req)).then((res) => {
    return res.data;
  });

const exchange = async (
  id: number,
  params: IOrderItemExchangeDTO
): Promise<void> => axios(exchangeConfig(id, params)).then((res) => res.data);

const OrderItemService = {
  read,
  list,
  exchange,
};

export default OrderItemService;

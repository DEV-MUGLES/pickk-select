import base from './Api';
import { IOrderItem } from '@src/interfaces';
import { OrderItemList, ExchangePolicy } from '@src/types';

const getList = async (): Promise<OrderItemList> =>
  base(true)
    .get('/order_items/')
    .then((res) => res.data)
    .catch((err) => console.log(err.response));

const read = async (id: number): Promise<IOrderItem> =>
  base(true)
    .get(`/order_items/${id}/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

const getExchangePolicy = (id: number): Promise<ExchangePolicy> =>
  base(true)
    .get(`/order_items/${id}/exchange_policy/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

const getDelivery = (id: number) =>
  base(true)
    .get(`/order_items/${id}/delivery/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

const confirm = (id: number) =>
  base(true)
    .post(`/order_items/${id}/confirm/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

const getPackage = (id: number) =>
  base(true)
    .get(`/order_items/${id}/package/`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

const OrderItemService = {
  getList,
  read,
  getExchangePolicy,
  getDelivery,
  confirm,
  getPackage,
};

export default OrderItemService;

import useRequest from '../swr/useRequest';

import useAxiosQuery from './Api';
import OrderItemService from '@src/services/api/OrderItem';
import { IOrderItem } from '@src/interfaces';
import {
  ExchangePolicy,
  OrderBrand,
  AxiosQueryResponse,
  OrderState,
} from '@src/types';
import { useState, useEffect } from 'react';
import { readConfig } from '@src/services/api/OrderItem/config';

export const useOrderItem = (id: number) =>
  useRequest<IOrderItem>(readConfig(id));

export const useExchangePolicy = useAxiosQuery<ExchangePolicy>(
  OrderItemService.getExchangePolicy
);

export const useOrderItemPackage = useAxiosQuery<OrderBrand>(
  OrderItemService.getPackage
);

export const useOrderRefund = (id: number): AxiosQueryResponse<OrderBrand> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<OrderBrand>(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const data: OrderBrand = await OrderItemService.getPackage(id);
        setData({
          ...data,
          orderItems: data.orderItems.filter(
            (item) =>
              item.claimStatus === null &&
              item.status !== OrderState.PurchaseConfirmed
          ),
        });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { loading, error, data };
};

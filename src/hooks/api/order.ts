import { useState, useEffect } from 'react';

import OrderService from '@src/services/api/Order';
import { AxiosQueryResponse, OrderResponse, OrderState } from '@src/types';

export const useOrder = (id: number): AxiosQueryResponse<OrderResponse> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<OrderResponse>(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const data = await OrderService.read(id);
        setData(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { loading, error, data };
};

export const useOrderCancel = (
  id: number
): AxiosQueryResponse<OrderResponse> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<OrderResponse>(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const data: OrderResponse = await OrderService.read(id);
        const newOrder = data.order
          .filter(
            (brand) =>
              brand.orderItems.filter(
                (item) =>
                  item.status === OrderState.PaymentFinished ||
                  item.status === OrderState.Pending
              ).length !== 0
          )
          .map((brand) => {
            return {
              ...brand,
              orderItems: brand.orderItems.filter(
                (item) =>
                  item.status === OrderState.PaymentFinished ||
                  item.status === OrderState.Pending
              ),
            };
          });
        setData({ ...data, order: newOrder });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { loading, error, data };
};

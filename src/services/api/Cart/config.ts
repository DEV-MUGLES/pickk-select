import { baseConfig } from '../Api';
import { StoreProduct } from '@src/types';

export const initiateConfig = (items: StoreProduct[]) => {
  return baseConfig().post(`/cart/`, { items });
};

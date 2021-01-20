import { baseConfig } from '../Api';
import { ItemTagListRequestParams } from '@src/types';

export const listConfig = (params: ItemTagListRequestParams) =>
  baseConfig().get(`/item_tags/`, { params });

export const readConfig = (id: number) => baseConfig().get(`/item_tags/${id}/`);

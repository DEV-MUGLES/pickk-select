import { baseConfig } from '../Api';
import { ItemTypeListRequestParams } from '@src/types';

export const finalsListConfig = (params: ItemTypeListRequestParams) =>
  baseConfig().get('/item_types/finals/', { params });

export const finalsReadConfig = (id: number) =>
  baseConfig().get(`/item_types/finals/${id}/`);

export const majorsListConfig = (params: ItemTypeListRequestParams) =>
  baseConfig().get('/item_types/majors/', { params });

export const majorsReadConfig = (id: number) =>
  baseConfig().get(`/item_types/majors/${id}/`);

export const minorsListConfig = (params: ItemTypeListRequestParams) =>
  baseConfig().get('/item_types/minors/', { params });

export const minorsReadConfig = (id: number) =>
  baseConfig().get(`/item_types/minors/${id}/`);

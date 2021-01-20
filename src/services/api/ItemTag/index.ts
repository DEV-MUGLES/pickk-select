import axios from 'axios';
import { listConfig, readConfig } from './config';
import { ItemTag, ItemTagListRequestParams, ListResponse } from '@src/types';

export const list = async (
  params: ItemTagListRequestParams
): Promise<ListResponse<ItemTag>> =>
  axios(listConfig(params)).then((res) => res.data);

export const read = async (id: number): Promise<ItemTag> =>
  axios(readConfig(id)).then((res) => res.data);

const ItemTagService = {
  list,
  read,
};

export default ItemTagService;

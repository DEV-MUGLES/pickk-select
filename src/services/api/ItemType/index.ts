import axios from 'axios';

import {
  finalsListConfig,
  finalsReadConfig,
  minorsListConfig,
  minorsReadConfig,
  majorsListConfig,
  majorsReadConfig,
} from './config';
import {
  ListResponse,
  ItemFinalTypes,
  ItemMinorTypes,
  ItemMajorTypes,
  ItemTypeListRequestParams,
} from '@src/types';

export const finalsList = async (
  params: ItemTypeListRequestParams
): Promise<ListResponse<ItemFinalTypes>> =>
  axios(finalsListConfig(params)).then((res) => res.data);

export const finalsRead = async (id: number): Promise<ItemFinalTypes> =>
  axios(finalsReadConfig(id)).then((res) => res.data);

export const minorsList = async (
  params: ItemTypeListRequestParams
): Promise<ListResponse<ItemMinorTypes>> =>
  axios(minorsListConfig(params)).then((res) => res.data);

export const minorsRead = async (id: number): Promise<ItemMinorTypes> =>
  axios(minorsReadConfig(id)).then((res) => res.data);

export const majorsList = async (
  params: ItemTypeListRequestParams
): Promise<ListResponse<ItemMajorTypes>> =>
  axios(majorsListConfig(params)).then((res) => res.data);

export const majorsRead = async (id: number): Promise<ItemMajorTypes> =>
  axios(majorsReadConfig(id)).then((res) => res.data);

const ItemTypeService = {
  finalsList,
  finalsRead,
  minorsList,
  minorsRead,
  majorsList,
  majorsRead,
};

export default ItemTypeService;

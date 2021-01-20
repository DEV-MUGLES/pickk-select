import axios from 'axios';
import { listConfig } from './config';
import { ListRequestParams, ListResponse, StyleTag } from '@src/types';

export const list = async (
  params: ListRequestParams
): Promise<ListResponse<StyleTag>> =>
  axios(listConfig(params)).then((res) => res.data);

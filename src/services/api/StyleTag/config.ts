import { baseConfig } from '../Api';
import { ListRequestParams } from '@src/types';

export const listConfig = (params: ListRequestParams) =>
  baseConfig().get(`/style_tags/`, { params });

import useRequest from '../swr/useRequest';

import { ItemTag, ItemTagListRequestParams, ListResponse } from '@src/types';
import { listConfig } from '@src/services/api/ItemTag/config';

export const useItemTagList = (
  params?: ItemTagListRequestParams,
  initialData?: any
) =>
  useRequest<ListResponse<ItemTag>>(listConfig(params), {
    initialData,
  });

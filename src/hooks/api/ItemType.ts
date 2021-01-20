import {
  ListResponse,
  ItemTypeListRequestParams,
  ItemMajorTypes,
} from '@src/types';

import useRequest from '../swr/useRequest';
import { majorsListConfig } from '@src/services/api/ItemType/config';

// legacy end

export const useItemMajorTypeList = (
  params: ItemTypeListRequestParams,
  initialData?: any
) =>
  useRequest<ListResponse<ItemMajorTypes>>(majorsListConfig(params), {
    initialData,
  });

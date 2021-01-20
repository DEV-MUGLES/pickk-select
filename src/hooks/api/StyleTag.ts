import useRequest from '../swr/useRequest';

import { ListRequestParams, ListResponse, StyleTag } from '@src/types';
import { listConfig } from '@src/services/api/StyleTag/config';

export const useStyleTagList = (
  params?: ListRequestParams,
  initialData?: any
) =>
  useRequest<ListResponse<StyleTag>>(listConfig(params), {
    initialData,
  });

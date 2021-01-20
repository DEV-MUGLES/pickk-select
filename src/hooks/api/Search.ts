import useRequest from '../swr/useRequest';

import { IItem, ILook, IPost } from '@src/interfaces';
import {
  itemsConfig,
  postsConfig,
  looksConfig,
} from '@src/services/api/Search/config';
import { ListRequestParams, ListResponse } from '@src/types';

export const useSearchItems = (
  params: ListRequestParams & {
    q?: string;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any
) => useRequest<ListResponse<IItem>>(itemsConfig(params), { initialData });

export const useSearchPosts = (
  params: ListRequestParams & {
    q?: string;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any
) => useRequest<ListResponse<IPost>>(postsConfig(params), { initialData });

export const useSearchLooks = (
  params: ListRequestParams & {
    q?: string;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any
) => useRequest<ListResponse<ILook>>(looksConfig(params), { initialData });

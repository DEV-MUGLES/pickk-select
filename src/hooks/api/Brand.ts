import useRequest from '../swr/useRequest';

import {
  readConfig,
  isFollowingConfig,
  listConfig,
  namesConfig,
} from '@src/services/api/Brand/config';

import { IBrand, IBrandNameDTO } from '@src/interfaces';
import { ListRequestParams, ListResponse } from '@src/types';

export const useBrandList = (
  params: ListRequestParams & {
    followed_by?: number;
    o?: 'favorite';
    isPartner?: boolean;
  },
  initialData?: any
) => useRequest<ListResponse<IBrand>>(listConfig(params), { initialData });

export const useBrand = (id: number, initialData?: any) =>
  useRequest<IBrand>(readConfig(id), { initialData });

export const useBrandIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ followersCount: number; isFollowing: boolean }>(
    isFollowingConfig(id),
    { initialData }
  );

export const useBrandNames = (initialData?: any) =>
  useRequest<IBrandNameDTO[]>(namesConfig(), { initialData });

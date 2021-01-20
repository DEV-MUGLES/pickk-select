import useRequest from '../swr/useRequest';
import { ILook } from '@src/interfaces';
import {
  readConfig,
  isFollowingConfig,
  listConfig,
  isBookmarkingConfig,
} from '@src/services/api/Look/config';
import { ListRequestParams, ListResponse } from '@src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLook = (id: number, initialData?: any) =>
  useRequest<ILook>(readConfig(id), { initialData });

export const useLookList = (
  params: ListRequestParams & {
    userId?: number;
    styleTagIds?: number[];
    o?: 'popular';
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any
) => useRequest<ListResponse<ILook>>(listConfig(params), { initialData });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLookIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ followersCount: number; isFollowing: boolean }>(
    isFollowingConfig(id),
    { initialData }
  );

export const useLookIsBookmarking = (id: number, initialData?: any) =>
  useRequest<{ bookmarksCount: number; isBookmarking: boolean }>(
    isBookmarkingConfig(id),
    { initialData }
  );

import useRequest from '../swr/useRequest';
import { IPost } from '@src/interfaces';
import {
  readConfig,
  isFollowingConfig,
  listConfig,
  recommendationPostsListConfig,
  isBookmarkingConfig,
} from '@src/services/api/Post/config';
import {
  ListRequestParams,
  ListResponse,
  RecommendationPosts,
} from '@src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePost = (id: number, initialData?: any) =>
  !id ? null : useRequest<IPost>(readConfig(id), { initialData });

export const usePostList = (
  params: ListRequestParams & {
    userId?: number;
    o?: 'popular';
    itemMinorTypeIds?: number[];
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any
) => useRequest<ListResponse<IPost>>(listConfig(params), { initialData });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePostIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ followersCount: number; isFollowing: boolean }>(
    isFollowingConfig(id),
    { initialData }
  );

export const usePostIsBookmarking = (id: number, initialData?: any) =>
  useRequest<{ bookmarksCount: number; isBookmarking: boolean }>(
    isBookmarkingConfig(id),
    { initialData }
  );

export const usePostCount = (
  params: ListRequestParams & { userId?: number; o?: 'popular' }
) => useRequest<ListResponse<IPost>>(listConfig(params));

export const useRecommendationPostsList = () =>
  useRequest<RecommendationPosts[]>(recommendationPostsListConfig());

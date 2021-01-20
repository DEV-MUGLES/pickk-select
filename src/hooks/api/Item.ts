import {
  ItemOption,
  ListResponse,
  ListRequestParams,
  ItemDiscountsInfo,
  ItemListRequestParams,
  ItemMatchingsRequestParams,
  ItemPricesRequestParams,
  RecommendationItems,
  ItemPackage,
} from '@src/types';
import { IItem, IItemSize, ILook, IPost } from '@src/interfaces';

import useRequest from '../swr/useRequest';
import {
  isFollowingConfig,
  optionsConfig,
  listConfig,
  looksConfig,
  postsConfig,
  readConfig,
  matchingsConfig,
  pricesConfig,
  discountsConfig,
  reviewsConfig,
  recommendationItemsListConfig,
  itemPackageConfig,
} from '@src/services/api/Item/config';
import { readConfig as sizeReadConfig } from '@src/services/api/ItemSize/config';

export const useItem = (id, initialData?) =>
  useRequest<IItem>(id ? readConfig(id) : null, { initialData });

export const useItemIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ isFollowing: boolean; followersCount: number }>(
    isFollowingConfig(id),
    { initialData }
  );

export const useItemOptions = (id: number, initialData?: any) =>
  useRequest<ItemOption>(optionsConfig(id), { initialData });

export const useItemList = (params: ItemListRequestParams, initialData?: any) =>
  useRequest<ListResponse<IItem>>(listConfig(params), { initialData });

export const useItemLookList = (
  params: ListRequestParams & { o?: 'popular' },
  id,
  initialData?: any
) => useRequest<ListResponse<ILook>>(looksConfig(params, id), { initialData });

export const useItemPostList = (
  params: ListRequestParams & { o?: 'popular' },
  id,
  initialData?: any
) => useRequest<ListResponse<IPost>>(postsConfig(params, id), { initialData });

export const useItemReviewList = (
  params: ListRequestParams & { o?: 'popular' },
  id,
  initialData?: any
) =>
  useRequest<ListResponse<IPost | ILook>>(reviewsConfig(params, id), {
    initialData,
  });

export const useItemDiscountInfo = (id, initialData?: any) =>
  useRequest<ItemDiscountsInfo>(discountsConfig(id), { initialData });

export const useItemMatchings = (
  params: ItemMatchingsRequestParams,
  initialData?: any
) => useRequest<ListResponse<IItem>>(matchingsConfig(params), { initialData });

export const useItemPrices = (params: ItemPricesRequestParams) =>
  useRequest<{ maxPrice: number; minPrice: number }>(pricesConfig(params));

export const useItemSize = (id, initialData?) =>
  useRequest<IItemSize>(id ? sizeReadConfig(id) : null, { initialData });

export const useRecommendationItemsList = () =>
  useRequest<RecommendationItems[]>(recommendationItemsListConfig());

export const useItemPackage = (code: string) =>
  useRequest<ItemPackage>(code ? itemPackageConfig(code) : null);

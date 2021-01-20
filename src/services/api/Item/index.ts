import axios from 'axios';
import { mutate } from 'swr';
import { IncomingMessage } from 'http';

import {
  IItem,
  IShippingPolicy,
  IItemCustomInputDTO,
  ILook,
  IPost,
  IItemSelectDTO,
  IItemUpdateDTO,
} from '@src/interfaces';
import {
  ListResponse,
  ItemOption,
  Digest,
  ListRequestParams,
  ItemTagListRequestParams,
  ItemListRequestParams,
  ItemSelectsRequestParams,
  ItemMatchingsRequestParams,
  RecommendationItems,
  ItemPackage,
} from '@src/types';
import {
  listConfig,
  readConfig,
  followConfig,
  isFollowingConfig,
  unfollowConfig,
  shippingPolicyConfig,
  optionsConfig,
  createConfig,
  postsConfig,
  digestsConfig,
  looksConfig,
  createCustomConfig,
  discountsConfig,
  reviewsConfig,
  selectsConfig,
  matchingsConfig,
  pricesConfig,
  partialUpdateConfig,
  recommendationItemsListConfig,
  itemPackageConfig,
} from './config';

export const list = async (
  params: ItemListRequestParams
): Promise<ListResponse<IItem>> =>
  axios(listConfig(params)).then((res) => res.data);

export const create = async (url: string): Promise<IItem> =>
  axios(createConfig(url)).then((res) => res.data);

export const createCustom = async (
  itemCustomInputDTO: IItemCustomInputDTO
): Promise<IItem> =>
  axios(createCustomConfig(itemCustomInputDTO)).then((res) => res.data);

export const read = async (id: number): Promise<IItem> =>
  axios(readConfig(id)).then((res) => res.data);

export const partialUpdate = async (
  id: number,
  itemUpdateDTO: IItemUpdateDTO
): Promise<IItem> =>
  axios(partialUpdateConfig(id, itemUpdateDTO)).then((res) => res.data);

export const options = async (id: number): Promise<ItemOption> =>
  axios(optionsConfig(id)).then((res) => res.data);

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res.data.followersCount,
        isFollowing: true,
      },
    });
  });

export const isFollowing = async (
  id: number,
  req?: IncomingMessage
): Promise<{ isFollowing: boolean }> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

export const unfollow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(unfollowConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: false,
      },
    });
  });

export const digests = async (
  params: ListRequestParams & { o?: 'popular' },
  id: number
): Promise<ListResponse<Digest>> =>
  axios(digestsConfig(params, id)).then((res) => res.data);

export const looks = async (
  params: ListRequestParams & { o?: 'popular' },
  id: number
): Promise<ListResponse<ILook>> =>
  axios(looksConfig(params, id)).then((res) => res.data);

export const posts = async (
  params: ListRequestParams & { o?: 'popular' },
  id: number
): Promise<ListResponse<IPost>> =>
  axios(postsConfig(params, id)).then((res) => res.data);

export const reviews = async (
  params: ListRequestParams & { o?: 'popular' },
  id: number
): Promise<ListResponse<IPost | ILook>> =>
  axios(reviewsConfig(params, id)).then((res) => res.data);

export const shippingPolicy = async (id: number): Promise<IShippingPolicy> =>
  axios(shippingPolicyConfig(id)).then((res) => res.data);

export const discounts = async (id: number) =>
  axios(discountsConfig(id)).then((res) => res.data);

export const selects = async (
  params: ItemSelectsRequestParams
): Promise<ListResponse<IItemSelectDTO>> =>
  axios(selectsConfig(params)).then((res) => res.data);

export const matchings = async (
  params: ItemMatchingsRequestParams
): Promise<Pick<ListResponse<IItem>, 'count' | 'results'>> =>
  axios(matchingsConfig(params)).then((res) => res.data);

export const prices = async (
  params: ItemTagListRequestParams
): Promise<{ maxPrice: number; minPrice: number }> =>
  axios(pricesConfig(params)).then((res) => res.data);

export const recommendationItemsList = async (): Promise<RecommendationItems> =>
  axios(recommendationItemsListConfig()).then((res) => res.data);

export const itemPackage = async (code: string): Promise<ItemPackage> =>
  axios(itemPackageConfig(code)).then((res) => res.data);

const ItemService = {
  list,
  create,
  createCustom,
  read,
  partialUpdate,
  follow,
  isFollowing,
  unfollow,
  digests,
  looks,
  posts,
  shippingPolicy,
  selects,
  matchings,
  recommendationItemsList,
  itemPackage,
};

export default ItemService;

import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import { IItemCustomInputDTO, IItemUpdateDTO } from '@src/interfaces';
import {
  ListRequestParams,
  ItemListRequestParams,
  ItemSelectsRequestParams,
  ItemMatchingsRequestParams,
  ItemPricesRequestParams,
} from '@src/types';

export const listConfig = (params: ItemListRequestParams) =>
  baseConfig().get(`/items/`, { params });

export const createConfig = (url: string) =>
  baseConfig(true).post('/items/', { url });

export const createCustomConfig = (itemCustomInputDTO: IItemCustomInputDTO) =>
  baseConfig(true).post('/items/custom/', itemCustomInputDTO);

export const readConfig = (id: number) => baseConfig().get(`/items/${id}/`);

export const partialUpdateConfig = (id: number, IItemUpdateDTO) =>
  baseConfig(true).patch(`/items/${id}/`, IItemUpdateDTO);

export const optionsConfig = (id: number) =>
  baseConfig().get(`/items/${id}/options/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/items/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/items/${id}/is_following/`) : null;

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/items/${id}/unfollow/`);

export const digestsConfig = (params: ListRequestParams, id: number) =>
  baseConfig().get(`/items/${id}/digests`, { params });

export const looksConfig = (params: ListRequestParams, id: number) =>
  baseConfig().get(`/items/${id}/looks/`, { params });

export const postsConfig = (params: ListRequestParams, id: number) =>
  baseConfig().get(`/items/${id}/posts/`, { params });

export const reviewsConfig = (params: ListRequestParams, id: number) =>
  baseConfig().get(`/items/${id}/reviews/`, { params });

export const shippingPolicyConfig = (id: number) =>
  baseConfig().get(`/items/${id}/shipping_policy/`);

export const discountsConfig = (id: number) =>
  baseConfig().get(`/items/${id}/discounts/`);

export const selectsConfig = (
  params: ItemSelectsRequestParams,
  req?: IncomingMessage
) => baseConfig().get('/items/selects/', { params });

export const matchingsConfig = (
  params: ItemMatchingsRequestParams,
  req?: IncomingMessage
) => baseConfig(true, req).get('/items/matchings/', { params });

export const pricesConfig = (
  params: ItemPricesRequestParams,
  req?: IncomingMessage
) => baseConfig(true, req).get('/items/prices/', { params });

export const recommendationItemsListConfig = () =>
  baseConfig(true).get('/recommendation_items/');

export const itemPackageConfig = (code: string) =>
  baseConfig(true).get(`/item_packages/code/${code}/`);

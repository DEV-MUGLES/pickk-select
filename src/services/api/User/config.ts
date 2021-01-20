import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import { IUserInputDTO } from '@src/interfaces';
import { ListRequestParams } from '@src/types';

export const meReadConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/users/me/');

export const mePartialUpdateConfig = (updated: Partial<IUserInputDTO>) =>
  baseConfig(true).patch('/users/me/', updated);

export const meFollowingFeedItemsConfig = (params: ListRequestParams) =>
  baseConfig(true).get('/users/me/following_feed/items/', { params });

export const meFollowingFeedLooksConfig = (params: ListRequestParams) =>
  baseConfig(true).get('/users/me/following_feed/looks/', { params });

export const meFollowingFeedPostsConfig = (params: ListRequestParams) =>
  baseConfig(true).get('/users/me/following_feed/posts/', { params });

export const meFollowingUsersConfig = () =>
  baseConfig(true).get('/users/me/following_users/');

export const meItemRecentDigestConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/users/me/item/${id}/recent_digest/`);

export const readConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/users/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/users/${id}/follow/`);

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/users/${id}/unfollow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/users/${id}/is_following/`) : null;

export const bookmarkingPostsConfig = (params: ListRequestParams) =>
  baseConfig(true).get('/users/me/bookmarking_posts/', { params });

export const bookmarkingLooksConfig = (params: ListRequestParams) =>
  baseConfig(true).get('/users/me/bookmarking_looks/', { params });

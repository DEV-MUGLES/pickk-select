import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';

export const readConfig = (id: number) =>
  baseConfig().get(`/post_items/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/post_items/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/post_items/${id}/is_following/`);

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/post_items/${id}/unfollow/`);

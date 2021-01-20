import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';

export const readConfig = (id: number) =>
  baseConfig().get(`/look_items/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/look_items/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/look_items/${id}/is_following/`);

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/look_items/${id}/unfollow/`);

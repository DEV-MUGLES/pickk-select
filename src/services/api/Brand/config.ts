import { baseConfig } from '../Api';
import { IncomingMessage } from 'http';

export const listConfig = (params) =>
  baseConfig(true).get('/brands/', { params });

export const readConfig = (id: number) => baseConfig().get(`/brands/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/brands/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/brands/${id}/is_following/`);

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/brands/${id}/unfollow/`);

export const namesConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get(`/brands/names/`);

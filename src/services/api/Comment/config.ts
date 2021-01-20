import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import { ICommentInputDTO } from '@src/interfaces';

export const readConfig = (id: number) => baseConfig().get(`/comments/${id}/`);

export const partialUpdateConfig = (
  id: number,
  updated: Partial<ICommentInputDTO>,
  req?: IncomingMessage
) => baseConfig(true, req).patch(`/comments/${id}/`, updated);

export const deleteConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/comments/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/comments/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/comments/${id}/is_following/`);

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/comments/${id}/unfollow/`);

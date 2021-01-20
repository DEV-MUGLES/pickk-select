import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import { ListRequestParams } from '@src/types';
import {
  ILookInputDTO,
  ICommentInputDTO,
  ILookItemInputDTO,
} from '@src/interfaces';

export const listConfig = (params: ListRequestParams & { userId?: number }) =>
  baseConfig().get('/looks/', { params });

export const createConfig = (
  lookInputDTO: ILookInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post('/looks/', lookInputDTO);

export const readConfig = (id: number, req?: IncomingMessage) =>
  !id ? null : baseConfig(true, req).get(`/looks/${id}/`);

export const partialUpdateConfig = (
  id: number,
  updated: Partial<ILookInputDTO>,
  req?: IncomingMessage
) => baseConfig(true, req).patch(`/looks/${id}/`, updated);

export const deleteLookConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/looks/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/looks/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/looks/${id}/is_following/`) : null;

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/looks/${id}/unfollow/`);

export const commentsCountConfig = (look_pk: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/looks/${look_pk}/comments/count/`);

export const commentsListConfig = (params: ListRequestParams, lookPk: number) =>
  baseConfig().get(`/looks/${lookPk}/comments/`, { params });

export const commentsCreateConfig = (
  lookPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post(`/looks/${lookPk}/comments/`, commentInputDTO);

export const lookItemsListConfig = (
  lookPk: number,
  params: ListRequestParams
) => baseConfig().get(`/looks/${lookPk}/look_items/`, { params });

export const lookItemsCreateConfig = (
  lookPk: number,
  lookItemInputDTO: ILookItemInputDTO,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(`/looks/${lookPk}/look_items/`, lookItemInputDTO);

export const bookmarkConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/looks/${id}/bookmark/`);

export const isBookmarkingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/looks/${id}/is_bookmarking/`) : null;

export const unbookmarkConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/looks/${id}/unbookmark/`);

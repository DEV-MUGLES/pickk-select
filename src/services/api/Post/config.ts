import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import {
  IPostInputDTO,
  ICommentInputDTO,
  IPostItemInputDTO,
} from '@src/interfaces';
import { ListRequestParams } from '@src/types';

export const listConfig = (params: ListRequestParams & { userId?: number }) =>
  baseConfig().get('/posts/', { params });

export const createConfig = (
  postInputDTO: IPostInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post('/posts/', postInputDTO);

export const readConfig = (id: number) => baseConfig(true).get(`/posts/${id}/`);

export const partialUpdateConfig = (
  id: number,
  updated: Partial<IPostInputDTO>,
  req?: IncomingMessage
) => baseConfig(true, req).patch(`/posts/${id}/`, updated);

export const deleteConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/posts/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/posts/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/posts/${id}/is_following/`) : null;

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/posts/${id}/unfollow/`);

export const commentsCountConfig = (review_pk: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/posts/${review_pk}/comments/count/`);

export const commentsListConfig = (
  params: ListRequestParams,
  reviewPk: number
) => baseConfig().get(`/posts/${reviewPk}/comments/`, { params });

export const commentsCreateConfig = (
  reviewPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(`/posts/${reviewPk}/comments/`, commentInputDTO);

export const itemsListConfig = (postPK: number, params: ListRequestParams) =>
  baseConfig().get(`/posts/${postPK}/post_items/`, { params });

export const itemsCreateConfig = (
  postPK: number,
  postItemInputDTO: Omit<IPostItemInputDTO, 'images'>,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(`/posts/${postPK}/post_items/`, postItemInputDTO);

export const recommendationPostsListConfig = () =>
  baseConfig(true).get(`/recommendation_posts/`);

export const bookmarkConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/posts/${id}/bookmark/`);

export const isBookmarkingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/posts/${id}/is_bookmarking/`) : null;

export const unbookmarkConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/posts/${id}/unbookmark/`);

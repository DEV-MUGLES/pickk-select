import axios from 'axios';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

import { ListRequestParams, ListResponse } from '@src/types';
import {
  ILook,
  ILookInputDTO,
  ICommentInputDTO,
  IComment,
  ILookItemInputDTO,
} from '@src/interfaces';
import {
  listConfig,
  createConfig,
  readConfig,
  partialUpdateConfig,
  deleteLookConfig,
  followConfig,
  unfollowConfig,
  commentsListConfig,
  commentsCreateConfig,
  lookItemsListConfig,
  lookItemsCreateConfig,
  isFollowingConfig,
  commentsCountConfig,
  isBookmarkingConfig,
  bookmarkConfig,
  unbookmarkConfig,
} from './config';

export const list = async (
  params: ListRequestParams & { userId?: number }
): Promise<ListResponse<ILook>> =>
  axios(listConfig(params)).then((res) => res.data);

export const create = async (
  lookInputDTO: ILookInputDTO,
  req?: IncomingMessage
): Promise<ILook> =>
  axios(createConfig(lookInputDTO, req)).then((res) => res.data);

export const read = async (id: number, req?: IncomingMessage): Promise<ILook> =>
  axios(readConfig(id, req)).then((res) => res.data);

export const partialUpdate = async (
  id: number,
  updated: Partial<ILookInputDTO>,
  req?: IncomingMessage
) =>
  axios(partialUpdateConfig(id, updated, req)).then((res) => {
    mutate(JSON.stringify(readConfig(id)), async (look: ILook) => {
      return { ...look, ...updated };
    });
    return res.data;
  });

export const deleteLook = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(deleteLookConfig(id, req)).then((res) => res.data);

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
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

export const commentsCount = async (
  id: number,
  req?: IncomingMessage
): Promise<{ count: number }> =>
  axios(commentsCountConfig(id, req)).then((res) => res.data);

export const commentsList = async (
  lookPk: number,
  params: ListRequestParams
): Promise<ListResponse<IComment>> =>
  axios(commentsListConfig(params, lookPk)).then((res) => res.data);

export const commentsCreate = async (
  lookPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
): Promise<IComment> =>
  axios(commentsCreateConfig(lookPk, commentInputDTO, req)).then(
    (res) => res.data
  );

export const lookItemsList = async (
  lookPk: number,
  params: ListRequestParams
) => axios(lookItemsListConfig(lookPk, params)).then((res) => res.data);

export const lookItemsCreate = async (
  lookPk: number,
  lookItemInputDTO: ILookItemInputDTO,
  req?: IncomingMessage
) =>
  axios(lookItemsCreateConfig(lookPk, lookItemInputDTO, req)).then(
    (res) => res.data
  );

export const isBookmarking = async (
  id: number,
  req?: IncomingMessage
): Promise<{ isBookmarking: boolean; bookmarksCount: number }> =>
  axios(isBookmarkingConfig(id, req)).then((res) => res.data);

export const bookmark = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => {
  axios(bookmarkConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isBookmarkingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: true,
      },
    });
  });
};

export const unbookmark = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(unbookmarkConfig(id, req)).then((res) =>
    mutate(JSON.stringify(isBookmarkingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: false,
      },
    })
  );

const LookService = {
  list,
  create,
  read,
  partialUpdate,
  deleteLook,
  follow,
  isFollowing,
  unfollow,
  commentsList,
  commentsCreate,
  lookItemsList,
  lookItemsCreate,
  isBookmarking,
  bookmark,
  unbookmark,
};

export default LookService;

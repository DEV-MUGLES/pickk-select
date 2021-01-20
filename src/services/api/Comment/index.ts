import axios from 'axios';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

import { IComment, ICommentInputDTO } from '@src/interfaces';
import {
  readConfig,
  followConfig,
  unfollowConfig,
  isFollowingConfig,
  partialUpdateConfig,
  deleteConfig,
} from './config';

export const read = async (id: number): Promise<IComment> =>
  axios(readConfig(id)).then((res) => res.data);

export const partialUpdate = async (
  id: number,
  updated: Partial<ICommentInputDTO>,
  req?: IncomingMessage
): Promise<IComment> =>
  axios(partialUpdateConfig(id, updated, req)).then((res) => {
    mutate(JSON.stringify(readConfig(id)), async (comment: IComment) => {
      return { ...comment, ...updated };
    });
    return res.data;
  });

export const deleteComment = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(deleteConfig(id, req)).then((res) => res.data);

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(followConfig(id, req)).then(() => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), async (res) => {
      return {
        data: {
          followersCount: res?.data.followersCount + 1,
          isFollowing: true,
        },
      };
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
  axios(unfollowConfig(id, req)).then(() => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), async (res) => {
      return {
        data: {
          followersCount: res?.data.followersCount - 1,
          isFollowing: false,
        },
      };
    });
  });

const CommentService = {
  read,
  partialUpdate,
  deleteComment,
  follow,
  isFollowing,
  unfollow,
};

export default CommentService;

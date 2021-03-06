import axios from 'axios';
import { mutate } from 'swr';
import { IncomingMessage } from 'http';

import {
  meReadConfig,
  mePartialUpdateConfig,
  meFollowingFeedLooksConfig,
  meFollowingFeedPostsConfig,
  readConfig,
  followConfig,
  unfollowConfig,
  isFollowingConfig,
  meFollowingFeedItemsConfig,
  meItemRecentDigestConfig,
  meFollowingUsersConfig,
  bookmarkingLooksConfig,
  bookmarkingPostsConfig,
} from './config';

import {
  IUser,
  IUserInputDTO,
  IUserReadDTO,
  IPost,
  ILook,
  IItem,
} from '@src/interfaces';
import { ListRequestParams, ListResponse, Digest } from '@src/types';

const meRead = async (req?: IncomingMessage): Promise<IUser> =>
  axios(meReadConfig(req))
    .then((res) => {
      return { ...res.data, isLoggedIn: true };
    })
    .catch(() => {
      return { isLoggedIn: false };
    });

const mePartialUpdate = async (
  updated: Partial<IUserInputDTO>
): Promise<IUser> =>
  axios(mePartialUpdateConfig(updated)).then((res) => {
    let userId: number;
    mutate(JSON.stringify(meReadConfig()), async (me) => {
      if (!me) return;
      userId = me.id;
      return { ...me, ...updated };
    });
    if (!userId) return;
    mutate(JSON.stringify(readConfig(userId)), async (me) => {
      return { ...me, ...updated };
    });
    return res.data;
  });

export const meFollowingFeedItems = async (
  params: ListRequestParams
): Promise<ListResponse<IItem>> =>
  axios(meFollowingFeedItemsConfig(params)).then((res) => res.data);

export const meFollowingFeedLooks = async (
  params: ListRequestParams
): Promise<ListResponse<ILook>> =>
  axios(meFollowingFeedLooksConfig(params)).then((res) => res.data);

export const meFollowingFeedPosts = async (
  params: ListRequestParams
): Promise<ListResponse<IPost>> =>
  axios(meFollowingFeedPostsConfig(params)).then((res) => res.data);

export const meFollowingUsers = async (): Promise<IUser[]> =>
  axios(meFollowingUsersConfig()).then((res) => res.data);

const meItemRecentDigest = async (
  id: number,
  req?: IncomingMessage
): Promise<Digest> =>
  axios(meItemRecentDigestConfig(id, req))
    .then((res) => res.data)
    .catch(() => null);

const read = async (id: number, req?: IncomingMessage): Promise<IUserReadDTO> =>
  axios(readConfig(id, req)).then((res) => res.data);

const follow = async (id: number, req?: IncomingMessage): Promise<void> =>
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: true,
      },
    });
  });

const unfollow = async (id: number, req?: IncomingMessage): Promise<void> =>
  axios(unfollowConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount - 1,
        isFollowing: false,
      },
    });
  });

const isFollowing = async (
  id: number,
  req?: IncomingMessage
): Promise<IUserReadDTO> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

const bookmarkingPosts = async (
  params: ListRequestParams
): Promise<ListResponse<IPost>> =>
  axios(bookmarkingPostsConfig(params)).then((res) => res.data);

const bookmarkingLooks = async (
  params: ListRequestParams
): Promise<ListResponse<ILook>> =>
  axios(bookmarkingLooksConfig(params)).then((res) => res.data);

const UserService = {
  meRead,
  mePartialUpdate,
  meFollowingFeedLooks,
  meFollowingFeedPosts,
  meFollowingUsers,
  meItemRecentDigest,
  read,
  follow,
  unfollow,
  isFollowing,
  bookmarkingPosts,
  bookmarkingLooks,
};

export default UserService;

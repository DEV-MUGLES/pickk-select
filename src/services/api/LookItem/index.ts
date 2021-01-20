import axios from 'axios';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

import { ILookItem } from '@src/interfaces';
import {
  readConfig,
  followConfig,
  unfollowConfig,
  isFollowingConfig,
} from './config';

export const read = async (id: number): Promise<ILookItem> =>
  axios(readConfig(id)).then((res) => res.data);

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

const LookItemService = {
  read,
  follow,
  isFollowing,
  unfollow,
};

export default LookItemService;

import axios from 'axios';

import { ListResponse } from '@src/types';
import { IBrand, IBrandNameDTO } from '@src/interfaces';
import {
  listConfig,
  readConfig,
  followConfig,
  isFollowingConfig,
  unfollowConfig,
  namesConfig,
} from './config';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

export const list = async (params): Promise<ListResponse<IBrand>> =>
  axios(listConfig(params)).then((res) => res.data);

export const read = async (id: number): Promise<IBrand> =>
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

export const names = async (req?: IncomingMessage): Promise<IBrandNameDTO[]> =>
  axios(namesConfig(req)).then((res) => res.data);

const BrandService = {
  list,
  read,
  follow,
  isFollowing,
  unfollow,
  names,
};

export default BrandService;

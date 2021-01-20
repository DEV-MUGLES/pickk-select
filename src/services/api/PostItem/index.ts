import axios from 'axios';
import { IncomingMessage } from 'http';

import {
  readConfig,
  followConfig,
  unfollowConfig,
  isFollowingConfig,
} from './config';
import { IPostItem } from '@src/interfaces';

export const read = async (id: number): Promise<IPostItem> =>
  axios(readConfig(id)).then((res) => res.data);

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(followConfig(id, req)).then();

export const isFollowing = async (
  id: number,
  req?: IncomingMessage
): Promise<{ isFollowing: boolean }> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

export const unfollow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(unfollowConfig(id, req)).then();

const PostItemService = {
  read,
  follow,
  isFollowing,
  unfollow,
};

export default PostItemService;

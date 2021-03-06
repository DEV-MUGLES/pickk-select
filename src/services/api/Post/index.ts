import axios from 'axios';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

import {
  listConfig,
  createConfig,
  readConfig,
  partialUpdateConfig,
  deleteConfig,
  followConfig,
  unfollowConfig,
  commentsListConfig,
  commentsCreateConfig,
  itemsListConfig,
  itemsCreateConfig,
  isFollowingConfig,
  commentsCountConfig,
  recommendationPostsListConfig,
  bookmarkConfig,
  isBookmarkingConfig,
  unbookmarkConfig,
} from './config';
import {
  IPost,
  IPostInputDTO,
  IComment,
  ICommentInputDTO,
  IPostItemInputDTO,
  IPostItem,
} from '@src/interfaces';
import {
  ListRequestParams,
  ListResponse,
  RecommendationPosts,
} from '@src/types';

export const list = async (
  params: ListRequestParams & { userId?: number; o?: 'popular' }
): Promise<ListResponse<IPost>> =>
  axios(listConfig(params)).then((res) => res.data);

export const create = async (
  reviewInputDTO: IPostInputDTO,
  req?: IncomingMessage
): Promise<IPost> =>
  axios(createConfig(reviewInputDTO, req)).then((res) => {
    mutate(JSON.stringify(listConfig({ offset: 0, limit: 20 })));
    return res.data;
  });

export const read = async (id: number): Promise<IPost> =>
  axios(readConfig(id)).then((res) => res.data);

export const partialUpdate = async (
  id: number,
  updated: Partial<IPostInputDTO>,
  req?: IncomingMessage
): Promise<IPost> =>
  axios(partialUpdateConfig(id, updated, req)).then((res) => {
    mutate(JSON.stringify(readConfig(id)), async (review: IPost) => {
      return { ...review, ...updated };
    });
    return res.data;
  });

export const deleteReview = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(deleteConfig(id, req)).then();

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => {
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: true,
      },
    });
  });
};

export const isFollowing = async (
  id: number,
  req?: IncomingMessage
): Promise<{ isFollowing: boolean }> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

export const unfollow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(unfollowConfig(id, req)).then((res) =>
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: false,
      },
    })
  );

export const commentsCount = async (
  id: number,
  req?: IncomingMessage
): Promise<{ count: number }> =>
  axios(commentsCountConfig(id, req)).then((res) => res.data);

export const commentsList = async (
  reviewPk: number,
  params: ListRequestParams
): Promise<ListResponse<IComment>> =>
  axios(commentsListConfig(params, reviewPk)).then((res) => res.data);

export const commentsCreate = async (
  reviewPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
): Promise<IComment> =>
  axios(commentsCreateConfig(reviewPk, commentInputDTO, req)).then(
    (res) => res.data
  );

export const itemsList = async (
  reviewPk: number,
  params: ListRequestParams
): Promise<IPostItem> =>
  axios(itemsListConfig(reviewPk, params)).then((res) => res.data);

export const itemsCreate = async (
  reviewPk: number,
  reviewItemInputDTO: Omit<IPostItemInputDTO, 'images'>,
  req?: IncomingMessage
): Promise<IPostItem> =>
  axios(itemsCreateConfig(reviewPk, reviewItemInputDTO, req)).then(
    (res) => res.data
  );

export const recommendationPostsList = async (): Promise<
  RecommendationPosts[]
> => axios(recommendationPostsListConfig()).then((res) => res.data);

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

const PostService = {
  list,
  create,
  read,
  partialUpdate,
  deleteReview,
  follow,
  isFollowing,
  unfollow,
  commentsList,
  commentsCreate,
  itemsList,
  itemsCreate,
  recommendationPostsList,
  isBookmarking,
  bookmark,
  unbookmark,
};

export default PostService;

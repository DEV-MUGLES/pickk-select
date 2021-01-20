import useRequest from '../swr/useRequest';

import {
  commentsCountConfig as lookCommentsCountConfig,
  commentsListConfig as lookCommentsListConfig,
} from '@src/services/api/Look/config';
import {
  commentsCountConfig as postCommentsCountConfig,
  commentsListConfig as postCommentsListConfig,
} from '@src/services/api/Post/config';
import { isFollowingConfig } from '@src/services/api/Comment/config';
import { ListResponse, ReviewType } from '@src/types';
import { IComment } from '@src/interfaces';

export const useCommentIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ followersCount: number; isFollowing: boolean }>(
    isFollowingConfig(id),
    { initialData }
  );

export const useCommentList = (type: ReviewType, id: number) =>
  type === ReviewType.Look
    ? useRequest<ListResponse<IComment>>(
        lookCommentsListConfig({ limit: 20, offset: 0 }, id)
      )
    : useRequest<ListResponse<IComment>>(
        postCommentsListConfig({ limit: 20, offset: 0 }, id)
      );

export const useCommentsCount = (
  commentsReviewType: ReviewType,
  review_pk: number,
  initialData?: any
) =>
  useRequest<{ count: number }>(
    commentsReviewType === ReviewType.Post
      ? postCommentsCountConfig(review_pk)
      : lookCommentsCountConfig(review_pk),
    { initialData }
  );

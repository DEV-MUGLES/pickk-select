import { baseConfig } from '../Api';
import { ItemReviewRequest } from '@src/types';
import { IncomingMessage } from 'http';

export const reviewRequestConfig = (
  data: ItemReviewRequest,
  req?: IncomingMessage
) => baseConfig(true, req).post(`/review_request/`, data);

export const hotCategoryListConfig = () => baseConfig().get('/hot_categories/');

export const homeModalContentsConfig = () =>
  baseConfig().get('/home_modal_contents/');

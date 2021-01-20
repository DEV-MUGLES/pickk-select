import axios from 'axios';

import {
  homeModalContentsConfig,
  hotCategoryListConfig,
  reviewRequestConfig,
} from './config';
import { HomeModalContent, HotCategory, ItemReviewRequest } from '@src/types';
import { IncomingMessage } from 'http';

export const reviewRequest = async (
  data: ItemReviewRequest,
  req?: IncomingMessage
): Promise<void> =>
  axios(reviewRequestConfig(data, req)).then((res) => res.data);

export const hotCategoryList = async (): Promise<HotCategory[]> =>
  axios(hotCategoryListConfig()).then((res) => res.data);

const homeModalContents = async (): Promise<HomeModalContent[]> =>
  axios(homeModalContentsConfig()).then((res) => res.data);

const EtcService = {
  reviewRequest,
  hotCategoryList,
  homeModalContents,
};

export default EtcService;

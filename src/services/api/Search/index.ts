import axios from 'axios';
import { IncomingMessage } from 'http';

import { IItem, ILook, IPost } from '@src/interfaces';
import { itemsConfig, looksConfig, postsConfig } from './config';
import { ListRequestParams, ListResponse } from '@src/types';

export const items = async (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
): Promise<ListResponse<IItem>> =>
  axios(itemsConfig(params, req)).then((res) => res.data);

export const posts = async (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
): Promise<ListResponse<IPost>> =>
  axios(postsConfig(params, req)).then((res) => res.data);

export const looks = async (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
): Promise<ListResponse<ILook>> =>
  axios(looksConfig(params, req)).then((res) => res.data);

const SearchService = {
  items,
  posts,
  looks,
};

export default SearchService;

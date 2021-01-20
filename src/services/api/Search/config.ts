import { ListRequestParams } from '@src/types';
import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

export const itemsConfig = (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
) => baseConfig(true, req).get(`/search/items/`, { params });

export const looksConfig = (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
) => baseConfig(true, req).get(`/search/looks/`, { params });

export const postsConfig = (
  params: ListRequestParams & { q?: string },
  req?: IncomingMessage
) => baseConfig(true, req).get(`/search/posts/`, { params });

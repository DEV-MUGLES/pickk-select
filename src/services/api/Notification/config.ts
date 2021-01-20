import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

import { ListRequestParams } from '@src/types';

export const listConfig = (params?: ListRequestParams, req?: IncomingMessage) =>
  baseConfig(true, req).get('/notifications/', { params });

export const checkConfig = (ids?: number[], req?: IncomingMessage) =>
  baseConfig(true, req).post('/notifications/check/', { ids });

export const checkAllConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).post('/notifications/check_all/');

export const deleteConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/notifications/${id}/`);

export const deleteAllConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).delete('/notifications/delete_all/');

export const unreadCountConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/notifications/unread_count/');

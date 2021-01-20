import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

export const listConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/item_points/');

export const lookReadConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/item_points/LOOK_ITEM/${id}/`);

export const lookPointsConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/item_points/LOOK_ITEM/${id}/points`);

export const postReadConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/item_points/POST_ITEM/${id}/`);

export const postPointsConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/item_points/POST_ITEM/${id}/points`);

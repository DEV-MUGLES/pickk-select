import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

import { IPoint } from '@src/interfaces/Points/IPoint';

export const listConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/points/');

export const previewConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/points/preview/');

export const convertConfig = (
  params: Pick<IPoint, 'amount'>,
  req?: IncomingMessage
) => baseConfig(true, req).post('/points/convert/', params);

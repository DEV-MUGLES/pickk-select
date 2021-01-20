import axios from 'axios';
import { IncomingMessage } from 'http';

import { ListResponse } from '@src/types';
import { IPoint } from '@src/interfaces/Points/IPoint';
import { convertConfig, listConfig, previewConfig } from './config';
import { PointsPreview } from '@src/types';

const list = async (req?: IncomingMessage): Promise<ListResponse<IPoint>> =>
  axios(listConfig(req)).then((res) => {
    return res.data;
  });

const preview = async (req?: IncomingMessage): Promise<PointsPreview> =>
  axios(previewConfig(req)).then((res) => {
    return res.data;
  });

const convert = async (params: Pick<IPoint, 'amount'>): Promise<void> =>
  axios(convertConfig(params)).then((res) => res.data);

const PointService = {
  list,
  preview,
  convert,
};

export default PointService;

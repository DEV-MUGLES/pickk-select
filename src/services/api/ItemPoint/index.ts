import axios from 'axios';
import { IncomingMessage } from 'http';

import { ListResponse } from '@src/types';
import {
  listConfig,
  lookReadConfig,
  lookPointsConfig,
  postReadConfig,
  postPointsConfig,
} from './config';
import { IItemPoint } from '@src/interfaces/Points/IItemPoint';
import { IPoint } from '@src/interfaces/Points/IPoint';

const list = async (req?: IncomingMessage): Promise<ListResponse<IItemPoint>> =>
  axios(listConfig(req)).then((res) => {
    return res.data;
  });

const lookRead = async (id: number): Promise<IItemPoint> =>
  axios(lookReadConfig(id)).then((res) => res.data);

const lookPoints = async (id: number): Promise<ListResponse<IPoint>> =>
  axios(lookPointsConfig(id)).then((res) => res.data);

const reviewRead = async (id: number): Promise<IItemPoint> =>
  axios(postReadConfig(id)).then((res) => res.data);

const reviewPoints = async (id: number): Promise<ListResponse<IPoint>> =>
  axios(postPointsConfig(id)).then((res) => res.data);

const ItemPointService = {
  list,
  lookRead,
  lookPoints,
  reviewRead,
  reviewPoints,
};

export default ItemPointService;

import axios from 'axios';

import { INotification } from '@src/interfaces';
import { ListRequestParams, ListResponse } from '@src/types';
import {
  listConfig,
  checkConfig,
  checkAllConfig,
  deleteConfig,
  deleteAllConfig,
  unreadCountConfig,
} from './config';

const list = async (
  params: ListRequestParams
): Promise<ListResponse<INotification>> =>
  axios(listConfig(params)).then((res) => res.data);

const check = async (ids?: number[]): Promise<void> =>
  axios(checkConfig(ids)).then((res) => res.data);

const checkAll = async (): Promise<void> =>
  axios(checkAllConfig()).then((res) => res.data);

const _delete = async (id: number): Promise<void> =>
  axios(deleteConfig(id)).then((res) => res.data);

const deleteAll = async (): Promise<void> =>
  axios(deleteAllConfig()).then((res) => res.data);

const unreadCount = async (): Promise<number> =>
  axios(unreadCountConfig()).then((res) => res.data);

const NotificationService = {
  list,
  check,
  checkAll,
  delete: _delete,
  deleteAll,
  unreadCount,
};

export default NotificationService;

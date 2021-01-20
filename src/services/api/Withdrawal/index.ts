import axios from 'axios';
import { IncomingMessage } from 'http';

import {
  readConfig,
  createConfig,
  partialUpdateConfig,
  deleteWithdrawalConfig,
  uploadImageConfig,
} from './config';
import {
  IWithdrawal,
  IWithdrawalInputDTO,
} from '@src/interfaces/Points/IWithdrawal';

const read = async (req?: IncomingMessage): Promise<IWithdrawal> =>
  axios(readConfig(req)).then((res) => {
    return res.data;
  });

const create = async (
  withdrawalInputDTO: IWithdrawalInputDTO,
  req?: IncomingMessage
): Promise<IWithdrawal> =>
  axios(createConfig(withdrawalInputDTO, req)).then((res) => {
    return res.data;
  });

const partialUpdate = (
  withdrawalInputDTO: IWithdrawalInputDTO,
  req?: IncomingMessage
): Promise<IWithdrawal> =>
  axios(partialUpdateConfig(withdrawalInputDTO, req)).then((res) => {
    return res.data;
  });

const deleteWithdrawal = async (req?: IncomingMessage): Promise<IWithdrawal> =>
  axios(deleteWithdrawalConfig(req)).then((res) => res.data);

const uploadImage = async (image: File): Promise<{ imageUrl: string }> =>
  axios(uploadImageConfig(image)).then((res) => res.data);

const WithdrawalService = {
  read,
  create,
  partialUpdate,
  deleteWithdrawal,
  uploadImage,
};

export default WithdrawalService;

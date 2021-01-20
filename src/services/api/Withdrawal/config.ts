import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';
import { IWithdrawalInputDTO } from '@src/interfaces/Points/IWithdrawal';

export const readConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get(`/withdrawals/`);

export const createConfig = (
  withdrawalInputDTO: IWithdrawalInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post('/withdrawals/', withdrawalInputDTO);

export const partialUpdateConfig = (
  updated: Partial<IWithdrawalInputDTO>,
  req?: IncomingMessage
) => baseConfig(true, req).patch(`/withdrawals/`, updated);

export const deleteWithdrawalConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/withdrawals/`);

export const uploadImageConfig = (image: File) => {
  const data = new FormData();
  data.append('image', image);
  return baseConfig().post('/withdrawals/upload_image/', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

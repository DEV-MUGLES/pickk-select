import { PointsWithdrawalStatus } from '@src/types';

export interface IWithdrawal {
  id: number;
  idCardImage: string;
  status: PointsWithdrawalStatus;
  amount: number;
  name: string;
  phone: string;
  bank: string;
  account: string;
  rrn: string;
  isAgreed: boolean;
  createdAt: string;
  updatedAt: string;
  inspectedAt?: string;
  acceptedAt?: string;
  rejectedAt?: string;
  cancelledAt?: string;
}

export type IWithdrawalInputDTO = Pick<
  IWithdrawal,
  | 'idCardImage'
  | 'amount'
  | 'name'
  | 'phone'
  | 'bank'
  | 'account'
  | 'rrn'
  | 'isAgreed'
>;

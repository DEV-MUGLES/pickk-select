import { IUser } from '..';
import { IItem } from '../Item/IItem';
import { IAnswer } from './IAnswer';
import { QuestionType, BuyerInfo, ListRequestParams } from '@src/types';

export interface IQuestion {
  id: number;
  item: IItem & { brandName: string };
  user: Pick<IUser, 'id' | 'name' | 'email'>;
  answers: IAnswer[];
  isVisible: boolean;
  recentOrderItem?: {
    merchantUid: string;
    buyerInfo: BuyerInfo;
  };
  type: QuestionType;
  title: string;
  content: string;
  phone: string;
  isSecret: boolean;
  createdAt: string;
  updatedAt: string;
}

export type IQuestionInputDTO = Pick<
  IQuestion,
  'type' | 'title' | 'content' | 'isSecret' | 'phone'
> & { item: number };

export type QuestionListRequestParams = ListRequestParams & {
  item?: number;
  isMine?: boolean;
};

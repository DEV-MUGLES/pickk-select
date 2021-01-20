import { IUser } from '../User/IUser';

export interface IAnswer {
  id: number;
  content: string;
  user: Pick<IUser, 'id' | 'name' | 'email'>;
  isByPartner: boolean;
  brandName: string;
  createdAt: string;
}

export type IAnswerInputDTO = { content: string };

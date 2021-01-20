import { IReview } from '..';
import { ILookItem, ILookItemInputDTO } from './ILookItem';
import { LookImage, StyleTag } from '@src/types';

export interface ILook extends IReview {
  lookItems: Omit<ILookItem, 'look'>[];
  images: LookImage[];
  styleTags: StyleTag[];
}

export type ILookInputDTO = Pick<ILook, 'title' | 'isVisible' | 'content'> & {
  lookItems: ILookItemInputDTO[];
  images: Array<{
    image: string;
  }>;
  styleTagIds: number[];
};

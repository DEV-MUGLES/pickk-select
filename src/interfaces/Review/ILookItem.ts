import { IReviewItem, IReviewItemInputDTO } from '..';

export interface ILookItem extends IReviewItem {
  look: number;
}

export type ILookItemInputDTO = IReviewItemInputDTO;

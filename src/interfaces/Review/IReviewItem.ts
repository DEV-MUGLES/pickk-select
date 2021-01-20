import { RawDraftContentState } from 'draft-js';

import { IItem } from '..';
import { ItemTag, _StyleTag } from '@src/types';

export interface IReviewItem {
  id: number;
  followersCount: number;
  itemId: number;
  order: number;
  purchaseUrl?: string;
  score: number;
  // @TODO 포스트아이템 styleTag 제거하고나서 네이밍 변경해야함
  styleTag?: _StyleTag;
  size?: string;
  isPurchasable: boolean;
  createdAt: string;
  updatedAt: string;
  item: IItem;
  itemTags: ItemTag[];
  contents: RawDraftContentState;
}

export type IReviewItemInputDTO = Pick<
  IReviewItem,
  'score' | 'styleTag' | 'size' | 'isPurchasable' | 'itemId'
> & {
  itemTagIds: number[];
};

import { ReviewType } from '@src/types';
import { IItem } from '..';

export interface IItemPoint {
  reviewId: number;
  reviewItemId: number;
  reviewType: ReviewType;
  item: Pick<
    IItem,
    | 'id'
    | 'name'
    | 'imageUrl'
    | 'originalPrice'
    | 'salePrice'
    | 'subsDiscountRate'
    | 'subsDiscountAmount'
    | 'brand'
  >;
  title: string;
  viewCount: number;
  purchasedCount: number;
  createdAt: string;
  revenue: number;
}

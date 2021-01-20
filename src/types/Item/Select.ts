import { ListRequestParams, Address } from '..';
import { IItem } from '@src/interfaces';

export type SelectItem = Pick<
  IItem,
  | 'id'
  | 'name'
  | 'sizeImage'
  | 'originalPrice'
  | 'salePrice'
  | 'imageUrl'
  | 'purchaseUrl'
  | 'isSoldout'
  | 'averageScore'
  | 'isSubsDiscountable'
  | 'subsDiscountRate'
  | 'subsDiscountAmount'
  | 'isStockManaged'
  | 'createdAt'
  | 'updatedAt'
  | 'brand'
  | 'itemMajorType'
  | 'itemMinorType'
  | 'itemFinalType'
> & {
  isRecommended?: boolean;
  hits?: number;
};

export type SelectListRequestParams = Partial<ListRequestParams> & {
  id?: number;
  followed_by?: number;
  is_partner?: boolean;
  ids?: number;
  maxItemCount?: number;
  itemMajorTypeId?: number;
  itemMinorTypeId?: number;
  itemFinalTypeId?: number;
};

export type ReviewRequestForm = {
  productId: number;
  name: string;
  snsLink: string;
  content: string;
  postExpectingDate: string;
  address: Address;
};

import { IBrand } from './IBrand';
import {
  ItemImage,
  ItemMajorType,
  ItemMinorType,
  ItemFinalType,
  Digest,
  ItemTag,
} from '@src/types';
import { SelectItem } from '@src/types';

export interface IItem {
  id: number;
  followersCount: number;
  itemImages: ItemImage[];
  subsDiscountRate: number;
  subsDiscountAmount: number;
  brand: IBrand;
  popularDigest: Digest;
  name: string;
  code?: string;
  skuPrefix?: string;
  originalPk: number;
  groupId?: number;
  sizeImage?: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  purchaseUrl?: string;
  isSoldout: boolean;
  averageScore: string;
  pickCount: number;
  isInternalized: boolean;
  isActive: boolean;
  doNotCrawl: boolean;
  isSubsDiscountable: boolean;
  isStockManaged: boolean;
  itemTags: ItemTag[];
  isReviewed: boolean;
  noticeMessage?: string;
  createdAt: string;
  updatedAt: string;
  itemMajorType?: ItemMajorType;
  itemMinorType?: ItemMinorType;
  itemFinalType?: ItemFinalType;
  hits?: number;
  matchingScore?: number;
  isPurchasable?: boolean;
}

export type IItemCustomInputDTO = Pick<
  IItem,
  'name' | 'originalPrice' | 'salePrice' | 'imageUrl' | 'purchaseUrl'
> & {
  brand: {
    nameKor: string;
    nameEng?: string;
  };
  itemMajorTypeId?: number;
  itemMinorTypeId?: number;
  itemFinalTypeId?: number;
};

export type IItemSelectDTO = Pick<
  IItem,
  | 'id'
  | 'subsDiscountRate'
  | 'subsDiscountAmount'
  | 'brand'
  | 'name'
  | 'sizeImage'
  | 'originalPrice'
  | 'salePrice'
  | 'imageUrl'
  | 'purchaseUrl'
  | 'isSoldout'
  | 'averageScore'
  | 'isSubsDiscountable'
  | 'isStockManaged'
  | 'createdAt'
  | 'updatedAt'
  | 'itemMajorType'
  | 'itemMinorType'
  | 'itemFinalType'
> &
  Pick<SelectItem, 'isRecommended' | 'hits'>;

export type IItemUpdateDTO = {
  itemMajorTypeId: number;
  itemMinorTypeId: number;
};

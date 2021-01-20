import { IReviewItem, IUserReadDTO, IItem, IUser } from '@src/interfaces';
import { ReviewType } from '../Post/Post';
import { ListRequestParams } from '..';

export type PriceVariant = {
  option: number[];
  price: number;
};

export type ItemListParams = {
  brand?: number;
  isAnswered?: boolean;
  isReviewd?: boolean;
  o?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'random';
  limit?: number;
  offset?: number;
};

export type ItemImage = {
  type?: ItemImageType;
  imageUrl: string;
  order: number;
};

export type ItemMajorType = {
  id: number;
  name: string;
  code?: string;
};
export type ItemMinorType = ItemMajorType & { itemMajorType?: number };
export type ItemFinalType = ItemMinorType & { itemMinorType?: number };

export enum ItemImageType {
  Default = 'DEFAULT',
  Content = 'CONTENT',
  Preview = 'PREVIEW',
  Thumbnail = 'THUMBNAIL',
}

export type ItemReviewRequest = {
  name: string;
  snsLink: string;
  phone: string;
  email: string;
  address: string;
  itemInfo: string;
  postExpectingDate: string;
};

export type ItemOption = {
  itemIsSoldout: boolean;
  options: {
    values: {
      [valueName: string]: string[];
    };
    isSoldout: Array<number[]>;
    optionPriceVariants: PriceVariant[];
  };
  products: {
    [productName: string]: Product;
  };
  hasNoOptions: boolean;
};

export type Product = {
  priceVariant: number;
  stockCount: number;
  values: string[];
};

export enum BenefitState {
  recommendSub = '구독 요청',
  lowestPrice = '온라인 최저가',
  applyingSubDiscount = '구독 할인 적용중',
  noBenefit = '혜택없음',
}

export type Digest = Pick<
  IReviewItem,
  'score' | 'styleTag' | 'createdAt' | 'isPurchasable'
> & {
  user: Pick<
    IUserReadDTO,
    'id' | 'name' | 'profileImageUrl' | 'followersCount'
  >;
  type: ReviewType;
  id: number;
};

export type ItemDiscountsInfo = {
  id: number;
  subsDiscountRate: number;
  subsDiscountAmount: number;
  itemDiscounts: Discount[];
};

export type Discount = {
  id: number;
  user: IUserReadDTO;
  subsDiscountRate: number;
  subsDiscountAmount: number;
  discountRate: number;
  startAt: string;
  endAt: string;
};

export type ItemListRequestParams = ListRequestParams &
  Partial<{
    brandId: number;
    isAnswered: boolean;
    isReviewed: boolean;
    keyword: string;
    url: string;
    ids: number[];
    o:
      | 'created_at'
      | '-created_at'
      | 'updated_at'
      | 'newly_reviewed'
      | '-updated_at'
      | 'random'
      | 'popular';
    reviewedBy: number;
    itemMajorTypeId: number;
    itemMinorTypeId: number;
    itemFinalTypeId: number;
    itemMajorTypeIds: number[];
    itemMinorTypeIds: number[];
    itemFinalTypeIds: number[];
    itemTagIds: number[];
    styleTagIds: number[];
    subsDiscountPriceGte: number;
    subsDiscountPriceLte: number;
  }>;

export type ItemSelectsRequestParams = ItemListRequestParams &
  Partial<{
    brandIds: number[];
    followedBy: number;
    itemMajorTypeIds: number[];
    itemMinorTypeIds: number[];
    itemFinalTypeIds: number[];
    isPartner: boolean;
    isRecommended: boolean;
  }>;

export type ItemMatchingsRequestParams = ListRequestParams &
  Partial<{
    id: number;
  }> & {
    itemMinorTypeIds: number[];
  };

export type ItemPricesRequestParams = Partial<{
  brandId: number;
  brandIds: number[];
  isAnswered: boolean;
  isReviewed: boolean;
  keyword: string;
  url: string;
  o:
    | 'created_at'
    | '-created_at'
    | 'updated_at'
    | 'newly_reviewed'
    | '-updated_at'
    | 'random'
    | 'popular';
  reviewedBy: number;
  followedBy: number;
  itemMajorTypeId: number;
  itemMinorTypeId: number;
  itemFinalTypeId: number;
  itemMajorTypeIds: number[];
  itemMinorTypeIds: number[];
  itemFinalTypeIds: number[];
  salePriceGte: number;
  salePriceLte: number;
  isPartner: boolean;
  isRecommended: boolean;
  itemTagIds: number[];
  styleTagIds: number[];
}>;

export type RecommendationItems = {
  user: IUser;
  items: IItem[];
  order: number;
  title: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ItemPackage = {
  items: IItem[];
  name: string;
  code: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

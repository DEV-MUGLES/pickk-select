import { IItem } from '@src/interfaces';

export type ItemCardGlobalProps = Pick<
  IItem,
  | 'id'
  | 'brand'
  | 'name'
  | 'imageUrl'
  | 'originalPrice'
  | 'salePrice'
  | 'subsDiscountAmount'
  | 'isPurchasable'
> &
  Partial<Pick<IItem, 'isSoldout' | 'matchingScore' | 'itemTags'>> & {
    style?: React.CSSProperties;
    onClick?: (item?: Partial<IItem>) => void;
  };

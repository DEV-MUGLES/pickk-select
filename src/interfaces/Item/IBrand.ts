import { ExchangePolicy, ShippingPolicy, StyleTag } from '@src/types';
import { SelectItem } from '@src/types';

export interface IBrand {
  id: number;
  nameKor: string;
  nameEng?: string;
  isPartner: boolean;
  profileImageUrl: string;
  bannerImageUrl: string;
  siteUrl?: string;
  description?: string;
  defaultDiscountRate: number;
  maxDiscountRate?: number;
  minDiscountRate?: number;
  csNumber?: string;
  csEmail?: string;
  createdAt: string;
  updatedAt: string;
  exchangePolicy: ExchangePolicy;
  shippingPolicy: ShippingPolicy;
  styleTags?: StyleTag[];
}

export type IBrandSelectDTO = Partial<
  Omit<IBrand, 'csEmail' | 'exchangePolicy' | 'shippingPolicy'> & {
    items?: SelectItem[];
  }
>;

export type IBrandNameDTO = Pick<
  IBrand,
  'id' | 'nameKor' | 'nameEng' | 'isPartner'
> & {
  isFollowing: boolean;
};

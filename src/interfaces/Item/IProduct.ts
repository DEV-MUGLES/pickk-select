import { IItem } from './IItem';

export interface IProduct {
  id?: number;
  options?: string[];
  priceVariant?: number;
  sku?: string;
  stock?: number;
  soldoutByBrand?: boolean;
  createdAt?: string;
  updatedAt?: string;
  brand: number;
  item: IItem;
}

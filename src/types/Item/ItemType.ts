import { ListRequestParams } from '../';

export type ItemTypes = {
  id: number;
  name: string;
  code?: string;
  image?: string;
};
export type ItemFinalTypes = ItemTypes;
export type ItemMinorTypes = ItemTypes & { itemFinalTypes: ItemTypes[] };
export type ItemMajorTypes = ItemMinorTypes & {
  itemMinorTypes: ItemMinorTypes[];
};
export type ItemTypeListRequestParams = ListRequestParams &
  Partial<{
    name: string;
    code: string;
  }>;

export type ItemTypeUnit = {
  id: {
    itemMajorTypeId?: number;
    itemMinorTypeId?: number;
    itemFinalTypeId?: number;
  };
  type: ItemMajorTypes | ItemMinorTypes | ItemFinalTypes;
};

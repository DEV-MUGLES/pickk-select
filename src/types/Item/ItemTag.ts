import { ListRequestParams } from '../';

export type ItemTag = {
  id: number;
  image: string;
  itemMinorTypeId: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ItemTagListRequestParams = Partial<ListRequestParams> & {
  itemMinorTypeId?: number;
  itemMinorTypeIds?: number[];
  name?: string;
};

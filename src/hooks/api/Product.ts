import useRequest from '../swr/useRequest';

import { IProduct } from '@src/interfaces';
import { readConfig } from '@src/services/api/Product/config';

export const useProduct = (id: number, initialData?: any) =>
  useRequest<IProduct>(readConfig(id), { initialData });

import axios from 'axios';

import { IItemSize } from '@src/interfaces';
import { readConfig } from './config';

export const read = async (id: number): Promise<IItemSize> =>
  axios(readConfig(id)).then((res) => res.data);

const ItemSizeService = {
  read,
};

export default ItemSizeService;

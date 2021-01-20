import axios from 'axios';
import { IncomingMessage } from 'http';

import { IProduct } from '@src/interfaces';
import { readConfig } from './config';

export const read = async (
  id: number,
  req?: IncomingMessage
): Promise<IProduct> => axios(readConfig(id, req)).then((res) => res.data);

const ProductService = {
  read,
};

export default ProductService;

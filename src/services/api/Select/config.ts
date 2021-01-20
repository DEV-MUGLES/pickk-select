import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

import { SelectListRequestParams } from '@src/types';

export const listConfig = (
  params?: SelectListRequestParams,
  req?: IncomingMessage
) => baseConfig().get('/selects/', { params });

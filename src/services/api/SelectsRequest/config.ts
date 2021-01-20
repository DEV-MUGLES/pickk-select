import { IncomingMessage } from 'http';
import { baseConfig } from '../Api';

import { SelectsRequestForm } from '@src/types';

export const createConfig = (
  selectsRequestForm: SelectsRequestForm,
  req?: IncomingMessage
) => baseConfig(true, req).post('/selects_requests/', selectsRequestForm);

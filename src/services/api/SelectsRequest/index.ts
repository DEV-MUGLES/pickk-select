import axios from 'axios';
import { IncomingMessage } from 'http';

import { SelectsRequestForm } from '@src/types';
import { createConfig } from './config';

const create = async (
  selectsRequestForm: SelectsRequestForm,
  req?: IncomingMessage
): Promise<void> =>
  axios(createConfig(selectsRequestForm, req)).then((res) => res.data);

const SelectsRequestService = {
  create,
};

export default SelectsRequestService;

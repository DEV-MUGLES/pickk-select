import axios from 'axios';

import { IBrandSelectDTO } from '@src/interfaces';
import { SelectListRequestParams, ListResponse } from '@src/types';
import { listConfig } from './config';

const list = async (
  params: SelectListRequestParams
): Promise<ListResponse<IBrandSelectDTO>> =>
  axios(listConfig(params)).then((res) => res.data);

const SelectService = {
  list,
};

export default SelectService;

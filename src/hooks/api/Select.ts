import useRequest from '../swr/useRequest';
import { IBrandSelectDTO } from '@src/interfaces';
import { listConfig } from '@src/services/api/Select/config';
import { SelectListRequestParams } from '@src/types';
import { ListResponse } from '@src/types';

export const useSelectList = (
  params?: SelectListRequestParams,
  initialData?: any
) =>
  useRequest<ListResponse<IBrandSelectDTO>>(listConfig(params), {
    initialData,
  });

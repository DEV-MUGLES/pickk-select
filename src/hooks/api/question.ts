import useRequest from '../swr/useRequest';

import { IQuestion, QuestionListRequestParams } from '@src/interfaces';
import { ListResponse } from '@src/types';
import { readConfig, listConfig } from '@src/services/api/Question/config';

export const useQuestionList = (
  params: QuestionListRequestParams,
  initialData?: any
) =>
  useRequest<ListResponse<IQuestion>>(listConfig(params), {
    initialData,
  });

export const useQuestion = (id: number, initialData?: any) =>
  useRequest<IQuestion>(readConfig(id), initialData);

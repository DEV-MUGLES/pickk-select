import useRequest from '../swr/useRequest';

import { ListResponse, ReviewType } from '@src/types';
import { IItemPoint } from '@src/interfaces/Points/IItemPoint';
import { IPoint } from '@src/interfaces/Points/IPoint';
import {
  listConfig,
  lookReadConfig,
  postReadConfig,
  lookPointsConfig,
  postPointsConfig,
} from '@src/services/api/ItemPoint/config';

export const useItemPoints = (initialData?) =>
  useRequest<ListResponse<IItemPoint>>(listConfig(), { initialData });

export const useItemPointsRead = (
  type: ReviewType,
  id: number,
  initialData?: any
) =>
  type === ReviewType.Look
    ? useRequest<IItemPoint>(lookReadConfig(id), { initialData })
    : useRequest<IItemPoint>(postReadConfig(id), { initialData });

export const useItemPointsPostPoints = (
  type: ReviewType,
  id: number,
  initialData?: any
) =>
  type === ReviewType.Look
    ? useRequest<ListResponse<IPoint>>(lookPointsConfig(id), {
        initialData,
      })
    : useRequest<ListResponse<IPoint>>(postPointsConfig(id), {
        initialData,
      });

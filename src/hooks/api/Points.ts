import useRequest from '../swr/useRequest';

import { ListResponse } from '@src/types';
import { IPoint } from '@src/interfaces/Points/IPoint';
import { listConfig, previewConfig } from '@src/services/api/Point/config';
import { PointsPreview } from '@src/types';

export const usePoints = (initialData?) =>
  useRequest<ListResponse<IPoint>>(listConfig(), { initialData });

export const usePointsPreview = (initialData?) =>
  useRequest<PointsPreview>(previewConfig(), { initialData });

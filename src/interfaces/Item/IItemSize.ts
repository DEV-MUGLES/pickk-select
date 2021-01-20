import {
  ItemSizeMeasurement,
  ItemSizeRecommendation,
  ItemSizeType,
} from '@src/types';

export interface IItemSize {
  type: ItemSizeType;
  measurements: ItemSizeMeasurement[];
  recommendations: ItemSizeRecommendation[];
}

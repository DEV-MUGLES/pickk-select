import { ItemCardGlobalProps } from '../props';

export type ItemCardColProps = ItemCardGlobalProps & {
  pickk?: boolean;
  isRouting?: boolean;
  index?: number;
  hasRank?: boolean;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
};

export enum ItemSizeType {
  Top = 'TOP',
  Bottom = 'BOTTOM',
  Unknown = 'UNKNOWN',
}

export type ItemSizeMeasurement = {
  optionValue: string;
  sizes: ItemSizeData[];
};

export type ItemSizeData = {
  label: string;
  value: string;
};

export type ItemSizeRecommendation = {
  height: number;
  weight: number;
  optionValue: string;
};

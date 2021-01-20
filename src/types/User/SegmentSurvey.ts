export type SegmentSurveyAnswer = {
  id: number;
  order: number;
  text: string;
  description: string;
  image?: string;
  result?: number;
  next?: number;
};

export enum SegmentSurveyType {
  Item = 'ITEM',
  Style = 'STYLE',
}

import { SegmentSurveyAnswer, SegmentSurveyType } from '@src/types';

export interface ISegmentSurvey {
  id: number;
  answers: SegmentSurveyAnswer[];
  text: string;
  type: SegmentSurveyType;
  isFirst?: number;
  step?: number;
}

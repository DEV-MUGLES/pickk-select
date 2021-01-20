import { SegmentSurveyType } from '@src/types';
import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';

export const readConfig = (id: number, req?: IncomingMessage) =>
  id ? baseConfig(true, req).get(`/segment_surveys/${id}/`) : null;

export const initiateConfig = (
  segmentSurveyType: SegmentSurveyType,
  req?: IncomingMessage
) => baseConfig(true, req).get(`/segment_surveys/${segmentSurveyType}/`);

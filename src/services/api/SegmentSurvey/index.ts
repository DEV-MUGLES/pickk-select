import axios from 'axios';
import { IncomingMessage } from 'http';

import { initiateConfig, readConfig } from './config';
import { ISegmentSurvey } from '@src/interfaces/User/ISegmentSurvey';
import { SegmentSurveyType } from '@src/types';

const read = async (
  id: number,
  req?: IncomingMessage
): Promise<ISegmentSurvey> =>
  axios(readConfig(id, req)).then((res) => res.data);

const initiate = async (
  segmentSurveyType: SegmentSurveyType,
  req?: IncomingMessage
): Promise<ISegmentSurvey> =>
  axios(initiateConfig(segmentSurveyType, req)).then((res) => res.data);

const SegmentSurveyService = {
  read,
  initiate,
};

export default SegmentSurveyService;

import { useState, useEffect } from 'react';
import { IncomingMessage } from 'http';
import useRequest from '../swr/useRequest';

import { ISegmentSurvey } from '@src/interfaces/User/ISegmentSurvey';
import { SegmentSurveyType } from '@src/types';
import {
  initiateConfig,
  readConfig,
} from '@src/services/api/SegmentSurvey/config';

export const useSegmentSurveyInitiate = (req?: IncomingMessage) =>
  useRequest<ISegmentSurvey>(initiateConfig(SegmentSurveyType.Style, req));

export const useSegmentSurvey = (id: number, req?: IncomingMessage) =>
  useRequest<ISegmentSurvey>(!!id && readConfig(id, req));

export const useSurveyData = () => {
  const [userInput, setUserInput] = useState<number[]>([]);

  const { data: initData } = useSegmentSurveyInitiate();
  const { data: surveyData } = useSegmentSurvey(
    userInput.length >= 2 ? userInput[userInput.length - 1] : null
  );

  useEffect(() => {
    if (initData && userInput.length === 0) push(initData.id);
  }, [initData?.id]);

  const pop = () => {
    const result = userInput.slice(0, userInput.length - 1);
    setUserInput(result);
  };

  const push = (input: number) => {
    setUserInput([...userInput, input]);
  };

  return {
    data: surveyData || initData,
    userInput,
    movePrev: pop,
    moveNext: push,
  };
};

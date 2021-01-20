import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import {
  QuestionListRequestParams,
  IQuestionInputDTO,
  IAnswerInputDTO,
} from '@src/interfaces';

export const listConfig = (
  params: QuestionListRequestParams,
  req?: IncomingMessage
) => baseConfig(true, req).get('/questions/', { params });

export const createConfig = (
  questionInputDTO: IQuestionInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post('/questions/', questionInputDTO);

export const readConfig = (id: number) => baseConfig().get(`/questions/${id}/`);

export const deleteConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/questions/${id}/`);

export const anwserCreateConfig = (
  questionPk: number,
  answerInputDTO: IAnswerInputDTO,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(
    `/questions/${questionPk}/answers/`,
    answerInputDTO
  );

export const answerDeleteConfig = (
  id: number,
  quetionPk: number,
  req?: IncomingMessage
) => baseConfig(true, req).delete(`/questions/${quetionPk}/answers/${id}/`);

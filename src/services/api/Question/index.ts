import axios from 'axios';
import { IncomingMessage } from 'http';

import {
  listConfig,
  readConfig,
  createConfig,
  deleteConfig,
  anwserCreateConfig,
  answerDeleteConfig,
} from './config';
import {
  QuestionListRequestParams,
  IQuestion,
  IQuestionInputDTO,
  IAnswerInputDTO,
  IAnswer,
} from '@src/interfaces';
import { ListResponse } from '@src/types';

export const list = async (
  params: QuestionListRequestParams,
  req?: IncomingMessage
): Promise<ListResponse<IQuestion>> =>
  axios(listConfig(params, req)).then((res) => res.data);

export const create = async (
  questionInputDTO: IQuestionInputDTO,
  req?: IncomingMessage
) => axios(createConfig(questionInputDTO, req)).then((res) => res.data);

export const read = async (id: number): Promise<IQuestion> =>
  axios(readConfig(id)).then((res) => res.data);

export const deleteQuestion = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(deleteConfig(id, req)).then((res) => res.data);

export const answerCreate = async (
  questionPk: number,
  answerInputDTO: IAnswerInputDTO,
  req?: IncomingMessage
): Promise<IAnswer> =>
  axios(anwserCreateConfig(questionPk, answerInputDTO, req)).then(
    (res) => res.data
  );

export const answerDelete = async (
  id: number,
  questionPk: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(answerDeleteConfig(id, questionPk, req)).then((res) => res.data);

const QuestionService = {
  list,
  create,
  read,
  deleteQuestion,
  answerCreate,
  answerDelete,
};

export default QuestionService;

import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import { IUserInputDTO } from '@src/interfaces';
import { ProviderType, AppleClientType } from '@src/types';

export const signInConfig = (data: {
  providerType: ProviderType;
  providerId: string;
}) => baseConfig().post('/auth/sign_in/', data);

export const signUpConfig = (userInputDTO: Partial<IUserInputDTO>) =>
  baseConfig().post('/auth/sign_up/', userInputDTO);

export const signUpCheckDuplicateConfig = (params: {
  name?: string;
  email?: string;
}) => baseConfig().get('/auth/sign_up/check_duplicate/', { params });

export const verifyConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).post('/auth/verify/');

export const appleSignInConfig = (clientType: AppleClientType, code: string) =>
  baseConfig().post('/auth/apple/sign_in/', { clientType, code });

export const phoneVerifyConfig = (phoneNum: string) =>
  baseConfig().post('/auth/phone_verify/', { phoneNum });

export const phoneVerifyCompleteConfig = (params: {
  phoneNum: string;
  code: string;
}) => baseConfig().post('/auth/phone_verify_complete/', params);

import axios from 'axios';
import { mutate } from 'swr';

import {
  signUpCheckDuplicateConfig,
  signUpConfig,
  signInConfig,
  verifyConfig,
  appleSignInConfig,
  phoneVerifyCompleteConfig,
  phoneVerifyConfig,
} from './config';
import { meReadConfig } from '../User/config';
import { IUserInputDTO } from '@src/interfaces';
import { ProviderType, AppleClientType } from '@src/types';
import { setCookie, removeCookie } from '@src/lib/utils';
import { IncomingMessage } from 'http';

const signIn = async (data: {
  providerType: ProviderType;
  providerId: string;
}) =>
  axios(signInConfig(data)).then((res) => {
    const { access, refresh } = res.data;
    setCookie('accessToken', access);
    setCookie('refreshToken', refresh);
    return res.data;
  });

const signOut = () => {
  removeCookie('accessToken');
  removeCookie('refreshToken');
  mutate(JSON.stringify(verifyConfig()));
  mutate(JSON.stringify(meReadConfig()), { isLoggedIn: false });
};

const signUp = async (userInputDTO: Partial<IUserInputDTO>): Promise<void> =>
  axios(signUpConfig(userInputDTO)).then((res) => {
    const { access, refresh } = res.data;
    setCookie('accessToken', access);
    setCookie('refreshToken', refresh);
  });

const signUpCheckDuplicate = async (params: {
  name?: string;
  email?: string;
}): Promise<boolean> =>
  axios(signUpCheckDuplicateConfig(params))
    .then(() => true)
    .catch(() => false);

const verify = async (
  req?: IncomingMessage
): Promise<{ id: number; name: string }> =>
  axios(verifyConfig(req)).then((res) => res.data);

const appleSignIn = async (
  clientType: AppleClientType,
  code: string
): Promise<{ providerType: ProviderType; providerId: string }> =>
  axios(appleSignInConfig(clientType, code)).then((res) => res.data);

const phoneVerify = async (phoneNum: string): Promise<void> =>
  axios(phoneVerifyConfig(phoneNum)).then((res) => res.data);

const phoneVerifyComplete = async (params: {
  phoneNum: string;
  code: string;
}): Promise<void> =>
  axios(phoneVerifyCompleteConfig(params)).then((res) => {
    console.log(res.data);
    return res.data;
  });

const AuthService = {
  signIn,
  signOut,
  signUp,
  signUpCheckDuplicate,
  verify,
  appleSignIn,
  phoneVerify,
  phoneVerifyComplete,
};

export default AuthService;

import { AxiosError } from 'axios';

import useRequest, { Return } from '../swr/useRequest';
import { IUser, IUserReadDTO } from '@src/interfaces';
import {
  readConfig,
  meReadConfig,
  isFollowingConfig,
  meFollowingUsersConfig,
} from '@src/services/api/User/config';
import { getCookie } from '@src/lib/utils';
import { useEffect } from 'react';

export const useMe = (initialData?): Return<IUser, unknown> => {
  const hasToken = !!getCookie('accessToken');

  const {
    data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  } = useRequest<IUser>(hasToken ? meReadConfig() : null, {
    initialData,
    revalidateOnFocus: true,
    refreshInterval: 10000,
  });

  if (!hasToken) {
    return {
      data: { isLoggedIn: false } as IUser,
      error: { name: 'user' } as AxiosError<unknown>,
      response: null,
      isValidating: false,
      revalidate: null,
      mutate: null,
    };
  }

  return {
    data:
      data && data.isLoggedIn !== false
        ? { ...data, isLoggedIn: true }
        : ({ isLoggedIn: false } as IUser),
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
};

export const useUser = (id: number, initialData?: any) =>
  useRequest<IUserReadDTO>(readConfig(id), { initialData });

export const useUserIsFollowing = (id: number, initialData?: any) =>
  useRequest<{ isFollowing: boolean }>(isFollowingConfig(id), { initialData });

export const useMeFollowingUsers = () =>
  useRequest<IUser[]>(meFollowingUsersConfig());

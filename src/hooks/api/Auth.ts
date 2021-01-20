import useRequest from '../swr/useRequest';
import { verifyConfig } from '@src/services/api/Auth/config';
import { getCookie } from '@src/lib/utils';
import { useEffect } from 'react';

export const useAuthVerify = (initialData?: any, swrConfig: any = {}) => {
  const hasToken = !!getCookie('accessToken');

  const { data, error } = useRequest<{ id: number; name: string }>(
    hasToken ? verifyConfig() : null,
    {
      initialData,
      revalidateOnFocus: true,
      refreshInterval: 10000,
      ...swrConfig,
    }
  );

  if (!hasToken) {
    return {
      data: null,
      error: true,
    };
  }
  return { data, error };
};

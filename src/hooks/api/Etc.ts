import useRequest from '../swr/useRequest';
import { homeModalContentsConfig } from '@src/services/api/Etc/config';
import { HomeModalContent } from '@src/types';

export const useHomeModalContents = () =>
  useRequest<HomeModalContent[]>(homeModalContentsConfig());

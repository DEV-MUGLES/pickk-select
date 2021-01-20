import useRequest from '../swr/useRequest';

import { IWithdrawal } from '@src/interfaces/Points/IWithdrawal';
import { readConfig } from '@src/services/api/Withdrawal/config';

export const useWithdrawal = (initialData?) =>
  useRequest<IWithdrawal>(readConfig(), { initialData });

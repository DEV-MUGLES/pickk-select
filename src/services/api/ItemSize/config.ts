import { baseConfig } from '../Api';

export const readConfig = (id: number) =>
  baseConfig(true).get(`/items/${id}/size/`);

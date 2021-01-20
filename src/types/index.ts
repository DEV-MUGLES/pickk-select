export * from './User';

export * from './Item';

export * from './Order';

export * from './Post';

export * from './Api';
export * from './ItemStore';
export * from './ReferStore';
export * from './ShopDrawer';
export * from './PageProps';
export * from './Etc';

export type RequiredLiteralKeys<T> = {
  [K in keyof T]-?: string extends K
    ? never
    : number extends K
    ? never
    : {} extends Pick<T, K>
    ? never
    : K;
} extends { [_ in keyof T]-?: infer U }
  ? U extends keyof T
    ? U
    : never
  : never;

export type OptionalLiteralKeys<T> = {
  [K in keyof T]-?: string extends K
    ? never
    : number extends K
    ? never
    : {} extends Pick<T, K>
    ? K
    : never;
} extends { [_ in keyof T]-?: infer U }
  ? U extends keyof T
    ? U
    : never
  : never;

export type IndexKeys<T> = string extends keyof T
  ? string
  : number extends keyof T
  ? number
  : never;

export type ListRequestParams = {
  limit: number;
  offset: number;
};

export type ListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

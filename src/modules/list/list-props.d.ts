/* eslint-disable @typescript-eslint/no-explicit-any */
export type ListProps = {
  requestConfig: any;
  ListItem: React.FunctionComponent<any>;
  filter?: any;
  initialData?: any;
  Skeleton?: React.FunctionComponent<{ style?: React.CSSProperties }>;
  NoResult?: React.FunctionComponent;
  listFilter?: (data: any) => boolean;
  listItemProp?: any;
  loading?: boolean;
  setLoading?: React.Dispatch<SetStateAction<boolean>>;
  style?: React.CSSProperties;
  pageSize?: number;
  routing?: boolean;
  pageDeps?: any[];
};

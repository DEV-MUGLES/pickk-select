import { useSWRPages, ConfigInterface } from 'swr';
import { AxiosResponse, AxiosError } from 'axios';
import useAxiosRequest from './useAxiosRequest';
import React, { useEffect, SetStateAction } from 'react';

export interface Config<Data = unknown, Error = unknown>
  extends Omit<
    ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>,
    'initialData'
  > {
  initialData?: Data;
}

export interface PageResponse<Data> {
  count: number;
  next: string;
  previous: string;
  results: Data[];
}

export default function usePageRequest<Data = unknown, Error = unknown>(
  requestConfig: any,
  ListItem: any,
  listItemProp,
  filter?: any,
  { initialData, ...config }: Config<PageResponse<Data>, Error> = {},
  pageSize = 10,
  Skeleton?: React.FunctionComponent,
  NoResult?: React.FunctionComponent,
  listFilter?: (data: any) => boolean,
  deps = [],
  loading?: boolean,
  setLoading: React.Dispatch<SetStateAction<boolean>> = () => null
) {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages<
    number,
    AxiosResponse<PageResponse<Data>>,
    AxiosError<Error>
  >(
    requestConfig &&
      JSON.stringify(requestConfig({ offset: 0, limit: pageSize, ...filter })),
    ({ offset, withSWR }) => {
      const pageOffset = offset || 0;
      const { data: response, error } = withSWR(
        useAxiosRequest<PageResponse<Data>, Error>(
          requestConfig({ offset: pageOffset, limit: pageSize, ...filter }),
          { initialData: pageOffset === 0 ? initialData : null, ...config }
        )
      );

      useEffect(() => {
        setLoading(false);
      }, [response]);

      if (error) return <></>;
      if (!response || loading) {
        return Skeleton ? <Skeleton /> : <div>loading...</div>;
      }
      if (response.data.count === 0 && NoResult) {
        return <NoResult />;
      }
      return response.data.results
        .filter(listFilter ? listFilter : () => true)
        .map((result, index) => (
          <ListItem
            key={JSON.stringify(result)}
            index={pageOffset + index}
            {...{ ...result, ...listItemProp }}
          />
        ));
    },
    (SWR, index) => {
      // there's no next page
      if (
        !SWR.data ||
        SWR.data?.data.results.length === 0 ||
        SWR.data?.data.results.length < pageSize
      )
        return null;

      // offset = pageCount × pageSize
      return (index + 1) * pageSize;
    },
    [...deps, JSON.stringify(filter), loading]
  );

  return {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore,
  };
}

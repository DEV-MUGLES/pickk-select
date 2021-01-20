import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import IndexIndicator from './index-indicator';
import { P } from '@src/component/atoms';

import useRequest from '@src/hooks/swr/useRequest';
import { ListResponse } from '@src/types';
import { ListProps } from './list-props';

const ITEMS_PER_PAGE = 20;

export type SWRPageListProps = ListProps;

function SWRPageList({
  requestConfig,
  ListItem,
  filter,
  initialData,
  Skeleton,
  NoResult,
  listItemProp = {},
  listFilter,
  loading = false,
  setLoading = () => null,
  style,
  pageSize = ITEMS_PER_PAGE,
  routing = true,
  pageDeps = [],
}: SWRPageListProps) {
  const router = useRouter();

  const [page, setPage] = useState(
    router.query.page ? Number(router.query.page) - 1 : 0
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error, data, isValidating } = useRequest<ListResponse<any>>(
    requestConfig({
      offset: page * pageSize,
      limit: pageSize,
      ...filter,
    }),
    { initialData: page === 0 ? initialData : null }
  );

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page) - 1);
    }
  }, [router.query.page]);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    setPage(router.query.page ? Number(router.query.page) - 1 : 0);
  }, [loading, ...pageDeps]);

  if (!data?.results) {
    return Skeleton ? (
      <>
        <Wrapper>
          <Skeleton />
        </Wrapper>
      </>
    ) : (
      <div>loading...</div>
    );
  }
  if (error) {
    return <p>Error!</p>;
  }

  if (data.results?.length && !loading) {
    return (
      <>
        <Wrapper style={style}>
          {data.results
            .filter(listFilter ? listFilter : () => true)
            .map((result, index) => (
              <ListItem
                {...listItemProp}
                {...result}
                key={result.id}
                index={page * pageSize + index}
              />
            ))}
        </Wrapper>
        <IndexIndicator
          index={page}
          {...{
            setPage,
            count: data.count,
            pageSize,
            requestConfig,
            filter,
            routing,
          }}
        />
      </>
    );
  }
  return NoResult ? (
    <NoResult />
  ) : (
    <NoItemWrapper>
      <P>결과가 없습니다.</P>
    </NoItemWrapper>
  );
}

export default React.memo(SWRPageList);

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const NoItemWrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

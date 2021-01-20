import { useEffect } from 'react';
import styled from 'styled-components';

import { ListProps } from './list-props';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

import usePageRequest from '@src/hooks/swr/usePageRequest';

const ITEMS_PER_PAGE = 20;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SWRScrollListProps = ListProps & { deps?: any[] };

const SWRScrollList = ({
  requestConfig,
  ListItem,
  filter,
  initialData,
  Skeleton,
  NoResult,
  listFilter,
  deps = [],
  listItemProp,
  loading = false,
  setLoading = () => null,
  style,
}: SWRScrollListProps) => {
  const { pages, isLoadingMore, isReachingEnd, loadMore } = usePageRequest(
    requestConfig,
    ListItem,
    listItemProp,
    filter,
    { initialData: initialData },
    ITEMS_PER_PAGE,
    Skeleton,
    NoResult,
    listFilter,
    [...deps, ListItem, filter],
    loading,
    setLoading
  );

  useWindowScroll(isLoadingMore, loadMore);

  return (
    <Wrapper style={style}>
      {pages}
      {!isReachingEnd && !isLoadingMore && (
        <LoadMoreButton onClick={loadMore}>더 보기</LoadMoreButton>
      )}
    </Wrapper>
  );
};

const useWindowScroll = (isLoadingMore, loadMore) => {
  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight } = window;
      const { scrollHeight } = document.body;
      // IE에서는 document.documentElement 를 사용.
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      // 스크롤링 했을때, 브라우저의 가장 밑에서 1000정도 높이가 남았을때에 실행하기위함.
      if (scrollHeight - innerHeight - scrollTop < 1500) {
        if (!isLoadingMore) {
          loadMore();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
};

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-bottom: 3.2rem;
`;

export const LoadMoreButton = styled.div`
  width: fit-content;
  padding: 0.4rem 0.8rem;
  color: ${MIDDLE_GREY};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid ${MIDDLE_GREY};
  border-radius: 9999px;
  margin-top: 0.8rem;
`;

export default SWRScrollList;

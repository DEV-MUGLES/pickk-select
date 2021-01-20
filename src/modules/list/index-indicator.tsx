import React, { SetStateAction, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import ChevronLeftIcon from '@src/asset/icons/common/chevron/left';
import ChevronRightIcon from '@src/asset/icons/common/chevron/right';
import { Row, Clickable, P } from '@src/component/atoms';
import { BLACK, REGULAR_GREY, WHITE } from '@src/component/atoms/colors';

import { constructUrl, getQueryParameters } from '@src/lib/utils/Url';
import { prefetchItem } from '@src/lib/api';

export type ListIndexIndicatorProps = {
  index: number;
  count: number;
  pageSize: number;
  setPage?: React.Dispatch<SetStateAction<number>>;
  requestConfig: any;
  filter: any;
  routing: boolean;
};

const PAGES_PER_VIEW = 5;

export default function ListIndexIndicator({
  index,
  count,
  pageSize,
  setPage,
  requestConfig,
  filter,
  routing,
}: ListIndexIndicatorProps) {
  const router = useRouter();

  useEffect(() => {
    if (index > 0) {
      prefetchItem(
        requestConfig({
          offset: (index - 1) * pageSize,
          limit: pageSize,
          ...filter,
        })
      );
    }
    prefetchItem(
      requestConfig({
        offset: (index + 1) * pageSize,
        limit: pageSize,
        ...filter,
      })
    );
  });

  const handlePageMove = (page) => {
    const pathname = window.location.pathname;
    const href = window.location.href;

    setPage(page);
    if (!routing) return;

    window.scrollTo(0, 0);
    router.push(
      constructUrl(pathname, { ...getQueryParameters(href), page: page + 1 })
    );
  };

  const getIndexButtons = (index, startIndex, endIndex) => {
    return [...Array(endIndex - startIndex)].map((_v, i) => {
      const nowIndex = startIndex + i;
      const selected = nowIndex === index;
      return (
        <I onClick={() => handlePageMove(nowIndex)} selected={selected} key={i}>
          <IndexText selected={selected}>{nowIndex + 1}</IndexText>
        </I>
      );
    });
  };

  if (Math.floor(count / (pageSize + 1)) !== 0) {
    const startIndex = index - (index % PAGES_PER_VIEW);
    const endIndex = Math.min(
      startIndex + PAGES_PER_VIEW,
      Math.floor(count / (pageSize + 1)) + 1
    );
    const havePrev = startIndex !== 0;
    const haveNext = endIndex < Math.floor(count / (pageSize + 1)) + 1;
    return (
      <IndicatorWrapper>
        <I none={!havePrev} chevron>
          {havePrev && (
            <Clickable onClick={() => handlePageMove(startIndex - 1)}>
              <ChevronLeftIcon
                style={{ width: '1.2rem', height: '1.2rem' }}
                fill={BLACK}
              />
            </Clickable>
          )}
        </I>
        {getIndexButtons(index, startIndex, endIndex)}
        <I none={!haveNext} chevron>
          {haveNext && (
            <Clickable onClick={() => handlePageMove(endIndex)}>
              <ChevronRightIcon
                style={{ width: '1.2rem', height: '1.2rem' }}
                fill={BLACK}
              />
            </Clickable>
          )}
        </I>
      </IndicatorWrapper>
    );
  }

  return <></>;
}

const I = styled.i`
  font-style: normal;
  width: 2.4rem;
  height: 2.4rem;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  ${(props: { selected?: boolean; none?: boolean; chevron?: boolean }) => css`
    ${!props.none &&
    `
      &:hover {
        border: 0.1rem solid ${BLACK};
      }
      border: 0.1rem solid ${props.selected ? BLACK : REGULAR_GREY};
    background-color: ${props.selected && !props.chevron && BLACK};`}
  `}
`;

const IndicatorWrapper = styled(Row)`
  && {
    padding: 2.4rem 0;
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    cursor: pointer;
  }
`;

const IndexText = styled(P).attrs({
  level: 1,
})`
  && {
    ${(props: { selected: boolean }) => css`
      font-weight: ${props.selected ? 'bold' : 'medium'};
      color: ${props.selected ? WHITE : BLACK};
    `}
  }
`;

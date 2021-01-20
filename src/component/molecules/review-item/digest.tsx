import React from 'react';
import styled from 'styled-components';

import ReviewItemScore from './score';
import { Labeled, P, Strong } from '@src/component/atoms';

import { IReviewItem } from '@src/interfaces';
import { SALE_RED } from '@src/component/atoms/colors';

export type ReviewItemDigestProps = Pick<
  IReviewItem,
  'score' | 'size' | 'itemTags'
> & {
  style?: React.CSSProperties;
};

export default function ReviewItemDigest({
  score,
  size,
  itemTags,
  style,
}: ReviewItemDigestProps) {
  const DATA = [
    {
      label: '별점',
      children: <ReviewItemScore score={score} />,
    },
    {
      label: '사이즈',
      children: (
        <StyledP>
          <Strong level={2} color={SALE_RED}>
            {size}{' '}
          </Strong>
          사이즈 착용
        </StyledP>
      ),
    },
    {
      label: '스타일',
      children: (
        <Row>
          {itemTags?.map((itemTag) => (
            <StyledP key={itemTag.id}>#{itemTag.name}</StyledP>
          ))}
        </Row>
      ),
    },
  ];

  return (
    <Wrapper style={style}>
      {DATA.map((data) => (
        <StyledLabeled key={data.label} {...data} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.8rem;
  height: fit-content;
  padding-top: 1.6rem;
  margin: 0 auto;
`;

const StyledLabeled = styled(Labeled).attrs(() => ({
  type: 'heavy',
}))`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;

const StyledP = styled(P).attrs(() => ({
  level: 2,
  fontWeight: 'medium',
}))`
  &:not(:last-child) {
    margin-right: 1.2rem;
  }
`;

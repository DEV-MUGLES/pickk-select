import React from 'react';
import styled from 'styled-components';

import StarHalfIcon from '@src/component/atoms/icon/star-half';
import { P, Space } from '@src/component/atoms';
import { BLACK, REGULAR_GREY } from '@src/component/atoms/colors';

import { IPostItem } from '@src/interfaces';

export type ReviewItemScoreProps = Pick<IPostItem, 'score'>;

function ReviewItemScore({ score }: ReviewItemScoreProps) {
  return (
    <Wrapeer>
      {[...Array(5)].map((_, index) => (
        <StarHalfIcon
          key={index}
          style={{ marginRight: '0.2rem', marginBottom: '0.2rem' }}
          fillLeft={index < score ? BLACK : REGULAR_GREY}
          fillRight={index + 0.5 < score ? BLACK : REGULAR_GREY}
        />
      ))}
      <Space direction="ROW" />
      <P level={2} fontWeight="semiBold">
        {score?.toFixed(1)}
      </P>
    </Wrapeer>
  );
}

export default React.memo(ReviewItemScore);

const Wrapeer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

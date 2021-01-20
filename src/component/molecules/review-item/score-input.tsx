import React from 'react';
import styled, { css } from 'styled-components';

import StarHalfIcon from '@src/component/atoms/icon/star-half';
import { P, Space } from '@src/component/atoms';
import { BLACK, REGULAR_GREY } from '@src/component/atoms/colors';

import { IPostItem } from '@src/interfaces';

export type ReviewItemScoreProps = Pick<IPostItem, 'score'> & {
  onChange: (score: number) => void;
};

function ReviewItemScoreInput({ score, onChange }: ReviewItemScoreProps) {
  return (
    <Wrapeer>
      {[...Array(5)].map((_, index) => (
        <StarWrapper key={index}>
          <Label position="left" onClick={() => onChange(index + 0.5)} />
          <Label position="right" onClick={() => onChange(index + 1)} />
          <StarHalfIcon
            style={{
              width: '2rem',
              height: '2rem',
              marginRight: '0.2rem',
              marginBottom: '0.2rem',
            }}
            fillLeft={index < score ? BLACK : REGULAR_GREY}
            fillRight={index + 0.5 < score ? BLACK : REGULAR_GREY}
          />
        </StarWrapper>
      ))}
      <Space direction="ROW" />
      <P level={2} fontWeight="semiBold">
        {(score || 0).toFixed(1)}
      </P>
    </Wrapeer>
  );
}

export default React.memo(ReviewItemScoreInput);

const Wrapeer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StarWrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  width: 50%;
  height: 100%;
  margin: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  ${(props: { position: string }) => css`
    ${props.position === 'left' ? 'left: 0;' : 'right: 0;'}
  `}
`;

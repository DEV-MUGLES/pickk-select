import React from 'react';
import styled from 'styled-components';

import { BLACK, SEMI_LIGHT_GREY } from '@src/component/atoms/colors';

export type ImageSliderIndicatorProps = {
  current: number;
  size: number;
  onChange: (index: number) => void;
};

function ImageSliderIndicator({
  current,
  size,
  onChange,
}: ImageSliderIndicatorProps) {
  const handleBulletClick = (index: number) => () => {
    onChange(index);
  };

  if (size <= 1) {
    return null;
  }

  console.log(size);

  return (
    <Wrapper>
      {[...Array(size)].map((_, index) => (
        <Bullet
          key={index}
          selected={current === index}
          onClick={handleBulletClick(index)}
        />
      ))}
    </Wrapper>
  );
}

export default React.memo(ImageSliderIndicator);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0.8rem auto 0;
`;

const Bullet = styled.div<{ selected: boolean }>`
  height: 0.2rem;
  border-radius: 9999px;
  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  transition: all 0.5s;
  cursor: pointer;

  ${({ selected }) => `
    width: ${selected ? 1.6 : 1.2}rem;
    background-color: ${selected ? BLACK : SEMI_LIGHT_GREY};
  `}
`;

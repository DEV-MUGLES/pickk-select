import React from 'react';
import styled from 'styled-components';

import { ImageSliderIndicatorProps } from './indicator';

import ChevronLeftIcon from '@src/asset/icons/common/chevron/left';
import ChevronRightIcon from '@src/asset/icons/common/chevron/right';

import { BLACK, WHITE } from '@src/component/atoms/colors';

type ControlButtonAttach = 'left' | 'right';

const chevronStyle = {
  width: '1.2rem',
  height: '1.2rem',
};

const chevronFill = WHITE;

function ImageSliderControl({
  current,
  size,
  onChange,
}: ImageSliderIndicatorProps) {
  const handleButtonClick = (attach: ControlButtonAttach) => () => {
    onChange(attach === 'left' ? current - 1 : current + 1);
  };

  return (
    <>
      {['left', 'right'].map((attach) => {
        const isExist = attach === 'left' ? current > 0 : current < size - 1;

        const CheveronIcon =
          attach === 'left' ? ChevronLeftIcon : ChevronRightIcon;

        if (!isExist) {
          return null;
        }
        return (
          <ButtonWrapper
            attach={attach as ControlButtonAttach}
            onClick={handleButtonClick(attach as ControlButtonAttach)}
          >
            <CheveronIcon style={chevronStyle} fill={chevronFill} />
          </ButtonWrapper>
        );
      })}
    </>
  );
}

export default React.memo(ImageSliderControl);

const ButtonWrapper = styled.div<{ attach: ControlButtonAttach }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s;

  border-radius: 50%;

  background-color: ${BLACK};
  opacity: 0.85;
  cursor: pointer;

  ${({ attach }) => `
    ${attach}: 1.2rem;
    padding: ${
      attach === 'left'
        ? '0.4rem 0.5rem 0.4rem 0.3rem'
        : '0.4rem 0.3rem 0.4rem 0.5rem'
    };
    &:hover {
      ${attach}: 1.1rem;
    }
  `}
`;

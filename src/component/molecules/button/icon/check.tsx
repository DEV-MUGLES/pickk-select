import React from 'react';
import styled from 'styled-components';

import CheckIcon from '@src/asset/icons/button/check';
import { WHITE, BLACK, REGULAR_GREY } from '@src/component/atoms/colors';

export type CheckButtonProps = {
  onClick: () => void;
  selected: boolean;
  width?: string;
  height?: string;
};

function CheckButton({ onClick, selected, width, height }: CheckButtonProps) {
  const handleChange = () => {
    onClick();
  };

  const w = width ? width : '2rem';
  const h = height ? height : '2rem';

  return (
    <Wrapper
      style={{ width: w, height: h }}
      onClick={handleChange}
      selected={selected}
    >
      <CheckIcon
        style={{ width: '1rem', height: '0.8rem' }}
        fill={selected ? WHITE : REGULAR_GREY}
      />
    </Wrapper>
  );
}

export default React.memo(CheckButton);

const Wrapper = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  border: solid 0.1rem ${REGULAR_GREY};
  background-color: ${WHITE};
  outline: none;
  ${(props) =>
    props.selected
      ? `
  border: solid 0.1rem ${BLACK}; background-color:${BLACK}`
      : `
  border: solid 0.1rem ${REGULAR_GREY}; background-color:${WHITE}`}
`;

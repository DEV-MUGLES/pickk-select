import React from 'react';
import styled from 'styled-components';

import MinusIcon from '@src/asset/icons/button/minus';
import PlusIcon from '@src/asset/icons/button/plus';
import { Row, P } from '../atoms';
import { REGULAR_GREY, WHITE } from '../atoms/colors';

export type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Counter({ count, setCount }: CounterProps) {
  const handleCountChange = (input: number) => () => {
    setCount(Math.max(count + input, 1));
  };

  return (
    <Wrapper>
      <Button onClick={handleCountChange(-1)}>
        <MinusIcon style={{ width: '1.2rem', height: '1.2rem' }} />
      </Button>
      <Count>
        <P level={1} fontWeight="medium">
          {count}
        </P>
      </Count>
      <Button onClick={handleCountChange(1)}>
        <PlusIcon />
      </Button>
    </Wrapper>
  );
}

export default React.memo(Counter);

const Wrapper = styled(Row)`
  width: fit-content;
  height: 2.8rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border: 0.1rem solid ${REGULAR_GREY};
  background-color: ${WHITE};
  outline: none;
  cursor: pointer;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.8rem;
  height: 2.8rem;
  border-top: 0.1rem solid ${REGULAR_GREY};
  border-bottom: 0.1rem solid ${REGULAR_GREY};
`;

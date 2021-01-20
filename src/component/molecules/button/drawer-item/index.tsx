import React, { ReactChild } from 'react';
import styled from 'styled-components';

import { P, Line, Col } from '@src/component/atoms';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

export type DrawerItemProps = {
  children: ReactChild;
  onClick?: any;
  isCancel?: boolean;
};

function DrawerItem({ children, onClick, isCancel }: DrawerItemProps) {
  return (
    <Wrapper>
      <P
        level={2}
        color={isCancel && MIDDLE_GREY}
        style={{ cursor: 'pointer', margin: '1.2rem' }}
        onClick={onClick}
        textAlign="center"
      >
        {children}
      </P>
      {!isCancel && <Line />}
    </Wrapper>
  );
}

export default React.memo(DrawerItem);

const Wrapper = styled(Col)`
  width: 100%;
  height: fit-content;
`;

import React from 'react';
import styled from 'styled-components';

import { LIGHT_GREY } from './colors';

export type DividerSize = 'bold' | 'thin';

export type DividerProps = {
  size?: DividerSize;
  hasMargin?: boolean;
};

function Divider({ size = 'bold', hasMargin = false }: DividerProps) {
  return <_Divider {...{ size, hasMargin }} />;
}

export default React.memo(Divider, () => true);

const _Divider = styled.div<{ size: DividerSize; hasMargin: boolean }>`
  ${(props) => `width: ${props.size === 'bold' ? '100%' : '32.8rem'};
     height: ${props.size === 'bold' ? '0.6rem' : '0.1rem'};
     margin: ${props.hasMargin ? '1.2rem 0' : '0'};
     `}
  background-color: ${LIGHT_GREY};
`;

import React from 'react';
import styled from 'styled-components';

import { LIGHT_GREY } from './colors';

type LineProps = {
  className?: string;
  direction?: 'COL' | 'ROW';
  level?: number;
  length?: number;
  style?: React.CSSProperties;
  backgroundColor?: string;
  size?: number;
};

const defaultProps = {
  level: 0,
  direction: 'COL',
};

export default function Line(props: LineProps) {
  return <_Line {...props} />;
}

const _Line = styled.div<LineProps>`
  ${(props) => {
    const thickness = props.length
      ? '1px'
      : props.size
      ? `${props.size * 0.1}rem`
      : `${0.1 + 0.3 * props.level}rem`;
    const length = props.length ? `${props.length * 0.1}rem` : '100%';
    return `
    background-color: ${props.backgroundColor || LIGHT_GREY};
    width: ${props.direction === 'COL' ? length : thickness};
    height: ${props.direction === 'COL' ? thickness : length};
    `;
  }}
`;

Line.defaultProps = defaultProps;

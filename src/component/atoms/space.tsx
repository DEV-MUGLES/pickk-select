import React from 'react';
import styled from 'styled-components';

type SpaceProps = {
  className?: string;
  direction?: 'COL' | 'ROW';
  level?: number;
  size?: number;
  pixel?: boolean;
  auto?: boolean;
  style?: React.CSSProperties;
};

const defaultProps = {
  level: 0,
  direction: 'COL',
};

export default function Space(props: SpaceProps) {
  return <_Space {...props} />;
}

const _Space = styled.div`
  ${(props: SpaceProps) => {
    const length = '0.1px';
    const thickness = props.auto
      ? 'auto'
      : props.pixel
      ? `${4 + props.level * 8}px`
      : `${props.size ? props.size / 10 : 0.4 + 0.8 * props.level}rem`;

    return `
      background-color: transparent;
      width: ${props.direction === 'COL' ? length : thickness};
      height: ${props.direction === 'COL' ? thickness : length};
      ${props.auto && 'flex:1;'}`;
  }}
`;

Space.defaultProps = defaultProps;

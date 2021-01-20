import React from 'react';
import styled from 'styled-components';

import ChevronDownIcon from '../../asset/icons/common/chevron/down';
import { WHITE, BLACK } from './colors';

export type SelectProps = {
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  list: { name: string; value: number }[];
  pxSize?: number;
  level?: number;
} & WrapperProps;

type WrapperProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  style?: React.CSSProperties;
};

export default function Select({
  value,
  onChange,
  list,
  style,
  width,
  height,
  padding,
  margin,
  level = 0,
  pxSize,
}: SelectProps) {
  return (
    <Wrapper {...{ width, height, padding, margin, style }}>
      <_Select {...{ value, onChange, level, pxSize }}>
        {list.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </_Select>
      <ChevronDownIcon
        style={{
          position: 'absolute',
          right: '5%',
          top: '30%',
          width: '1.2rem',
          height: '1.2rem',
        }}
        fill={BLACK}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'fit-content'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  overflow: hidden;
`;

const _Select = styled.select`
  ${(props: { pxSize?: number; level: number }) => {
    const { pxSize, level } = props;

    return `width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      background-color: ${WHITE};
      border: none;
      font-size: ${pxSize ? `${pxSize}px` : `${1 + level * 0.2}rem`};`;
  }}
`;

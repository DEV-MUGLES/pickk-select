import React from 'react';
import styled from 'styled-components';

import { BLACK } from './colors';

type StrongProps = {
  level?: number;
  color?: 'PRIMARY' | string;
  fontWeight?: number | string;
  width?: string;
  textAlign?: string;
  ellipsis?: boolean;
  preWrap?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const SKETCH_LINE = [15, 18, 22, 24, 29];

const defaultProps = {
  level: 0,
  fontWeight: 'bold',
  color: BLACK,
};

export default function Strong(props: StrongProps) {
  return <_Strong {...props} />;
}

const _Strong = styled.strong<StrongProps>`
  ${({ width, textAlign, ellipsis, preWrap, level, color, fontWeight }) => {
    return `
      padding: 0;
      margin: 0;
      font-size: ${1 + level * 0.2}rem;
      color: ${color};
      font-weight: ${
        typeof fontWeight === 'number' ? fontWeight : FONT_WEIGHT[fontWeight]
      };
      width: ${width || 'fit-content'};
      height: fit-content;
      text-align: ${textAlign || 'left'};

      line-height: ${SKETCH_LINE[level] / (10 + level * 2)};
      letter-spacing: -0.56px;
      word-break: break-all;
      ${
        ellipsis &&
        `
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden
      `
      }
      ${
        preWrap &&
        `
        white-space: pre-wrap; word-break: keep-all;
      `
      }`;
  }}
`;

Strong.defaultProps = defaultProps;

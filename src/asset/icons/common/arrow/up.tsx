import React from 'react';
import { IconProps } from '../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function ArrowUpIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="10.75 20.01 10.75 2.92 18.93 11.29 20 10.25 10 0.01 0 10.25 1.07 11.29 9.25 2.92 9.25 20.01 10.75 20.01" />
    </svg>
  );
}

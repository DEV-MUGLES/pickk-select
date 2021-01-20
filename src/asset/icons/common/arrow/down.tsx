import React from 'react';
import { IconProps } from '../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function ArrowDownIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="9.25 0.01 9.25 17.1 1.07 8.72 0 9.77 10 20.01 20 9.77 18.93 8.72 10.75 17.1 10.75 0.01 9.25 0.01" />
    </svg>
  );
}

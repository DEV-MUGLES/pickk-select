import React from 'react';
import { IconProps } from '../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function LookEditIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{
        width: '2rem',
        height: '2rem',
        ...style,
      }}
    >
      <path
        fill={fill}
        d="M0 0h9.3v9.32H0zM10.7 0H20v9.32h-9.3zM0 10.7h9.3v9.32H0zM10.7 10.7H20v9.32h-9.3z"
      />
    </svg>
  );
}

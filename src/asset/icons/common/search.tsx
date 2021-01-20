import React from 'react';

import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function SearchIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M1.5,8.2c0-3.7,3-6.6,6.6-6.6c3.7,0,6.6,3,6.6,6.6s-3,6.6-6.6,6.6C4.5,14.8,1.5,11.8,1.5,8.2z M19.1,18.2  l-4.7-4.7c1.2-1.4,2-3.3,2-5.3c0-4.5-3.7-8.2-8.2-8.2S0,3.7,0,8.2s3.7,8.2,8.2,8.2c1.9,0,3.6-0.7,5-1.7l4.7,4.7L19.1,18.2z" />
    </svg>
  );
}

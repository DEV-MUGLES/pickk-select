import React from 'react';
import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function CartIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M15.83,7.27V18.5H4.6V7.27H15.83m1.5-1.5H3.1V20H17.33V5.77Z" />
      <path d="M14.62,4.39h-1.5a2.9,2.9,0,0,0-5.79,0H5.83a4.4,4.4,0,0,1,8.79,0Z" />
    </svg>
  );
}

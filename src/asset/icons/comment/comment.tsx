import React from 'react';
import { IconProps } from '../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function CommentIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M1,19.87a1,1,0,0,1-.74-.32,1,1,0,0,1-.17-1.16l1.71-3.47a9.81,9.81,0,1,1,8.37,4.7,9.68,9.68,0,0,1-5.06-1.41L1.44,19.79A1.1,1.1,0,0,1,1,19.87Zm4.25-3.35.34.22a8.22,8.22,0,0,0,4.58,1.39A8.31,8.31,0,1,0,1.9,9.82a8.21,8.21,0,0,0,1.42,4.63l.24.36L2,17.91Z" />
    </svg>
  );
}

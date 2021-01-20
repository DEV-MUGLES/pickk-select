import React from 'react';
import { IconProps } from '../../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function HomeFillIcon({
  style,
  fillIn,
  fillOut = BLACK,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 20 20"
      style={{ width: '2rem', height: '2rem', ...style }}
    >
      <path
        fill={fillOut}
        d="M10 1.2l9 5.9v12h-5v-4.6a1.5 1.5 0 00-1.5-1.5h-5A1.5 1.5 0 006 14.5v4.6H1v-12l9-5.9M10 0L0 6.6v13.5h7v-5.6a.6.6 0 01.5-.5h5a.6.6 0 01.5.5v5.6h7V6.6L10 0z"
      />
      <path
        fill={fillIn}
        d="M10 1.2l9 5.9v12h-5v-4.6a1.5 1.5 0 00-1.5-1.5h-5A1.5 1.5 0 006 14.5v4.6H1v-12l9-5.9"
      />
    </svg>
  );
}

import React from 'react';

import { BLACK, WHITE } from '@src/component/atoms/colors';
import { IconProps } from './icons';

export default function BookmarkIcon({
  style = {},
  fillOut = BLACK,
  fillIn = WHITE,
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4248 14.5717L10 14.2799L9.57525 14.5717L3.75 18.5746V0.75H16.25V18.5746L10.4248 14.5717Z"
        stroke={fillOut}
        fill={fillIn}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

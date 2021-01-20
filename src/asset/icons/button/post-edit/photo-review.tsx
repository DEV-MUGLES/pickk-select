import React from 'react';
import { IconProps } from '../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function PhotoReviewEditIcon({
  style = {},
  fill = BLACK,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 20 20"
      style={{
        width: '2rem',
        height: '2rem',
        ...style,
      }}
    >
      <path
        fill={fill}
        d="M0 0v20h20V0zm19 1v7.3l-1.9-1.7-6 4.5-5.6-3.9L1 11.5V1z"
      />
    </svg>
  );
}

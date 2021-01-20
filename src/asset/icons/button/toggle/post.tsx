import React from 'react';
import { IconProps } from '../../icons';

export default function PostIcon({
  style,
  fillIn,
  fillOut,
  fillDot,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{ width: '2rem', height: '2rem', ...style }}
    >
      <path fill={fillOut} d="M19,1V3.7H1V1H19m1-1H0V4.7H20V0Z" />
      <path fill={fillOut} d="M0,6.2V20H20V6.2ZM19,19H1V7.2H19Z" />
      <rect fill={fillDot} x="3.3" y="10" width="10" height="1" />
      <rect fill={fillDot} x="3.3" y="13.5" width="10" height="1" />
      <path
        fill={fillIn}
        d="M1,7.2V19H19V7.2Zm12.3,7.3H3.3v-1h10Zm0-3.5H3.3V10h10Z"
      />
      <polyline fill={fillIn} points="19 1 19 3.7 1 3.7 1 1 19 1" />
    </svg>
  );
}

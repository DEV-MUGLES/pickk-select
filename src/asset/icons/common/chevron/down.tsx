import React from 'react';
import { IconProps } from '@src/asset/icons/icons';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

export default function ChevronDownIcon({
  style = {},
  fill = MIDDLE_GREY,
  onClick,
}: IconProps) {
  return (
    <svg
      onClick={onClick}
      style={{ width: '1.2rem', height: '1.2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="10 15.94 -0.01 5.68 1.06 4.63 10 13.79 18.94 4.63 20.01 5.68 10 15.94" />
    </svg>
  );
}

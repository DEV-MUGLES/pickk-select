import React from 'react';

import { WHITE, HOLDER_GREY } from '@src/component/atoms/colors';
import { IconProps } from './icons';

export default function PartnerIcon({
  style = {},
  fill = HOLDER_GREY,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '2rem', height: '2rem', ...style }}
    >
      <circle cx="10" cy="10" r="10" fill={fill} />
      <path
        d="M9.35303 14.9375L17 6H13.981L8.27589 12.4204L5.45451 9.49179L4 11.2392L7.40674 14.936L9.35303 14.9375Z"
        fill={WHITE}
      />
    </svg>
  );
}

import React from 'react';
import { IconProps } from '../icons';

import { MIDDLE_GREY } from '@src/component/atoms/colors';

export default function ResetIcon({
  style = {},
  fill = MIDDLE_GREY,
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.2618 0C13.5079 0 16.5445 1.52284 18.4293 3.95939V0.609137H20V6.59898H13.822V5.07614H17.3822C15.7068 2.84264 13.089 1.52284 10.2618 1.52284C5.44503 1.52284 1.57068 5.27919 1.57068 9.94924C1.57068 14.6193 5.44503 18.3756 10.2618 18.3756C14.0314 18.3756 17.2775 16.0406 18.534 12.6904L20 13.198C18.6387 17.2589 14.6597 20 10.2618 20C4.60733 19.8985 0 15.4315 0 9.94924C0 4.46701 4.60733 0 10.2618 0Z" />
    </svg>
  );
}

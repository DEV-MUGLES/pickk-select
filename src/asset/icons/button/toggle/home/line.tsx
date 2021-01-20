import React from 'react';
import { IconProps } from '../../../icons';

import { BLACK } from '@src/component/atoms/colors';

export default function HomeLineIcon({ style, fill = BLACK }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 20 20"
      style={{ width: '2rem', height: '2rem', ...style }}
      fill={fill}
    >
      <path d="M10 1.8L18.5 7V18.5H14.3V14.3C14.3 13.2 13.4 12.3 12.3 12.3H7.7C6.6 12.3 5.7 13.2 5.7 14.3V18.5H1.5V7L10 1.8ZM10 0L0 6.2V20H7.2V14.3C7.2 14 7.4 13.8 7.7 13.8H12.3C12.6 13.8 12.8 14 12.8 14.3V20H20V6.2L10 0Z" />
    </svg>
  );
}

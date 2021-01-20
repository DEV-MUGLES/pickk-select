import React from 'react';

import { BLACK, WHITE } from '@src/component/atoms/colors';
import { IconProps } from '../icons';

export default function ItemMarkIcon({
  style = { width: '1.2rem', height: '1.2rem' },
  fillOut = BLACK,
  fillIn = WHITE,
}: Partial<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.1 12.1"
      style={{ ...style, boxSizing: 'content-box', overflow: 'visible' }}
    >
      <circle
        cx="6"
        cy="6"
        r="6"
        fill={fillOut}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill={fillIn}
        fillRule="evenodd"
        d="M9.2 7.9c0-.1 0-.1 0 0V3.8c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v1.4L4.8 2.4c-.3-.3-.8-.3-1 0-.3.2-.4.5-.3.8l-.4-.4c-.3-.3-.8-.3-1 0-.3.3-.3.8 0 1L4.2 6c-.2 0-.4 0-.6.2-.1.2-.2.4-.2.6-.2 0-.4 0-.6.2-.3.3-.3.8 0 1.1l1.6 1.6c.5.5 1.2.9 2 .9 1.5-.1 2.7-1.2 2.8-2.7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

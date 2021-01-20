import React from 'react';

import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function RecentIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.73822 0C6.49215 0 3.4555 1.53061 1.57068 3.97959V1.63265H0V6.63265H5.13089V5.10204H2.6178C4.18848 2.85714 6.911 1.53061 9.73822 1.53061C14.555 1.53061 18.4293 5.30612 18.4293 10C18.4293 14.6939 14.555 18.4694 9.73822 18.4694C5.96859 18.4694 2.72251 16.1224 1.46597 12.7551L0 13.1633C1.36126 17.2449 5.34031 20 9.73822 20C15.3927 20 20 15.5102 20 10C20 4.4898 15.3927 0 9.73822 0Z" />
      <path
        d="M9.00525 5.51019V10.3061L12.5655 13.7755L13.6126 12.7551L10.5759 9.69387V5.51019H9.00525Z"
        fill="#111111"
      />
    </svg>
  );
}

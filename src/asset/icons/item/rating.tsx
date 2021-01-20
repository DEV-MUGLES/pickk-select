import React from 'react';

import { IconProps } from '../icons';

export default function RatingIcon({
  style = {},
  fill = '#EAB736',
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{ width: '1.4rem', height: '1.4rem', ...style }}
    >
      <g fill={fill}>
        <path d="M9.98459 14.3379C13.8052 14.3379 16.9025 11.3521 16.9025 7.66895C16.9025 3.98579 13.8052 1 9.98459 1C6.16395 1 3.0667 3.98579 3.0667 7.66895C3.0667 11.3521 6.16395 14.3379 9.98459 14.3379Z" />
        <path d="M4.38027 12.2979L2 16.2755L4.77813 16.1333L6.04029 18.5238L8.24222 14.8438C6.68702 14.4538 5.3214 13.5535 4.38027 12.2979Z" />
        <path d="M15.6026 12.278C14.6662 13.5366 13.3043 14.4415 11.7509 14.8372L13.9597 18.5238L15.2219 16.1333L18 16.2754L15.6026 12.278Z" />
      </g>
    </svg>
  );
}

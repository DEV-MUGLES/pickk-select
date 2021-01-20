import React from 'react';

import { BLACK } from '../../colors';
import { IconProps } from '@src/asset/icons/icons';

function ShareIcon({ style = {}, fill = BLACK, onClick }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '1.6rem', height: '1.6rem', ...style }}
      viewBox="0 0 16 16"
      fill={fill}
      onClick={onClick}
    >
      <path d="M13.992 7.47998V13.832C13.992 14.0972 13.8866 14.3515 13.6991 14.5391C13.5116 14.7266 13.2572 14.832 12.992 14.832H3.00799C2.74277 14.832 2.48842 14.7266 2.30088 14.5391C2.11334 14.3515 2.00799 14.0972 2.00799 13.832V7.47998H0.799988V13.832C0.808411 14.4113 1.04501 14.9639 1.4584 15.3698C1.8718 15.7757 2.42863 16.0021 3.00799 16H12.992C13.5713 16.0021 14.1282 15.7757 14.5416 15.3698C14.955 14.9639 15.1916 14.4113 15.2 13.832V7.47998H13.992Z" />
      <path d="M7.40002 2.296V10.312H8.60002V2.304L11.408 5.112L12.256 4.264L8.00002 0.00799561L3.74402 4.256L4.59202 5.104L7.40002 2.296Z" />
    </svg>
  );
}

export default React.memo(ShareIcon);

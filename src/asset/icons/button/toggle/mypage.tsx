import React from 'react';

export default function MypageIcon({ style, fillOut, fillIn }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{ width: '2rem', height: '2rem', ...style }}
    >
      <path
        fill={fillOut}
        d="M19,10.5V19H1V10.5H5.3l4,3.5a1,1,0,0,0,1.4,0l4-3.5H19m1-1H14.4L10,13.3,5.6,9.5H0V20H20V9.5Z"
      />
      <path
        fill={fillOut}
        d="M10,1a3,3,0,0,1,3,3A3,3,0,0,1,7,4a3,3,0,0,1,3-3m0-1A4,4,0,0,0,6,4a4,4,0,0,0,8,0,4,4,0,0,0-4-4Z"
      />
      <path fill={fillIn} d="M10,1a3,3,0,0,1,3,3A3,3,0,0,1,7,4a3,3,0,0,1,3-3" />
      <path
        fill={fillIn}
        d="M19,10.5V19H1V10.5H5.3l4,3.5a1,1,0,0,0,1.4,0l4-3.5H19"
      />
    </svg>
  );
}

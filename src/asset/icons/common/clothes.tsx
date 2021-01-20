import React from 'react';

export default function ClothesIcon({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 10" style={style}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7.5 0s-.4 1.6-2 1.6-2-1.6-2-1.6L0 1.2l1 3 1.5-.3V10h6V3.9l1.5.3 1-3L7.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

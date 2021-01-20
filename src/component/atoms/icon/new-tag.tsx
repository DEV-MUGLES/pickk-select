import React from 'react';

export default function NewTag({ style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" style={style}>
      <circle
        cx="5"
        cy="5"
        r="5"
        fill="#ea6969"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3.7 3l2.7 3.2V3H7v4h-.7L3.7 3.8V7H3V3h.7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

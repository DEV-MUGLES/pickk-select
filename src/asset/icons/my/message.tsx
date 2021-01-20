import React from 'react';

export default function MessageIcon({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" style={style}>
      <g fill={fill}>
        <path d="M3.2 9.9c.1-.1.3-.2.5-.2h8c.4 0 .7-.3.7-.7V2.3c0-.4-.3-.7-.7-.7H2.3c-.3.1-.6.4-.6.7v9.1l1.5-1.5zm.7 1.1l-2.5 2.5c-.4.4-1.1.1-1.1-.5V2.3c0-1.1.9-2 2-2h9.3c1.1 0 2 .9 2 2V9c0 1.1-.9 2-2 2H3.9z" />
        <circle cx="3.8" cy="5.8" r="1" />
        <circle cx="6.8" cy="5.8" r="1" />
        <circle cx="9.8" cy="5.8" r="1" />
      </g>
    </svg>
  );
}

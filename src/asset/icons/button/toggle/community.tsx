import React from 'react';

export default function CommunityIcon({ style, fillIn, fillOut, fillDot }) {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 22">
      <path
        fill={fillIn}
        d="M5.4 13.9l.2.1c1.3.7 2.8 1 4.4 1 4.6 0 8.3-3 8.3-6.6S14.6 1.7 10 1.7s-8.3 3-8.3 6.6c0 1.2.4 2.4 1.2 3.5l.2.2-.5 2.8 2.8-.9z"
      />
      <g fill={fillOut}>
        <path d="M10 16.2c-1.7 0-3.3-.4-4.7-1l-2.6.9c-.3.1-.7.1-1-.2-.3-.2-.4-.6-.3-.9l.5-2.6C1 11.2.6 9.8.6 8.4.5 4 4.8.5 10 .5s9.5 3.5 9.5 7.8c0 4.4-4.2 7.9-9.5 7.9zm-4.6-2.3l.2.1c1.3.7 2.8 1 4.4 1 4.6 0 8.3-3 8.3-6.6S14.6 1.7 10 1.7s-8.3 3-8.3 6.6c0 1.2.4 2.4 1.2 3.5l.2.2-.5 2.8 2.8-.9z" />
        <path d="M15.4 21.2c-2.6 0-5.1-.9-6.9-2.4-.3-.2-.3-.6-.1-.8.2-.2.6-.3.8-.1 1.6 1.4 3.8 2.1 6.1 2.1 1.6 0 3.1-.4 4.4-1l.2-.1 2.8 1-.4-2.9.2-.2c.8-1.1 1.2-2.3 1.2-3.5 0-1.7-.8-3.4-2.4-4.6-.3-.2-.3-.6-.1-.8.2-.3.6-.3.8-.1 1.8 1.5 2.8 3.5 2.8 5.6 0 1.4-.5 2.8-1.3 4L24 20c.1.3-.1.7-.3.9-.3.2-.6.3-1 .2l-2.6-.9c-1.4.6-3 1-4.7 1z" />
      </g>
      <g fill={fillDot}>
        <path d="M6.9 8.2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9" />
        <path d="M10.9 8.2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9" />
        <path d="M14.9 8.2c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9" />
      </g>
    </svg>
  );
}

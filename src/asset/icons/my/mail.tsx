import React from 'react';

export default function MailIcon({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" style={style}>
      <path
        fill={fill}
        d="M13.3 0c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H2.7c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2h10.6zm.7 3.3L8.4 7.2c-.2.2-.5.2-.8 0L2 3.3V10c0 .4.3.7.7.7h10.7c.4 0 .7-.3.7-.7L14 3.3zm-.7-2H2.7c-.3 0-.5.2-.6.4L8 5.9l5.9-4.2c-.1-.2-.3-.4-.6-.4z"
      />
    </svg>
  );
}

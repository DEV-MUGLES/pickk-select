import { BLACK } from '../../colors';

export default ({ style = {}, fill = BLACK }) => (
  <svg
    style={{
      width: '2rem',
      height: '2rem',
      ...style,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M11.7 16.5c1.5 0 2.7 1.2 2.7 2.7S13.2 22 11.7 22 9 20.8 9 19.3s1.2-2.8 2.7-2.8zm0 1.9c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zm0-9.1c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7S9 13.5 9 12s1.2-2.7 2.7-2.7zm0 1.8c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9zm0-9.1c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7S9 6.2 9 4.7 10.2 2 11.7 2zm0 1.8c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9-.4-.9-.9-.9z"
      clipRule="evenodd"
    />
  </svg>
);

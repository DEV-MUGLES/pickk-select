import { BLACK } from '../../colors';

export default function QuoteRightIcon({ style, fill = BLACK }) {
  return (
    <svg
      style={{ width: '0.12rem', height: '0.1rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 9"
    >
      <path
        fill={fill}
        d="M.9 7.3c1.5-.9 2.3-1.8 2.3-3.4H3c-1.1 0-2-.7-2-1.9s.8-2 2-2c1.5 0 2.3 1.2 2.3 3.3 0 2.5-1.2 4.3-3.6 5.5L.9 7.3zm6 0c1.5-.9 2.3-1.8 2.3-3.4H9c-1.1 0-2-.7-2-1.9s.8-2 2-2c1.5 0 2.3 1.2 2.3 3.3 0 2.5-1.2 4.3-3.6 5.5l-.8-1.5z"
      />
    </svg>
  );
}

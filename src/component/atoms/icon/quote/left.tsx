import { BLACK } from '../../colors';

export default function QuoteLeftIcon({ style = {}, fill = BLACK }) {
  return (
    <svg
      style={{ width: '0.11rem', height: '0.1rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 10"
    >
      <path
        fill={fill}
        d="M4.9 1.9c-1.5.8-2.3 1.8-2.3 3.4h.3c1 0 1.9.7 1.9 1.8 0 1.2-.8 2-1.9 2C1.4 9.1.6 7.9.6 5.9.6 3.4 1.8 1.6 4.2.3l.7 1.6zm6 0c-1.5.8-2.3 1.8-2.3 3.4h.3c1 0 1.9.7 1.9 1.8 0 1.2-.8 2-1.9 2-1.5 0-2.3-1.2-2.3-3.2 0-2.5 1.2-4.3 3.6-5.6l.7 1.6z"
      />
    </svg>
  );
}

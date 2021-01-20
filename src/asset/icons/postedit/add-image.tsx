import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function ImageAddIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      style={{ width: '2.1rem', height: '2rem', ...style }}
      fill="none"
      stroke={fill}
    >
      <path d="M1 0.5H20V19.5H1z" />
      <path
        strokeLinecap="round"
        d="M1.2 12.117L4.711 9.187 8.224 12.117 15.269 5.155 19.75 9.187"
      />
    </svg>
  );
}

import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function TimestampIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '1.1rem', height: '0.9rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 10.1"
    >
      <path d="M4.9,0C5,0,5.1,0,5.2,0.1l6.6,4.5C12,4.7,12.1,5,12,5.3c0,0.1-0.1,0.1-0.1,0.1L5.2,9.9   C5,10,4.6,10,4.5,9.8C4.4,9.7,4.4,9.6,4.4,9.5l0-2L0.8,9.9C0.6,10,0.2,10,0.1,9.8C0,9.7,0,9.6,0,9.5v-9C0,0.2,0.2,0,0.5,0   c0.1,0,0.2,0,0.3,0.1l3.6,2.5l0-2C4.4,0.2,4.6,0,4.9,0z" />
    </svg>
  );
}

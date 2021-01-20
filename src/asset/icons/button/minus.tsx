import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function MinusIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '0.8rem', height: '0.8rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <path
        fill={fill}
        d="M2.5,6.5h7C9.8,6.5,10,6.3,10,6S9.8,5.5,9.5,5.5h-7C2.2,5.5,2,5.7,2,6S2.2,6.5,2.5,6.5z"
      />
    </svg>
  );
}

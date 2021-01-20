import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function PlusIcon({ style, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '1.2rem', height: '1.2rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <g>
        <path
          fill={fill}
          fillRule="evenodd"
          d="M6,2c0.3,0,0.5,0.2,0.5,0.5l0,3l3,0c0.2,0,0.4,0.2,0.5,0.4L10,6c0,0.3-0.2,0.5-0.5,0.5l-3,0
		l0,3c0,0.2-0.2,0.4-0.4,0.5L6,10c-0.3,0-0.5-0.2-0.5-0.5l0-3l-3,0C2.3,6.5,2,6.3,2,6.1L2,6c0-0.3,0.2-0.5,0.5-0.5l3,0l0-3
		C5.5,2.3,5.7,2,6,2L6,2z"
        />
      </g>
    </svg>
  );
}

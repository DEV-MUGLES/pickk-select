import { BLACK } from '@src/component/atoms/colors';
import { IconProps } from '../icons';

export default function SubscribeIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      viewBox="0 0 20 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.12 4.25999L7.7 1.64999H0V19.37H20V4.25999H9.12ZM18.52 17.87H1.52V3.14999H6.81L7.8 4.99999L8.23 5.77999H18.52V17.87Z" />
      <path
        d="M5.73999 10.65L4.67999 11.71L8.45999 15.48L14.61 9.32999L13.54 8.26999L8.45999 13.36L5.73999 10.65Z"
        fill="#111111"
      />
    </svg>
  );
}

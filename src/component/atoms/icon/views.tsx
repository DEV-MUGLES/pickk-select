import { IconProps } from '@src/asset/icons/icons';

export default function ViewsIcon({ style, fill }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 10 8"
      style={style}
    >
      <path
        fill={fill}
        d="M5,0.2c1.4,0,2.6,0.7,3.7,1.8C9,2.4,9.4,2.8,9.6,3.3C9.8,3.5,9.9,3.7,10,3.8C10,3.9,10,4.1,10,4.2
	C9.9,4.3,9.8,4.5,9.6,4.7C9.4,5.2,9,5.6,8.7,6C7.6,7.1,6.4,7.7,5,7.7S2.4,7.1,1.3,6C1,5.6,0.6,5.2,0.4,4.7C0.2,4.5,0.1,4.3,0,4.2
	C0,4.1,0,3.9,0,3.8c0.1-0.1,0.2-0.3,0.3-0.6C0.6,2.8,1,2.4,1.3,2C2.4,0.9,3.6,0.2,5,0.2z M5,2.3C4.1,2.3,3.3,3.1,3.3,4
	S4.1,5.7,5,5.7S6.7,4.9,6.7,4S5.9,2.3,5,2.3z"
      />
    </svg>
  );
}

import { BLACK } from '@src/component/atoms/colors';

export default function UserIcon({ style = {}, fill = BLACK }) {
  return (
    <svg
      style={{
        width: '1.6rem',
        height: '1.4rem',
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        d="M10.7,9.2c1.8,0,3.3,1.5,3.3,3.3v1.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-1.3
		c0-1.1-0.9-2-2-2H5.3c-1.1,0-2,0.9-2,2v1.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-1.3c0-1.8,1.5-3.3,3.3-3.3H10.7z M8,1.2
		c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3S6.2,1.2,8,1.2z M8,2.5c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2
		s2-0.9,2-2C10,3.4,9.1,2.5,8,2.5z"
      />
    </svg>
  );
}

import { BLACK } from '@src/component/atoms/colors';

export default function SearchIcon({ style = {}, fill = BLACK }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
      style={{ width: '2rem', height: '2rem', ...style }}
    >
      <path
        fill={fill}
        d="M8.8,1.7c3.9,0,7.1,3.2,7.1,7.1c0,1.6-0.5,3.1-1.5,4.4l3.8,3.8c0.3,0.3,0.3,0.9,0,1.2c-0.3,0.3-0.8,0.3-1.2,0
	l-3.8-3.8c-3.1,2.4-7.5,1.9-9.9-1.2s-2-7.6,1.1-10C5.6,2.2,7.2,1.7,8.8,1.7z M8.8,3.3c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4
	c1.4,0,2.8-0.6,3.8-1.6l0,0c1-1,1.6-2.4,1.6-3.8C14.2,5.8,11.7,3.3,8.8,3.3L8.8,3.3z"
      />
    </svg>
  );
}

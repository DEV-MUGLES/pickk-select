import { IconProps } from './icons';

export default function KakaoIcon({ style = {}, fill = '#391B1B' }: IconProps) {
  return (
    <svg
      style={{ width: '1.4rem', height: '1.4rem', ...style }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 14 14"
      xmlSpace="preserve"
    >
      <path
        fill={fill}
        d="M7,0C3.1,0,0,2.6,0,5.7c0,1.9,1.1,3.6,2.9,4.6L2,13.6c-0.1,0.3,0.2,0.6,0.5,0.4l3.6-2.5  c0.3,0,0.5,0,0.8,0c3.9,0,7-2.6,7-5.7C14,2.6,10.9,0,7,0"
      />
    </svg>
  );
}

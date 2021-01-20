import { IconProps } from '../icons';

export default function WideViewIcon({ style, fill, onClick }: IconProps) {
  return (
    <svg
      style={style}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 16"
    >
      <g fill={fill}>
        <path id="Rectangle" d="M2 3h16v10H2z" />
        <path id="Rectangle_1_" d="M0 0h20v1H0z" />
        <path id="Rectangle-Copy" d="M0 15h20v1H0z" />
      </g>
    </svg>
  );
}

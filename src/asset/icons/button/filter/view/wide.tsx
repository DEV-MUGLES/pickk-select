import { IconProps } from '@src/asset/icons/icons';

export default ({ style, fill, onClick }: IconProps) => (
  <svg
    onClick={onClick}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 16"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M2 3h16v10H2zM0 0h20v1H0zM0 15h20v1H0z"
    />
  </svg>
);

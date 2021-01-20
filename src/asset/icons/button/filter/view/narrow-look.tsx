import { IconProps } from '@src/asset/icons/icons';

export default ({ style, fill, onClick }: IconProps) => (
  <svg
    onClick={onClick}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 17"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M0 0h8v7H0zM0 10h8v7H0zM10 0h8v7h-8zM10 10h8v7h-8z"
    />
  </svg>
);

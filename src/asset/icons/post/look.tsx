import { IconProps } from '../icons';

export default function LookIcon({ style, fillIn, fillOut }: IconProps) {
  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g fill={fillOut}>
        <path d="M0,8.6h8.6V0H0V8.6z M1,7.6h6.6V1H1V7.6z" />
        <path d="M11.4,8.6H20V0h-8.6V8.6z M12.4,7.6H19V1h-6.6V7.6z" />
        <path d="M0,20h8.6v-8.6H0V20z M1,19h6.6v-6.6H1V19z" />
        <path d="M11.4,20H20v-8.6h-8.6V20z M12.4,19H19v-6.6h-6.6V19z" />
      </g>
      <g fill={fillIn}>
        <polygon points="0.9,7.7 7.7,7.7 7.7,0.9 0.9,0.9 	" />
        <polygon points="0.9,19.1 7.7,19.1 7.7,12.3 0.9,12.3 	" />
        <polygon points="12.3,19.1 19.1,19.1 19.1,12.3 12.3,12.3 	" />
        <polygon points="12.3,7.7 19.1,7.7 19.1,0.9 12.3,0.9 	" />
      </g>
    </svg>
  );
}

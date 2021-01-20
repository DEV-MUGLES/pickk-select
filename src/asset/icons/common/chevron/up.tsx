import { IconProps } from '@src/asset/icons/icons';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

export default function ChevronUpIcon({
  style = {},
  fill = MIDDLE_GREY,
  onClick,
}: IconProps) {
  return (
    <svg
      onClick={onClick}
      style={{ width: '1.2rem', height: '1.2rem', ...style }}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <polygon points="18.94 15.39 10 6.23 1.06 15.39 -0.01 14.34 10 4.08 20.01 14.34 18.94 15.39" />
    </svg>
  );
}

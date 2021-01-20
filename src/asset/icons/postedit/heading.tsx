import { IconProps } from '../icons';
import { BLACK } from '@src/component/atoms/colors';

export default function HeadingIcon({ style = {}, fill = BLACK }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '2.6rem',
        height: '2.7rem',
        ...style,
      }}
      viewBox="0 0 26 27"
      fill={fill}
      fill-rule="evenodd"
    >
      <text
        font-family="Montserrat-Light, Montserrat"
        font-size="2.2rem"
        font-weight="300"
        letter-spacing="-.55"
      >
        <tspan x="0" y="21">
          A
        </tspan>
      </text>
      <text
        font-family="Montserrat-Regular, Montserrat"
        font-size="1.6rem"
        letter-spacing="-.4"
      >
        <tspan x="16" y="21">
          a
        </tspan>
      </text>
    </svg>
  );
}

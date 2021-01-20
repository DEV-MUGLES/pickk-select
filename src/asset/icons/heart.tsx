import React from 'react';

import { IconProps } from './icons';
import { WHITE, BLACK } from '@src/component/atoms/colors';

export default function HeartIcon({
  style = {},
  fillIn = WHITE,
  fillOut = BLACK,
}: IconProps) {
  return (
    <svg
      style={{ width: '2rem', height: '2rem', ...style }}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 6.25332C18.9659 7.21 18.5917 8.12315 17.9446 8.82864C17.4697 9.41228 16.9549 9.96235 16.404 10.4749L14.2932 12.5857L9.97635 16.8073L3.57013 10.4872L3 9.94947C2.55099 9.55762 2.13775 9.12659 1.76514 8.66148C1.37637 8.12401 1.11958 7.50256 1.01555 6.84743C0.994817 6.64041 0.994817 6.43183 1.01555 6.22481C1.01529 5.67015 1.12431 5.12087 1.33638 4.60834C1.54844 4.09582 1.8594 3.63009 2.25148 3.23777C2.64357 2.84544 3.1091 2.5342 3.6215 2.32182C4.13389 2.10944 4.68311 2.00009 5.23777 2C5.95624 2.00075 6.66195 2.18996 7.28442 2.54875C7.77006 2.86415 8.20132 3.25624 8.56139 3.70975C8.99168 4.30577 9.46434 4.87002 9.97571 5.39812L11.1788 4.06868C11.4783 3.69211 11.8065 3.33927 12.1603 3.01328C12.9054 2.42112 13.826 2.04146 14.7778 2.03175C15.3322 2.03158 15.8812 2.14065 16.3935 2.35275C16.9058 2.56484 17.3712 2.87579 17.7633 3.26784C18.1553 3.65988 18.4663 4.12533 18.6784 4.63759C18.8904 5.14985 19.0002 5.69889 19 6.25332Z"
        stroke={fillOut}
        fill={fillIn}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
}
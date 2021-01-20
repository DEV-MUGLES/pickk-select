import React from 'react';
import { IconProps } from '../icons';

import { MIDDLE_GREY } from '@src/component/atoms/colors';

function RefreshIcon({ style = {}, fill = MIDDLE_GREY }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      style={{ width: '1.2rem', height: '1.2rem', ...style }}
      fill={fill}
    >
      <path d="M6.15707 0C8.10471 0 9.9267 0.913706 11.0576 2.37563V0.365482H12V3.95939H8.29319V3.04569H10.4293C9.42408 1.70558 7.8534 0.913706 6.15707 0.913706C3.26702 0.913706 0.942408 3.16751 0.942408 5.96954C0.942408 8.77157 3.26702 11.0254 6.15707 11.0254C8.41885 11.0254 10.3665 9.62437 11.1204 7.61421L12 7.91878C11.1832 10.3553 8.79581 12 6.15707 12C2.7644 11.9391 0 9.25888 0 5.96954C0 2.6802 2.7644 0 6.15707 0Z" />
    </svg>
  );
}

export default React.memo(RefreshIcon);

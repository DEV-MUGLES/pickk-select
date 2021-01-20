import React from 'react';

import { BLACK } from '@src/component/atoms/colors';

export default function CheckIcon({ style = {}, fill = BLACK }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 8"
      style={{ width: '1rem', height: '0.8rem', ...style }}
    >
      <path
        fill={fill}
        d="M3.565058 8c-.184486 0-.357521-.079082-.479663-.218112L.156522 4.41964c-.23029-.265306-.20357-.668368.061071-.899235.26337-.232143.665422-.205358.898256.059949l2.446664 2.808675L8.883342.220657c.229016-.267857.63234-.294643.896983-.065051.265914.229592.293905.632654.064888.899235l-5.79922 6.724496C3.925124 7.919643 3.750817 8 3.56633 8h-.001272z"
      />
    </svg>
  );
}

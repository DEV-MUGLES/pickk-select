import React from 'react';

import { Img } from '@src/component/atoms';

import { ILook } from '@src/interfaces';

export type LookCardDefaultProps = Pick<ILook, 'id' | 'images'> & {
  style?: React.CSSProperties;
  visible?: boolean;
};

function LookCardDefault({
  id,
  images,
  style,
  visible = true,
}: LookCardDefaultProps) {
  return (
    <a href={`/looks/${id}`} aria-label={`룩${id}`}>
      <Img
        style={{
          display: visible ? null : 'none',
          ...style,
        }}
        width="17.8rem"
        height="22.4rem"
        src={images[0]?.image}
        size={512}
        alt={`룩${id}`}
        cover
      />
    </a>
  );
}

export default React.memo(LookCardDefault);

import React from 'react';
import styled from 'styled-components';

import ItemMarkIcon from '@src/asset/icons/common/item-mark';
import { P, Space, Clickable, Img } from '../../../atoms';
import { WHITE, BLACK, LIGHT_GREY } from '@src/component/atoms/colors';

import { IItem, IReviewItem } from '@src/interfaces';

export type PostCardItemRowButtonProps = Pick<IItem, 'imageUrl' | 'brand'> &
  Pick<IReviewItem, 'isPurchasable'> & {
    onClick: () => void;
  };

function PostCardItemRowButton({
  imageUrl,
  brand,
  isPurchasable,
  onClick,
}: PostCardItemRowButtonProps) {
  const { nameKor } = brand;
  return (
    <Wrapper onClick={onClick}>
      <>
        {isPurchasable && (
          <ItemMarkIcon
            style={{
              width: '1.54rem',
              height: '1.54rem',
              position: 'absolute',
              top: '0',
              left: '0',
            }}
            fillIn={WHITE}
            fillOut={BLACK}
          />
        )}
        <Img
          src={imageUrl}
          circle
          width="5.2rem"
          height="5.2rem"
          border
          size={128}
          style={{
            border: isPurchasable
              ? `solid 0.2rem ${BLACK}`
              : `0.05rem solid ${LIGHT_GREY}`,
            boxSizing: 'content-box',
            objectFit: 'cover',
          }}
          alt={nameKor}
        />
        <Space size={6} />
        <P level={1} ellipsis width="5.3rem" textAlign="center">
          {nameKor}
        </P>
      </>
    </Wrapper>
  );
}

export default React.memo(PostCardItemRowButton);

const Wrapper = styled(Clickable)`
  && {
    width: fit-content;
    margin-right: 1.1rem;
    position: relative;
  }
`;

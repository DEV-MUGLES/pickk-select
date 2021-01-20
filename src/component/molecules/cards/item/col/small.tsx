import React from 'react';
import styled from 'styled-components';

import { ItemCardColProps } from './props';

import ItemThumbnail from '@src/component/molecules/thumbnail/item';
import ItemPrice, { ItemPriceSize } from '@src/component/molecules/item/price';
import { BrandNameText } from '@src/component/molecules';

function ItemCardColSmall({
  id,
  imageUrl,
  name,
  originalPrice,
  salePrice,
  subsDiscountAmount = 0,
  isSoldout = false,
  brand,
  isRouting = false,
  style,
  index,
  isPurchasable,
}: ItemCardColProps) {
  return (
    <Wrapper style={style} href={isRouting ? `/item/${id}` : null}>
      <ItemThumbnail
        src={imageUrl}
        alt={name}
        width={104}
        height={126}
        style={{ marginBottom: '0.4rem' }}
        rank={index !== undefined ? index + 1 : null}
      />
      <BrandNameText {...brand} level={1} style={{ marginBottom: '0.4rem' }} />
      <ItemPrice
        size={ItemPriceSize.Small}
        {...{
          originalPrice,
          salePrice,
          subsDiscountAmount,
          isSoldout,
          brand,
          isPurchasable,
        }}
      />
    </Wrapper>
  );
}

export default React.memo(ItemCardColSmall);

const Wrapper = styled.a`
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;

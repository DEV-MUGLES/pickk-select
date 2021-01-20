import React from 'react';
import styled from 'styled-components';

import { ItemCardRowProps } from './props';

import ItemThumbnail from '@src/component/molecules/thumbnail/item';
import ItemPrice, { ItemPriceSize } from '@src/component/molecules/item/price';
import { BrandNameText } from '@src/component/molecules';
import { P } from '@src/component/atoms';

function ItemCardRowDefault(props: ItemCardRowProps) {
  const {
    style,
    name,
    brand,
    imageUrl,
    originalPrice,
    salePrice,
    subsDiscountAmount,
    isSoldout,
    isPurchasable,
    showSubsDiscountInfo,
    isBrandRouting = true,
  } = props;

  return (
    <Wrapper style={style}>
      <ItemThumbnail
        src={imageUrl}
        width={68}
        height={84}
        style={{ marginRight: '1.2rem' }}
      />
      <DescriptionWrapper>
        <BrandNameText
          {...brand}
          level={1}
          style={{ marginBottom: '0.4rem' }}
          isBrandRouting={isBrandRouting}
        />
        <Name>{name}</Name>
        <ItemPrice
          size={ItemPriceSize.Medium}
          {...{
            originalPrice,
            salePrice,
            subsDiscountAmount,
            brand,
            isSoldout,
            showSubsDiscountInfo,
            isPurchasable,
          }}
          style={{
            marginTop: 'auto',
          }}
        />
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default React.memo(ItemCardRowDefault);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 32.8rem;
  height: fit-content;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: auto;
  flex: 1;
`;

const Name = styled(P).attrs(() => ({
  level: 1,
  numOfLines: 2,
  width: '24.8rem',
}))``;

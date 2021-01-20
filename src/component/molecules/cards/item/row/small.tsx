import React from 'react';
import styled from 'styled-components';

import { ItemCardRowProps } from './props';

import ItemThumbnail from '@src/component/molecules/thumbnail/item';
import { BrandNameText } from '@src/component/molecules';
import ItemPrice, { ItemPriceSize } from '@src/component/molecules/item/price';
import { P } from '@src/component/atoms';
import { SEMI_MIDDLE_GREY } from '@src/component/atoms/colors';

function ItemCardRowSmall(props: ItemCardRowProps) {
  const {
    style,
    name,
    brand,
    imageUrl,
    originalPrice,
    salePrice,
    subsDiscountAmount,
    isSoldout,
    showSubsDiscountInfo,
    isPurchasable,
  } = props;

  return (
    <Wrapper style={style}>
      <ItemThumbnail
        src={imageUrl}
        width={48}
        height={62}
        style={{ marginRight: '0.8rem' }}
      />
      <DescriptionWrapper>
        <BrandNameText
          {...brand}
          level={1}
          style={{ marginBottom: '0.4rem' }}
          isBrandRouting={true}
        />
        <Name>{name}</Name>
        <ItemPrice
          size={ItemPriceSize.Small}
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

export default React.memo(ItemCardRowSmall);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
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
  ellipsis: true,
  width: '16.8rem',
  color: SEMI_MIDDLE_GREY,
}))``;

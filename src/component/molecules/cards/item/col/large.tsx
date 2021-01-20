import React from 'react';
import styled from 'styled-components';

import ItemPrice, {
  ItemPriceProps,
  ItemPriceSize,
} from '@src/component/molecules/item/price';
import { BrandNameText } from '@src/component/molecules';
import { ItemCardColProps } from '@src/component/molecules/cards/item/col/props';
import { Img, P } from '@src/component/atoms';

function ItemCardColLarge(props: ItemCardColProps) {
  const { id, imageUrl, name, brand, style } = props;

  return (
    <Wrapper href={`/item/${id}`} style={style}>
      <Img
        src={imageUrl}
        alt={name}
        width="100%"
        height="23rem"
        size={512}
        cover
      />
      <DescriptionWrapper>
        <BrandNameText {...brand} level={2} />
        <ItemName>{name}</ItemName>
        <ItemPrice
          {...(props as Omit<ItemPriceProps, 'size'>)}
          size={ItemPriceSize.Large}
          style={{}}
        />
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default React.memo(ItemCardColLarge);

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 23rem;
  height: fit-content;
  cursor: pointer;
  outline: none;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 0.8rem 1.2rem;
`;

const ItemName = styled(P).attrs({
  level: 1,
  width: '100%',
  ellipsis: true,
})`
  margin: 0.4rem 0 0.8rem;
`;

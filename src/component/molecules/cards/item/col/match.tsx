import React from 'react';
import styled from 'styled-components';

import { ItemCardColProps } from './props';
import { ItemPrice, ItemThumbnail } from '@src/component/molecules';
import {
  ItemPriceProps,
  ItemPriceSize,
} from '@src/component/molecules/item/price';
import { P } from '@src/component/atoms';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

function ItemCardColMatch(props: ItemCardColProps) {
  const { id, imageUrl, name, brand, style, matchingScore } = props;

  return (
    <Wrapper href={`/item/${id}`} style={style}>
      <ItemThumbnail
        src={imageUrl}
        alt={name}
        rating={Math.round(matchingScore)}
        width={100}
        height={100}
        circle
      />
      <DescriptionWrapper>
        <P level={1} fontWeight="medium" width="100%" textAlign="center">
          {brand.nameKor}
        </P>
        <ItemName>{name}</ItemName>
        <ItemPrice
          {...(props as Omit<ItemPriceProps, 'size'>)}
          size={ItemPriceSize.Small}
          style={{ margin: '0 auto' }}
        />
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default React.memo(ItemCardColMatch);

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 10rem;
  height: fit-content;
  cursor: pointer;
  outline: none;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 0.8rem 0;
`;

const ItemName = styled(P).attrs({
  level: 1,
  color: MIDDLE_GREY,
  width: '8rem',
  textAlign: 'center',
  ellipsis: true,
})`
  margin: 0.2rem auto 0.4rem;
`;

import React from 'react';
import styled from 'styled-components';

import { ItemCardColProps } from './props';

import ItemThumbnail from '@src/component/molecules/thumbnail/item';
import { BrandNameText } from '@src/component/molecules';
import ItemPrice, { ItemPriceSize } from '@src/component/molecules/item/price';
import { Row, P } from '@src/component/atoms';
import { LIGHT_GREY } from '@src/component/atoms/colors';

function ItemCardColDefault(props: ItemCardColProps) {
  const {
    id,
    pickk,
    matchingScore,
    itemTags,
    imageUrl,
    thumbnailWidth = 160,
    thumbnailHeight = 192,
    name,
    originalPrice,
    salePrice,
    subsDiscountAmount = 0,
    isSoldout = false,
    brand,
    isRouting = false,
    style,
    index,
    hasRank = false,
    onClick = () => null,
    isPurchasable,
  } = props;

  const tags = [...itemTags.slice(0, 1), ...(brand.styleTags || [])];

  return (
    <A href={isRouting ? `/item/${id}` : null}>
      <Wrapper
        style={{ ...style, width: `${thumbnailWidth / 10}rem` }}
        onClick={() => {
          onClick(props);
        }}
      >
        <ItemThumbnail
          src={imageUrl}
          alt={name}
          rating={Math.round(matchingScore)}
          pickk={pickk}
          width={thumbnailWidth}
          height={thumbnailHeight}
          style={{ marginBottom: '0.8rem' }}
          rank={hasRank ? index + 1 : null}
        />
        <BrandNameText
          {...brand}
          level={1}
          style={{
            marginBottom: '0.4rem',
          }}
        />
        <Name style={{ width: `${thumbnailWidth / 10}rem` }}>{name}</Name>
        <ItemPrice
          size={ItemPriceSize.Medium}
          {...{
            originalPrice,
            salePrice,
            subsDiscountAmount,
            isSoldout,
            brand,
            isPurchasable,
          }}
        />
        <TagRow>
          {tags?.map(({ name }) => (
            <TagWrapper key={name}>
              <Tag>#{name}</Tag>
            </TagWrapper>
          ))}
        </TagRow>
      </Wrapper>
    </A>
  );
}

export default React.memo(ItemCardColDefault);

const A = styled.a`
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Name = styled(P).attrs({
  level: 1,
  width: '100%',
  numOfLines: 2,
})`
  && {
    line-height: 1.7rem;
    height: 3.4rem;
    margin-bottom: 0.6rem;
  }
`;

const TagRow = styled(Row)`
  margin-top: 1.2rem;
  overflow: hidden;
`;

const TagWrapper = styled.div`
  padding: 0.6rem 1rem;
  background-color: ${LIGHT_GREY};

  &:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const Tag = styled(P).attrs({
  level: 1,
})`
  white-space: pre;
`;

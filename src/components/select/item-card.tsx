import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Img, P, Row, Col } from '@src/component/atoms';
import {
  LIGHT_GREY,
  SALE_RED,
  MIDDLE_GREY,
  BLACK,
  WHITE,
  SEMI_MIDDLE_GREY,
} from '@src/component/atoms/colors';

import { IItemSelectDTO } from '@src/interfaces';
import { SelectItem } from '@src/types';
import { addCommaToNumber } from '@src/lib/utils';

export type SelectItemCardProps = Partial<Pick<IItemSelectDTO, 'brand'>> &
  Pick<
    SelectItem,
    | 'id'
    | 'imageUrl'
    | 'name'
    | 'originalPrice'
    | 'salePrice'
    | 'isRecommended'
    | 'subsDiscountAmount'
  >;

function SelectItemCard({
  id,
  brand,
  imageUrl,
  name,
  originalPrice,
  salePrice,
  isRecommended,
  subsDiscountAmount,
}: SelectItemCardProps) {
  const brandName = brand?.nameKor;
  const salePercent = Math.floor(
    ((originalPrice - salePrice) / originalPrice) * 100
  );

  return (
    <Wrapper
      hasBrand={!!brandName}
      href={`https://pickk.one/select/items/${id}`}
      target="_blank"
    >
      <StyledImg
        src={imageUrl}
        alt={name}
        width="16rem"
        height="19.3rem"
        cover
        border
      />
      {brandName !== undefined && <BrandName>{brandName}</BrandName>}
      <ItemName>{name}</ItemName>
      <SalePriceRow>
        <SalePercent>{salePercent === 0 ? '' : salePercent + '%'}</SalePercent>
        <P level={4} fontWeight="semiBold">
          {addCommaToNumber(salePrice)}원
        </P>
      </SalePriceRow>
      <DiscountedPriceRow>
        <StyledP level={1} color={SALE_RED} fontWeight="bold">
          구독할인가
        </StyledP>
        <DiscountedPrice>
          {addCommaToNumber(salePrice - subsDiscountAmount)}원
        </DiscountedPrice>
        <P level={1} color={MIDDLE_GREY} fontWeight="medium">
          예상
        </P>
      </DiscountedPriceRow>
    </Wrapper>
  );
}

export default React.memo(SelectItemCard, () => true);

const Wrapper = styled.a<{ hasBrand: boolean }>`
  display: flex;
  flex-direction: column;
  width: 16rem;
  margin: 1rem;
  text-decoration: none;
`;

const StyledImg = styled(Img)`
  margin-bottom: 0.8rem;
`;

const BrandName = styled(P).attrs({
  level: 2,
  ellipsis: true,
  width: '16rem',
  fontWeight: 'bold',
})`
  margin-bottom: 0.2rem;
`;

const ItemName = styled(P).attrs({
  level: 2,
  numOfLines: 2,
  ellipsis: true,
  width: '16rem',
  color: SEMI_MIDDLE_GREY,
})`
  margin-bottom: 0.2rem;
  height: 4.8rem;
`;

const SalePriceRow = styled(Row)`
  display: flex;
  align-items: baseline;
  margin-bottom: 0.8rem;
  height: fit-content;
`;

const SalePercent = styled(P).attrs({
  level: 2,
  fontWeight: 'semiBold',
  color: SALE_RED,
})`
  margin-right: 0.4rem;
`;

const DiscountedPriceRow = styled(Row)`
  display: flex;
  align-items: baseline;
  flex: 1;
  padding: 0.4rem 0.8rem;
  background-color: ${LIGHT_GREY};
  padding: 0.4rem 0.8rem;
  height: fit-content;
`;

const StyledP = styled(P).attrs({
  level: 1,
  fontWeight: 'bold',
  color: SALE_RED,
})`
  margin-right: auto;
`;

const DiscountedPrice = styled(P).attrs({
  level: 2,
  fontWeight: 'semiBold',
})`
  margin-right: 0.4rem;
`;

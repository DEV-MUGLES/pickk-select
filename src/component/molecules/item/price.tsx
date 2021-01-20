import React from 'react';
import styled from 'styled-components';

import ItemMarkIcon from '@src/asset/icons/common/item-mark';
import { P } from '../../atoms';
import { SALE_RED, MIDDLE_GREY } from '../../atoms/colors';

import { IItem, IBrand } from '@src/interfaces';
import { addCommaToNumber } from '@src/lib/utils';

export enum ItemPriceSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
}

export type ItemPriceProps = {
  size: ItemPriceSize;
  style?: React.CSSProperties;
  showSubsDiscountInfo?: boolean;
  brand: Pick<IBrand, 'isPartner'>;
} & Pick<
  IItem,
  'originalPrice' | 'salePrice' | 'subsDiscountAmount' | 'isSoldout'
>;

export default function ItemPrice({
  size,
  originalPrice,
  salePrice,
  subsDiscountAmount = 0,
  showSubsDiscountInfo = false,
  style,
  isSoldout,
}: ItemPriceProps) {
  const subsDiscountPrice = salePrice - subsDiscountAmount;
  const subsDiscountRate = Math.round(
    100 - (subsDiscountPrice * 100) / salePrice + 0.01
  );
  const discountRate = Math.round(
    100 - (subsDiscountPrice * 100) / originalPrice + 0.01
  );

  const level = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
  }[size];

  if (isSoldout) {
    return (
      <Wrapper style={style}>
        <SoldoutText level={level}>품절</SoldoutText>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={style}>
      {!!discountRate && (
        <DiscountRate level={level}>{discountRate}%</DiscountRate>
      )}
      <SubsDiscountPrice level={level}>
        {addCommaToNumber(subsDiscountPrice)}원
      </SubsDiscountPrice>
      {showSubsDiscountInfo && subsDiscountAmount !== 0 && (
        <SubsDiscountInfo>구독할인 {subsDiscountRate}% ON</SubsDiscountInfo>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

const DiscountRate = styled(P).attrs(() => ({
  color: SALE_RED,
  fontWeight: 'semiBold',
}))`
  margin-right: 0.4rem;
`;

const SubsDiscountPrice = styled(P).attrs(() => ({
  fontWeight: 'semiBold',
}))``;

const SubsDiscountInfo = styled(P).attrs(() => ({
  color: MIDDLE_GREY,
  fontWeight: 'medium',
}))`
  margin-left: 1.2rem;
`;

const SoldoutText = styled(P).attrs(() => ({
  color: MIDDLE_GREY,
  fontWeight: 'medium',
}))``;

import React from 'react';
import styled from 'styled-components';

import ItemThumbnail from '@src/component/molecules/thumbnail/item';
import Counter from '@src/component/molecules/counter';
import { Row, P, Space } from '@src/component/atoms';
import {
  MIDDLE_GREY,
  SUCCESS_BLUE,
  SALE_RED,
} from '@src/component/atoms/colors';

import { OrderItem, OrderState } from '@src/types';
import { addCommaToNumber } from '@src/lib/utils';

export type ProductCardProps = Pick<
  OrderItem,
  'name' | 'imageUrl' | 'productName'
> &
  Partial<Pick<OrderItem, 'status' | 'claimStatus' | 'quantity' | 'brand'>> & {
    paidAmount?: number;
    count?: number;
    setCount?: React.Dispatch<React.SetStateAction<number>>;
    showBrand?: boolean;
  };

const { Pending, OrderFail } = OrderState;

function ProductCard({
  name,
  imageUrl,
  productName,
  quantity = -1,
  status,
  claimStatus,
  paidAmount,
  count,
  setCount,
  brand,
  showBrand = false,
}: ProductCardProps) {
  const statusColor =
    !!claimStatus || status === Pending || status === OrderFail
      ? SALE_RED
      : SUCCESS_BLUE;

  return (
    <Wrapper>
      <StyledRow>
        <ItemThumbnail src={imageUrl} alt={name} width={68} height={84} />
        <Space level={1} direction="ROW" />
        <DescriptionWrapper>
          <Name>
            {showBrand ? `[${brand.nameKor}] ` : ''}
            {name}
          </Name>
          <ProductInfoWrapper>
            <OptionWrapper>
              <P
                level={1}
                color={MIDDLE_GREY}
                fontWeight="medium"
                width={status || setCount ? '15.6rem' : '25rem'}
                ellipsis
              >
                {productName}
              </P>
              {quantity >= 0 && (
                <P level={1} color={MIDDLE_GREY} fontWeight="medium">
                  수량 {quantity}개
                </P>
              )}
            </OptionWrapper>
            {setCount && <Counter {...{ count, setCount }} />}
            {(claimStatus || status) && (
              <P level={1} color={statusColor} fontWeight="bold">
                {claimStatus || status}
              </P>
            )}
          </ProductInfoWrapper>
        </DescriptionWrapper>
      </StyledRow>
      {paidAmount && (
        <PaidAmount>{`${addCommaToNumber(paidAmount)}원`}</PaidAmount>
      )}
    </Wrapper>
  );
}

export default React.memo(ProductCard);

const Wrapper = styled.div`
  width: 32.8rem;
`;

const StyledRow = styled(Row)`
  align-items: flex-start;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 8.4rem;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

const Name = styled(P).attrs({
  level: 2,
  fontWeight: 'medium',
  width: '24.8rem',
  numOfLines: 2,
  height: '4rem',
})`
  margin-bottom: 0.8rem;
`;

const OptionWrapper = styled.div`
  height: fit-content;
`;

const PaidAmount = styled(P).attrs({
  level: 2,
  fontWeight: 'semiBold',
})`
  && {
    flex: 1;
    margin-top: 0.8rem;
    margin-left: auto;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ItemStoreService from '@src/services/ItemStore';
import CartIcon from '@src/asset/icons/common/cart';
import { P } from '@src/component/atoms';
import { BLACK, SALE_RED, WHITE } from '@src/component/atoms/colors';

export type CartIconButtonProps = {
  size?: 'small' | 'large';
  style?: React.CSSProperties;
};

function CartIconButton({ size = 'small', style }: CartIconButtonProps) {
  const router = useRouter();
  const numOfCartItem = ItemStoreService.getItemList('Cart').length;
  const isSmall = size === 'small';
  const iconWidth = isSmall ? '2rem' : '3.6rem';
  const iconHeight = isSmall ? '2rem' : '3.1rem';
  const textLevel = isSmall ? -2 : -1;

  return (
    <Wrapper style={style}>
      <CartIcon style={{ width: iconWidth, height: iconHeight }} fill={BLACK} />
      {numOfCartItem > 0 && (
        <NotiNumber isSmall={isSmall}>
          <P level={textLevel} color={WHITE}>
            {numOfCartItem}
          </P>
        </NotiNumber>
      )}
    </Wrapper>
  );
}

export default React.memo(CartIconButton);

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  border: none;
  outline: none;
  padding: 0;
`;

const NotiNumber = styled.div<{ isSmall: boolean }>`
  position: absolute;
  ${(props) => `
  top: ${props.isSmall ? '-0.05rem' : '-0.3rem'} ;
  right: ${props.isSmall ? '-0.35rem' : '-0.3rem'} ;
  width: ${props.isSmall ? '1rem' : '1.2rem'} ;
  height: ${props.isSmall ? '1rem' : '1.2rem'} ;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background-color: ${SALE_RED};
`;

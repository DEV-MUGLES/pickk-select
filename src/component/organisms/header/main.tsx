import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import LogoButton from '@src/component/molecules/button/icon/logo';
import CartIconButton from '@src/component/molecules/button/icon/cart';
import SearchIcon from '@src/asset/icons/common/search';
import NotificationIcon from '@src/asset/icons/common/header/notification';
import { Row } from '@src/component/atoms';
import { WHITE } from '@src/component/atoms/colors';

import { getRem } from '@src/lib/utils/Rem';
import { useScrollDirection, useScrollY } from '@src/hooks';

export type MainHeaderProps = {
  isHome: boolean;
  isMy: boolean;
};

function MainHeader({ isHome, isMy }: MainHeaderProps) {
  const scrollDirection = useScrollDirection('up');
  const scrollY = useScrollY();

  const showHeader = scrollDirection === 'up';
  const showBoxShadow = scrollY > getRem() * 10;

  return (
    <Wrapper showHeader={showHeader} showBoxShadow={showBoxShadow}>
      {isHome && <LogoButton />}
      <IconWrapper>
        {isMy && (
          <Link href="/my/notifications" passHref>
            <a>
              <NotificationIcon style={{ marginRight: '1.2rem' }} />
            </a>
          </Link>
        )}
        {!isMy && (
          <Link href="/search" passHref>
            <a>
              <SearchIcon style={{ marginRight: '1.2rem' }} />
            </a>
          </Link>
        )}
        <Link href="/cart" passHref>
          <a>
            <CartIconButton size="small" />
          </a>
        </Link>
      </IconWrapper>
    </Wrapper>
  );
}

export default React.memo(MainHeader);

const Wrapper = styled.header<{ showHeader: boolean; showBoxShadow: boolean }>`
  position: fixed;
  z-index: 998;
  top: ${({ showHeader }) => (showHeader ? '0' : '-4rem')};
  transition: all 0.5s;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  max-width: 36rem;
  height: 4rem;
  padding: 1.2rem 1.6rem;

  background-color: ${WHITE};
  ${({ showBoxShadow }) =>
    showBoxShadow && `box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.2)`};
`;

const IconWrapper = styled(Row)`
  width: fit-content;
  height: fit-content;
  margin-left: auto;
`;

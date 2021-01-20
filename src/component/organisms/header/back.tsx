import * as React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

import HomeLineIcon from '@src/asset/icons/button/toggle/home/line';
import CartIconButton from '@src/component/molecules/button/icon/cart';
import ArrowLeftIcon from '@src/asset/icons/common/arrow/left';
import { P, Clickable, Row, Space } from '../../atoms';
import { WHITE, BLACK } from '../../atoms/colors';

type BackHeaderProps = {
  title?: string;
  homeVisible?: boolean;
  cartVisible?: boolean;
  backIconColor?: string;
  ButtonComponent?: React.ReactElement;
};

function BackHeader({
  title,
  homeVisible,
  cartVisible,
  backIconColor = BLACK,
  ButtonComponent = <></>,
}: BackHeaderProps) {
  return (
    <Wrapper>
      <Clickable
        onClick={() => Router.back()}
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ArrowLeftIcon
          style={{ width: '2rem', height: '2rem' }}
          fill={backIconColor}
        />
      </Clickable>
      <P level={3} color={BLACK} fontWeight="medium">
        {title}
      </P>
      <ButtonRow>
        {homeVisible && (
          <Link href="/" passHref>
            <a>
              <HomeLineIcon />
            </a>
          </Link>
        )}
        <Space direction="ROW" size={16} />
        {cartVisible && (
          <Link href="/cart" passHref>
            <a>
              <CartIconButton size="small" />
            </a>
          </Link>
        )}
        {ButtonComponent}
      </ButtonRow>
    </Wrapper>
  );
}

export default React.memo(BackHeader);

const Wrapper = styled.header`
  width: 100%;
  height: 4.4rem;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonRow = styled(Row)`
  justify-content: flex-end;
  flex: 1;

  width: auto;
  margin-left: auto;
`;

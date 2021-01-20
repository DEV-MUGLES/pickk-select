import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CartIconButton from '@src/component/molecules/button/icon/cart';
import ArrowLeftIcon from '@src/asset/icons/common/arrow/left';
import HomeLineIcon from '@src/asset/icons/button/toggle/home/line';
import { Space, Link as _Link } from '@src/component/atoms';
import { WHITE, BLACK } from '@src/component/atoms/colors';

import { ReviewType } from '@src/types';
import { prefetchItem } from '@src/lib/api';
import { listConfig as reviewsListConfig } from '@src/services/api/Post/config';
import { listConfig as looksListConfig } from '@src/services/api/Look/config';

function ReviewDetailHeader() {
  const router = useRouter();
  const reviewType = router.pathname.includes('post')
    ? ReviewType.Post
    : ReviewType.Look;

  const [isReferred, setIsReferred] = useState(true);
  const listpath = `/${reviewType.toLowerCase()}s`;

  useEffect(() => {
    if (!isReferred) {
      const params = { offset: 0, limit: 20 };
      prefetchItem(
        reviewType === ReviewType.Post
          ? reviewsListConfig(params)
          : looksListConfig(params)
      );
      return;
    }
    try {
      const { referrer } = document;
      if (typeof referrer === 'undefined' || referrer === '') {
        setIsReferred(false);
        return;
      }
      const { origin } = new URL(encodeURI(referrer));
      if (origin !== location.origin) {
        setIsReferred(false);
      }
    } catch {}
  }, [isReferred]);

  return (
    <Wrapper>
      <Link href={isReferred ? '' : listpath} passHref>
        <a
          onClick={
            isReferred
              ? (e) => {
                  e.preventDefault();
                  router.back();
                }
              : null
          }
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ArrowLeftIcon />
        </a>
      </Link>
      <Row>
        <_Link href="/">
          <HomeLineIcon />
        </_Link>
        <Space direction="ROW" size={16} />
        <_Link href="/cart">
          <CartIconButton size="small" />
        </_Link>
      </Row>
    </Wrapper>
  );
}

export default React.memo(ReviewDetailHeader);

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 56px;
  z-index: 100;
  background-color: ${WHITE};
  align-items: center;
  padding: 16px 24px;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
align-items:: center;
`;

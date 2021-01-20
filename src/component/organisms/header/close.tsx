import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import XIcon from '@src/asset/icons/common/x';
import { Clickable, P } from '@src/component/atoms/';
import { BLACK } from '@src/component/atoms/colors';

type IProps = {
  title: string;
  right?: boolean;
  href?: string;
  onClick?: () => void;
};

function CloseHeader({ title, right = false, href, onClick }: IProps) {
  const handleCloseClick = onClick
    ? onClick
    : href
    ? () => Router.push(href)
    : () => Router.back();

  const LeftComponent = right
    ? Empty
    : () => <CloseButton onClick={handleCloseClick} />;
  const RightComponent = right
    ? () => <CloseButton onClick={handleCloseClick} />
    : Empty;

  return (
    <Wrapper>
      <LeftComponent />
      <P level={3} color={BLACK} fontWeight={500}>
        {title}
      </P>
      <RightComponent />
    </Wrapper>
  );
}

export default React.memo(CloseHeader);

const CloseButton = ({ onClick }) => (
  <Clickable onClick={onClick}>
    <XIcon style={{ width: '1.2rem', height: '1.2rem' }} fill={BLACK} />
  </Clickable>
);

const Empty = styled.div`
  width: 2rem;
  height: 2rem;
`;

const Wrapper = styled.header`
  width: 100%;
  height: 4.4rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

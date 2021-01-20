import styled from 'styled-components';
import Link from 'next/link';

import { P } from '@src/component/atoms';
import PartnerIcon from '@src/asset/icons/partner-icon';

import { PProps } from '@src/component/atoms/P';
import { IBrand } from '@src/interfaces';

export type BrandNameTextProps = Pick<PProps, 'level' | 'fontWeight'> &
  Pick<IBrand, 'nameKor' | 'isPartner'> & {
    width?: string;
    marginLeft?: string;
    marginBottom?: string;
    style?: React.CSSProperties;
    isBrandRouting?: boolean;
    id?: number;
  };

function BrandNameText({
  nameKor,
  isPartner,
  level = 0,
  fontWeight = 'medium',
  width = null,
  marginLeft = '0.4rem',
  marginBottom = '0.15rem',
  style = {},
  isBrandRouting = false,
  id = null,
}) {
  const iconSize = width ? width : `${1 + (level - 1) * 0.2}rem`;
  return (
    <Link href={isBrandRouting ? `/brands/${id}` : ''}>
      <Wrapper style={style}>
        <P level={level} fontWeight={fontWeight}>
          {nameKor}
        </P>
        {isPartner && (
          <PartnerIcon
            style={{
              width: iconSize,
              height: iconSize,
              marginLeft,
              marginBottom,
            }}
          />
        )}
      </Wrapper>
    </Link>
  );
}

export default BrandNameText;

const Wrapper = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

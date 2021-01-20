import React from 'react';
import styled from 'styled-components';

import Img, { ImageSize } from '../../atoms/Img';
import { LIGHT_GREY } from '@src/component/atoms/colors';

export type ItemCardThumbnailProps = {
  src: string;
  style?: React.CSSProperties;
  size?: ImageSize;
  hasSize?: boolean;
  ratio?: number;
};

function ItemCardThumbnail({
  src,
  style,
  size = 256,
  hasSize = true,
}: ItemCardThumbnailProps) {
  return (
    <Wrapper style={style}>
      <ContentWrapper>
        <Img
          {...{ src }}
          style={{ objectFit: 'cover' }}
          size={hasSize ? size : null}
          alt="아이템 이미지"
        />
      </ContentWrapper>
    </Wrapper>
  );
}

export default React.memo(ItemCardThumbnail);

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 0.05rem solid ${LIGHT_GREY};
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

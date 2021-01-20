import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import ItemThumbnailRating from './rating';
import { Img, Row, P } from '@src/component/atoms';
import { ImageSize } from '@src/component/atoms/Img';
import { BLACK, SALE_RED, WHITE } from '@src/component/atoms/colors';

export type RankSize = 'small' | 'large';

export type ItemThumbnailProps = {
  width: number;
  height: number;
  src: string;
  alt?: string;
  rating?: number;
  pickk?: boolean;
  style?: CSSProperties;
  rank?: number;
  rankSize?: RankSize;
  circle?: boolean;
};

export default function ItemThumbnail({
  width,
  height,
  src,
  alt,
  rating,
  pickk,
  style,
  rank,
  rankSize = 'small',
  circle = false,
}: ItemThumbnailProps) {
  const imageSize =
    [128, 256, 512, 1024].find((size) => size >= width * 2) || 1600;

  return (
    <Wrapper style={{ height: `${height / 10}rem`, ...style }}>
      {rank && (
        <RankWrapper>
          <P
            level={{ small: 1, large: 2 }[rankSize]}
            color={WHITE}
            fontWeight="semiBold"
          >
            {rank}
          </P>
        </RankWrapper>
      )}
      <Img
        {...{ src, width: `${width / 10}rem`, height: `${height / 10}rem` }}
        size={imageSize as ImageSize}
        alt={alt || '아이템 썸네일'}
        cover
        border
        circle={circle}
      />
      <TagWrapper>
        {rating > 0 && <ItemThumbnailRating rating={rating} />}
        {pickk && (
          <PickkWrapper>
            <P level={2} fontWeight="bold" color={WHITE}>
              핔
            </P>
          </PickkWrapper>
        )}
      </TagWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const RankWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${BLACK};
`;

const TagWrapper = styled(Row)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: fit-content;
  height: 2.8rem;
`;

const PickkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  width: fit-content;
  height: 100%;
  background-color: ${SALE_RED};
`;

import React from 'react';
import styled from 'styled-components';

import RatingIcon from '@src/asset/icons/item/rating';
import { Row, P } from '@src/component/atoms';
import { BLACK, WHITE } from '@src/component/atoms/colors';

export type ItemThumbnailRatingProps = {
  rating: number;
};

export default function ItemThumbnailRating({
  rating,
}: ItemThumbnailRatingProps) {
  return (
    <Wrapper>
      <RatingIcon style={{ marginRight: '0.6rem' }} />
      <P level={2} fontWeight="medium" color={WHITE}>
        {rating} 점
      </P>
    </Wrapper>
  );
}

const Wrapper = styled(Row)`
  justify-content: center;
  width: 6.8rem;
  height: 100%;
  background-color: ${BLACK};
`;

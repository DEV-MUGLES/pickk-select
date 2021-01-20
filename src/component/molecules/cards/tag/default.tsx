import React, { ReactText } from 'react';
import styled from 'styled-components';

import { LIGHT_GREY } from '@src/component/atoms/colors';

export type TagCardDefaultProps = {
  children: ReactText;
};

function TagCardDefault({ children }: TagCardDefaultProps) {
  return <Card>#{children}</Card>;
}

export default React.memo(TagCardDefault);

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1rem;
  &:not(:last-child) {
    margin-right: 0.8rem;
  }

  background-color: ${LIGHT_GREY};
  font-size: 1.2rem;
`;

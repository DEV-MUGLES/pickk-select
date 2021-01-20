import React from 'react';
import styled from 'styled-components';

import { BLACK, REGULAR_GREY, WHITE } from '@src/component/atoms/colors';

const TagCardInput = styled.div<{ selected?: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.2rem;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 9999px;
  font-size: 1.2rem;
  ${({ selected }) => `
    border : 0.1rem solid ${selected ? BLACK : REGULAR_GREY};
        background-color: ${selected ? BLACK : WHITE};
        color : ${selected ? WHITE : BLACK};
    `}
`;

export default React.memo(TagCardInput);

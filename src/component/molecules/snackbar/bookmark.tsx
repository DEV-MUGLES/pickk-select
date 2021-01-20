import React from 'react';
import styled from 'styled-components';

import { Button, P } from '@src/component/atoms';
import { LIGHT_GREY, WHITE } from '@src/component/atoms/colors';

export type BookmarkTargetType = 'Review' | 'Item';

function BookmarkSnackbar() {
  return (
    <Wrapper>
      <P level={2}>리뷰가 저장되었습니다.</P>
      <Button title="저장함 가기" size="small" href="/my/bookmarks" />
    </Wrapper>
  );
}

export default React.memo(BookmarkSnackbar);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 36rem;
  padding: 1.2rem;

  background-color: ${WHITE};
  box-shadow: 0px -1px 4px -1px ${LIGHT_GREY};
`;

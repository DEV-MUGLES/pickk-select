import React from 'react';
import styled from 'styled-components';

type RowProps = React.HTMLAttributes<HTMLDivElement>;

function Row(props: RowProps) {
  return <_Row {...props} />;
}

export default React.memo(Row);

const _Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

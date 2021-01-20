import React from 'react';
import styled from 'styled-components';

type ColProps = React.HTMLAttributes<HTMLDivElement>;

function Col(props: ColProps) {
  return <_Col {...props} />;
}

export default React.memo(Col);

const _Col = styled.div`
  display: flex;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

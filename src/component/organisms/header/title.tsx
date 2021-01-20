import React from 'react';
import styled from 'styled-components';

import { P } from '../../atoms';
import { BLACK } from '../../atoms/colors';

type IProps = {
  title: string;
};

export default function TitleHeader(props: IProps) {
  return (
    <Wrapper>
      <P level={3} color={BLACK} fontWeight="medium">
        {props.title}
      </P>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 56px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

import React from 'react';
import styled from 'styled-components';

import { P, Space, Button } from '@src/component/atoms';

export type NoResultProps = {
  icon?: JSX.Element;
  text: string;
  button?: { text: string; link: string };
};

export default function NoResult({ icon, text, button }: NoResultProps) {
  return (
    <Wrapper>
      {icon && (
        <>
          {icon}
          <Space level={4} />
        </>
      )}
      <P level={2} textAlign="center" preWrap>
        {text}
      </P>
      {button && (
        <Button
          href={button.link}
          title={button.text}
          style={{ marginTop: '2rem' }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10rem;
`;

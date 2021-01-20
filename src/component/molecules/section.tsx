import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { P, Row, Strong, Link } from '@src/component/atoms';
import { MIDDLE_GREY, LIGHT_GREY } from '@src/component/atoms/colors';

export type SectionProps = {
  title: string;
  description?: string;
  count?: number;
  href?: string;
  children?: ReactNode | ReactNodeArray;
  containerStyle?: React.CSSProperties;
  noLine?: boolean;
};

function Section({
  title,
  description,
  count,
  href,
  children,
  containerStyle,
  noLine = false,
}: SectionProps) {
  return (
    <Wrapper noLine={noLine}>
      <HeadWrapper>
        <TitleWrapper>
          <Title>
            {title}
            {` `}
            <Strong level={4} fontWeight="semiBold" color={MIDDLE_GREY}>
              {count}
            </Strong>
          </Title>
          {description && <Description>{description}</Description>}
        </TitleWrapper>
        {href && (
          <Link href={href}>
            <P level={2} fontWeight="medium" color={MIDDLE_GREY}>
              전체보기
            </P>
          </Link>
        )}
      </HeadWrapper>
      <Container style={containerStyle}>{children}</Container>
    </Wrapper>
  );
}

export default React.memo(Section);

const Wrapper = styled.section<{ noLine: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 2rem 0;
  ${(props) => !props.noLine && `border-top: 0.6rem solid ${LIGHT_GREY};`}
`;

const HeadWrapper = styled(Row)`
  padding: 0 1.6rem;
  margin-bottom: 1.6rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
`;

const Title = styled(P).attrs({
  level: 4,
  fontWeight: 'bold',
})`
  margin-right: auto;
`;

const Description = styled(P).attrs({
  level: 1,
  color: MIDDLE_GREY,
})`
  margin-top: 0.4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

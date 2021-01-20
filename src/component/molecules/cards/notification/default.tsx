import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {
  LIGHT_GREY,
  MIDDLE_GREY,
  SEMI_MIDDLE_GREY,
} from '@src/component/atoms/colors';

import { INotification } from '@src/interfaces';
import { Img, P } from '@src/component/atoms';

import { stringifyPassedTime } from '@src/lib/utils';
import { NotificationService } from '@src/services';
import { NotificationModel, NotificationTargetData } from '@src/types';

export type NotificationCardProps = Pick<
  INotification,
  'id' | 'imageUrl' | 'title' | 'body' | 'model' | 'targetData' | 'createdAt'
>;

const { Look, Post, Comment, User } = NotificationModel;

const getNotificaionHref = (
  model: NotificationModel,
  targetData: NotificationTargetData
) =>
  ({
    [Look]: `/looks/${targetData.id}`,
    [Post]: `/posts/${targetData.id}`,
    [Comment]: `/comments/${targetData.postId ? Post : Look}/${
      targetData.postId || targetData.lookId
    }`,
    [User]: `/channel/${targetData.id}`,
  }[model]);

function NotificationCard({
  id,
  imageUrl,
  title,
  body,
  model,
  targetData,
  createdAt,
}: NotificationCardProps) {
  return (
    <Link href={getNotificaionHref(model, targetData)} passHref>
      <Wrapper
        onClick={() => {
          NotificationService.check([id]);
        }}
      >
        <AvatarImage src={imageUrl} alt={title} />
        <BodyWrapper>
          <Title>{title}</Title>
          <Date>{stringifyPassedTime(createdAt)}</Date>
          <P level={1} color={SEMI_MIDDLE_GREY}>
            {body}
          </P>
        </BodyWrapper>
      </Wrapper>
    </Link>
  );
}

export default React.memo(NotificationCard);

const Wrapper = styled.a`
  display: flex;
  flex-direction: row;

  width: 32.8rem;
  margin: 0 auto;
  margin-top: 1.2rem;
  padding-bottom: 1.2rem;

  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${LIGHT_GREY};
  }
`;

const AvatarImage = styled(Img).attrs({
  width: '3.2rem',
  height: '3.2rem',
  circle: true,
})`
  margin-right: 1rem;
`;

const BodyWrapper = styled.div`
  display: flex
  flex-direction: column;
`;

const Title = styled(P).attrs({
  level: 1,
  fontWeight: 'medium',
})`
  margin-bottom: 0.4rem;
`;

const Date = styled(P).attrs({
  level: 1,
  color: MIDDLE_GREY,
})`
  margin-bottom: 0.4rem;
`;

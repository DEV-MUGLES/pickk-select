import React from 'react';
import styled from 'styled-components';

import { PostCardProps } from './props';

import { Img, P } from '@src/component/atoms';
import { MIDDLE_GREY } from '@src/component/atoms/colors';

import { getYoutubeThumbnailSrc } from '@src/lib/utils';

function PostCardSmall({
  id,
  title,
  user,
  youtubeVideoId,
  postItems,
  style,
}: PostCardProps) {
  const thumbnailSrc =
    getYoutubeThumbnailSrc(youtubeVideoId) ||
    Object.values(postItems[0].contents?.entityMap || {}).filter(
      ({ type }) => type === 'image'
    )[0]?.data.src;

  return (
    <Wrapper href={`/posts/${id}`} style={style}>
      <Thumbnail
        src={thumbnailSrc}
        alt={title}
        width="16rem"
        height="9rem"
        cover
        size={youtubeVideoId ? null : 512}
      />
      <Title>{title}</Title>
      <UserName>{user.name}</UserName>
    </Wrapper>
  );
}

export default React.memo(PostCardSmall);

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;

const Thumbnail = styled(Img)`
  margin-bottom: 0.8rem;
`;

const Title = styled(P).attrs({
  level: 2,
  fontWeight: 'medium',
  ellipsis: true,
  numOfLines: 2,
})`
  width: 16rem;
  height: 4rem;
  margin-bottom: 0.6rem;
`;

const UserName = styled(P).attrs({
  level: 1,
  color: MIDDLE_GREY,
})``;

import React from 'react';
import styled from 'styled-components';
import router from 'next/router';
import Link from 'next/link';

import { PostCardProps } from './props';

import PostCardThumbnailDefault, {
  PostCardThumbnailDefaultProps,
} from '@src/component/molecules/thumbnail/post/default';
import { ItemCardRowSmall } from '@src/component/molecules/cards/item';
import HeartIcon from '@src/asset/icons/heart';
import BookmarkIcon from '@src/asset/icons/bookmark';
import CommentIcon from '@src/asset/icons/comment/comment';
import { Col, Img, Row, P, HorizontalScrollable } from '@src/component/atoms';
import {
  BLACK,
  LIGHT_GREY,
  SEMI_MIDDLE_GREY,
  WHITE,
} from '@src/component/atoms/colors';

import { notification } from '@src/lib';
import { useAuthVerify, usePostIsBookmarking } from '@src/hooks';
import { PostService } from '@src/services';

const getHeightRangeText = (height) => {
  if (height < 167) {
    return '166이하';
  } else if (height < 170) {
    return '160후반';
  } else if (height < 173) {
    return '170초반';
  } else if (height < 177) {
    return '170중반';
  } else if (height < 180) {
    return '170후반';
  } else {
    return '180이상';
  }
};

function PostCardDefault(props: PostCardProps) {
  const {
    id,
    user,
    title,
    commentsCount,
    followersCount,
    postItems,
    style,
  } = props;

  const { data: verified } = useAuthVerify();
  const { data } = usePostIsBookmarking(id);
  const isBookmarking = data?.isBookmarking;

  const postUrl = `/posts/${id}`;
  const channelUrl = `/channel/${user.id}`;

  const toggleBookmark = () => {
    if (!verified) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/auth/signin');
      return;
    }

    try {
      if (isBookmarking) {
        PostService.unbookmark(id);
      } else {
        PostService.bookmark(id);
        notification.bookmark();
      }
    } catch (err) {
      console.log('저장 실패');
    }
  };

  return (
    <Wrapper style={style}>
      <StyledRow>
        <Link href="/channel/[id]" as={channelUrl} passHref>
          <StyledA>
            <Img
              src={user.profileImageUrl}
              alt={user.name}
              width="1.6rem"
              height="1.6rem"
              size="avatar"
              style={{ marginRight: '0.6rem' }}
              circle
              cover
              border
            />
            <P level={2}>{user.name}</P>
          </StyledA>
        </Link>
        {!!user.height && (
          <HeightTag>{getHeightRangeText(user.height)}</HeightTag>
        )}
        <Button onClick={toggleBookmark}>
          <BookmarkIcon
            fillIn={isBookmarking ? BLACK : WHITE}
            style={{ width: '1.6rem', height: '1.6rem' }}
          />
        </Button>
      </StyledRow>
      <A href={postUrl} aria-label={`포스트${id}`}>
        <Title>{title}</Title>
        <PostCardThumbnailDefault
          {...(props as PostCardThumbnailDefaultProps)}
        />
        <HorizontalScrollable
          style={{ padding: '1.2rem 0' }}
          containerStyle={{ paddingRight: '2rem' }}
        >
          {postItems?.map(({ item }) => (
            <ItemCardRowSmall {...item} style={{ marginRight: '1.2rem' }} />
          ))}
        </HorizontalScrollable>
      </A>
      <Row>
        <HeartIcon
          style={{ width: '1.4rem', height: '1.4rem', marginRight: '0.6rem' }}
        />
        <P level={1} fontWeight="medium">
          {followersCount}
        </P>
        <CommentIcon
          style={{
            width: '1.2rem',
            height: '1.2rem',
            marginRight: '0.6rem',
            marginLeft: '1.2rem',
          }}
        />
        <P level={1} fontWeight="medium">
          {commentsCount}
        </P>
      </Row>
    </Wrapper>
  );
}

export default React.memo(PostCardDefault);

const Wrapper = styled(Col)`
  && {
    width: 100%;
    overflow: hidden;
    border-bottom: solid 0.6rem ${LIGHT_GREY};
    padding: 2rem 0 2rem 1.6rem;
  }
`;

const StyledA = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const StyledRow = styled(Row)`
  padding-right: 1.6rem;
  margin-bottom: 1.6rem;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
`;

const Title = styled(P).attrs({
  level: 3,
  fontWeight: 'bold',
  ellipsis: true,
  numOfLines: 2,
})`
  margin-right: 1.6rem;
  margin-bottom: 1.2rem;
`;

const Button = styled.button`
  margin-left: auto;
  padding: 0;
  background-color: transparent;
  border: none;
`;

const HeightTag = styled(P).attrs({
  level: 1,
  fontWeight: 'light',
})`
  color: ${SEMI_MIDDLE_GREY};
  background-color: ${LIGHT_GREY};

  padding: 0.2rem 0.8rem;
  margin-left: 0.8rem;
  border-radius: 0.2rem;
`;

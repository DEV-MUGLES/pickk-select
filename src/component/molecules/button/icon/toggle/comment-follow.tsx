import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ThumbsUpIcon from '@src/asset/icons/ThumbsUp';
import { Space, P } from '@src/component/atoms';
import { BLACK, WHITE, MIDDLE_GREY } from '../../../../atoms/colors';

import { CommentService } from '@src/services';
import { useCommentIsFollowing, useAuthVerify } from '@src/hooks';

export type CommentFollowButtonProps = {
  id: number;
  iconSize?: string;
  dark?: boolean;
};

function CommentFollowButton({
  id,
  iconSize = '1.6rem',
  dark = false,
}: CommentFollowButtonProps) {
  const router = useRouter();
  const { data: verified } = useAuthVerify();
  const { data } = useCommentIsFollowing(id);
  const isFollowing = data?.isFollowing;
  const followersCount = data?.followersCount;

  const style = {
    width: iconSize,
    height: iconSize,
  };

  const [fillLeft, fillRight, fillOut] = isFollowing
    ? [WHITE, BLACK, BLACK]
    : [WHITE, WHITE, MIDDLE_GREY];

  const handleFollow = (e) => {
    e.preventDefault();
    if (!data) {
      return;
    }
    if (!verified) {
      alert('로그인이 필요한 기능입니다.');
      router.push('/auth/signin');
      return;
    }
    if (isFollowing) {
      CommentService.unfollow(id);
    } else {
      CommentService.follow(id);
    }
  };

  return (
    <Wrapper onClick={handleFollow}>
      <ThumbsUpIcon {...{ style, fillLeft, fillRight, fillOut }} />
      <Space direction="ROW" size={3} />
      <P level={1} color={fillOut}>
        {followersCount || 0}
      </P>
    </Wrapper>
  );
}

export default React.memo(CommentFollowButton);

const Wrapper = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

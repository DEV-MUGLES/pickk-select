import React from 'react';
import styled from 'styled-components';

import { Img, P } from '@src/component/atoms';
import { BLACK, WHITE } from '@src/component/atoms/colors';

import { IPost } from '@src/interfaces';
import { addLeadingZeros, getYoutubeThumbnailSrc } from '@src/lib/utils';

export type PostCardThumbnailDefaultProps = Partial<
  Pick<IPost, 'youtubeVideoId' | 'youtubeVideoDuration' | 'postItems'>
>;
function PostCardThumbnailDefault({
  youtubeVideoId,
  youtubeVideoDuration,
  postItems,
}: PostCardThumbnailDefaultProps) {
  const thumbnailSrc = getYoutubeThumbnailSrc(youtubeVideoId);

  const postItemEntities = postItems
    .filter((_, i) => i < 3)
    .map(({ contents }) => contents?.entityMap);

  const postImages = postItemEntities.map((e) =>
    Object.values(e || {}).filter(
      ({ type, data }) => type === 'image' && data.src
    )
  );

  const postImagesCount = postImages.reduce(
    (acc, curr) => acc + Object.values(curr).length,
    0
  );

  const thumbnailImages = postImages
    .slice(0, Math.ceil(3 / postItemEntities.length))
    .reduce((acc, curr) => [...acc, ...curr], [])
    .slice(0, 3);

  const mm = addLeadingZeros(Math.floor(youtubeVideoDuration / 60), 2);
  const ss = addLeadingZeros(youtubeVideoDuration % 60, 2);

  return (
    <>
      {youtubeVideoId && (
        <YoutubeThumbnailWrapper>
          <MiddleWrapper>
            <Img src={thumbnailSrc} size={null} over alt="포스트 썸네일" />
          </MiddleWrapper>
          {youtubeVideoDuration > 0 && <Duration>{`${mm}:${ss}`}</Duration>}
        </YoutubeThumbnailWrapper>
      )}
      {!youtubeVideoId && (
        <ImageThumbnailsWrapper>
          {thumbnailImages.map(({ data }, i) => (
            <ImageThumbnailWrapper
              style={{
                width: thumbnailImages.length === 1 ? '100%' : '49.7%',
                height:
                  thumbnailImages.length === 3 && i > 0 ? '9.1rem' : '18.4rem',
              }}
            >
              <Img
                src={data.src}
                cover
                width="100%"
                height="100%"
                size={256}
                alt="썸네일 이미지"
              />
              <Overlay
                style={{
                  display: postImagesCount > 3 && i === 2 ? 'flex' : 'none',
                }}
              >
                <P level={2} color={WHITE} fontWeight="medium">
                  + {postImagesCount - 3}
                </P>
              </Overlay>
            </ImageThumbnailWrapper>
          ))}
        </ImageThumbnailsWrapper>
      )}
    </>
  );
}

const YoutubeThumbnailWrapper = styled.div`
  width: calc(100% - 1.6rem);
  height: 0.1px;
  padding-top: 56.2%;
  position: relative;
`;

const MiddleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  z-index: 1;
`;

const Duration = styled.div`
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;
  z-index: 2;

  padding: 0.5rem;
  background-color: ${BLACK};
  color: ${WHITE};
`;

const ImageThumbnailsWrapper = styled.div`
  width: 100%;
  padding-right: 1.6rem;
  display: flex;
  flex-flow: column wrap;
  height: 18.4rem;
  align-items: space-between;
  justify-content: space-between;
`;

const ImageThumbnailWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: rgba(51, 51, 51, 0.8);
`;

export default React.memo(PostCardThumbnailDefault);

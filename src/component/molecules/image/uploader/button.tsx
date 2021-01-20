import React from 'react';
import styled from 'styled-components';

import ImageAddIcon from '@src/asset/icons/postedit/add-image';
import { P } from '@src/component/atoms';
import { REGULAR_GREY } from '@src/component/atoms/colors';

export type ImageUploadButtonProps = {
  uploading?: boolean;
  style?: React.CSSProperties;
};

function ImageUploadButton({ uploading, style }: ImageUploadButtonProps) {
  if (uploading) {
    return (
      <Wrapper style={style}>
        <P fontWeight="medium" color={REGULAR_GREY}>
          업로드중...
        </P>
      </Wrapper>
    );
  }

  return (
    <Wrapper style={style}>
      <ImageAddIcon fill={REGULAR_GREY} style={{ margin: '0.6rem 0 0.2rem' }} />
      <P fontWeight="medium" color={REGULAR_GREY}>
        사진추가
      </P>
    </Wrapper>
  );
}

export default React.memo(ImageUploadButton);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 7.2rem;
  height: 7.2rem;
  margin-top: 1.2rem;
  border: 0.1rem solid ${REGULAR_GREY};
`;

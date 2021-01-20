import React, { useState, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { P, Col } from '../../../atoms';
import { MIDDLE_GREY } from '../../../atoms/colors';

import { ImageService } from '@src/services';

type IProps = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setImgStr: any;
  children?: ReactNode | ReactNodeArray;
  style?: React.CSSProperties;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUploading?: any;
};

export default function ImageUploaderSingle(props: IProps) {
  const [isUploading, setUploading] = useState(false);
  const { setImgStr, children, id, style } = props;

  const handleUpload = async (e) => {
    try {
      e.preventDefault();
      if (isUploading) {
        return;
      }
      const file = e.target.files[0];
      setUploading(true);
      if (props.setUploading) {
        props.setUploading(true);
      }
      const { images } = await ImageService.uploadFile([file]);
      setImgStr(images[0]);
    } catch {
      alert('이미지 업로드에 실패했습니다!');
    }
    setUploading(false);
    if (props.setUploading) {
      props.setUploading(false);
    }
  };

  return (
    <Wrapper style={style}>
      {isUploading || children}
      {isUploading && <P color={MIDDLE_GREY}>업로드중..</P>}
      <HiddenInput
        id={id}
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
      <Label htmlFor={id} />
    </Wrapper>
  );
}

const Wrapper = styled(Col)`
  && {
    width: fit-content;
    height: fit-content;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;

const HiddenInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  margin: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
`;

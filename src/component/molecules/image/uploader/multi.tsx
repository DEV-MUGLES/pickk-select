import React, { useState } from 'react';
import styled from 'styled-components';

import { Col } from '../../../atoms';

import { ImageService } from '@src/services';

type IProps = {
  id: string;
  pushImgsStr: (imgs: string[]) => void;
  children?: any;
  UploadingComponent?: any;
  style?: React.CSSProperties;
  setUploading?: any;
};

export default function ImageUploaderMulti(props: IProps) {
  const { pushImgsStr, children, id, style, UploadingComponent } = props;
  const [isUploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    try {
      e.preventDefault();
      if (isUploading) {
        return;
      }
      const files = Array.from<any>(e.target.files);
      setUploading(true);
      if (props.setUploading) {
        props.setUploading(true);
      }
      const { images } = await ImageService.uploadFile(files);
      pushImgsStr(images);
      setUploading(false);
      if (props.setUploading) {
        props.setUploading(false);
      }
    } catch {
      alert('이미지 업로드에 실패했습니다');
      setUploading(false);
      if (props.setUploading) {
        props.setUploading(false);
      }
    }
  };

  return (
    <Wrapper style={style}>
      {children}
      <HiddenInput
        id={id}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        multiple
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

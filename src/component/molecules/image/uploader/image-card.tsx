import React from 'react';
import styled from 'styled-components';

import XIcon from '@src/asset/icons/common/x';
import { Img } from '@src/component/atoms';
import { BLACK, WHITE } from '@src/component/atoms/colors';

export type ImageUploaderImageCardProps = {
  size: 'small' | 'large';
  src: string;
  onDelete: () => void;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

function ImageUploaderImageCard({
  size,
  src,
  onDelete,
  selected = false,
  onClick,
  style = {},
}: ImageUploaderImageCardProps) {
  const width = size === 'small' ? '7.2rem' : '36rem';
  const height = size === 'small' ? width : 'auto';

  return (
    <Wrapper
      onClick={onClick}
      style={{ marginTop: size === 'small' ? '1.2rem' : 0, ...style }}
    >
      <StyledImage
        {...{ src, selected, width, height }}
        size={null}
        cover
        alt={src}
      />
      <DeleteButton onClick={onDelete}>
        <XIcon style={{ width: '1.6rem', height: '1.6rem' }} fill={WHITE} />
      </DeleteButton>
    </Wrapper>
  );
}

export default React.memo(ImageUploaderImageCard);

const Wrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(Img)`
  ${(props: { selected: boolean }) =>
    props.selected ? `border: 0.2rem solid ${BLACK}` : ''}
`;

const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.8rem;
  height: 2.8rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from '@src/modules/slider';
import ImageSliderControl from './control';
import ImageSliderIndicator from './indicator';
import { Img } from '@src/component/atoms';

export type ImageSliderProps = {
  images: string[];
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  hasIndicator?: boolean;
  hasControl?: boolean;
};

function ImageSlider({
  images,
  style = {},
  imageStyle = {},
  hasIndicator = true,
  hasControl = true,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);

  return (
    <Wrapper style={style}>
      <Slider
        {...{
          current,
          setCurrent,
          items: images.map((image) => ({ src: image })),
        }}
        widthRem={36}
        Card={Img}
        cardProps={{
          width: '36rem',
          height: '36rem',
          size: 512,
          style: {
            userSelect: 'none',
            ...imageStyle,
          },
          ...imageStyle,
        }}
      />
      {hasControl && (
        <ImageSliderControl
          current={current}
          onChange={setCurrent}
          size={images.length}
        />
      )}
      {hasIndicator && (
        <ImageSliderIndicator
          current={current}
          onChange={setCurrent}
          size={images.length}
        />
      )}
    </Wrapper>
  );
}

export default React.memo(ImageSlider);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  overflow-x: hidden;
`;

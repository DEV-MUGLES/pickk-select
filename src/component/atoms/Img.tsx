import React from 'react';

import { addImageSize } from '@src/lib/utils';

export type ImageSize = 'avatar' | 50 | 128 | 160 | 256 | 512 | 1024 | 1600;

export type ImgProps = {
  src: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  className?: string;
  over?: boolean;
  border?: boolean;
  size?: ImageSize;
  alt: string;
  cover?: boolean;
} & React.HTMLAttributes<HTMLImageElement>;

function Img({
  className,
  src,
  onClick,
  style,
  children,
  size,
  alt,
  width,
  circle,
  over,
  height,
  border,
  cover = false,
}: ImgProps) {
  const imgStyle: React.CSSProperties = {
    width: width || '100%',
    borderRadius: circle ? '50%' : 0,
    boxSizing: 'border-box',
    objectFit: cover ? 'cover' : undefined,
  };

  const overStyle: React.CSSProperties = over
    ? {
        height: 'auto',
        maxHeight: height || '100%',
        overflow: 'hidden',
        objectFit: 'cover',
        objectPosition: 'top',
      }
    : { height: height || '100%' };

  const borderStyle = border
    ? {
        border: '0.1rem solid #f0f0f0',
      }
    : {};

  return (
    <img
      className={className}
      src={addImageSize(src, size)}
      onClick={onClick}
      style={{
        ...imgStyle,
        ...overStyle,
        ...borderStyle,
        ...style,
      }}
      alt={alt}
    >
      {children}
    </img>
  );
}

export default React.memo(Img);

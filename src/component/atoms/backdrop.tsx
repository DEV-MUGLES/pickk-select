import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { WHITE } from '@src/component/atoms/colors';

export type BackdropAttach = 'bottom' | 'top';

export type BackdropProps = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose: any;
  children: ReactNode | ReactNodeArray;
  zIndex?: number;
  attach?: BackdropAttach;
  hasPadding?: boolean;
  style?: React.CSSProperties;
  paperStyle?: React.CSSProperties;
  className?: string;
  hasOverlay?: boolean;
};

function Backdrop({
  open,
  onClose,
  children,
  zIndex,
  attach = 'bottom',
  hasPadding = true,
  hasOverlay = true,
  style,
  paperStyle,
  className,
}: BackdropProps) {
  const [distance, backgroundColor] = open
    ? ['0', 'rgba(0, 0 ,0, 0.5)']
    : ['100vh', 'rgba(0, 0 ,0, 0)'];

  return (
    <Wrapper
      attach={attach}
      distance={distance}
      style={{
        zIndex,
        backgroundColor: hasOverlay ? backgroundColor : 'transparent',
        ...style,
      }}
      className={className}
    >
      {attach === 'bottom' && <Overlay onClick={onClose} />}
      {open && (
        <Paper hasPadding={hasPadding} attach={attach} style={paperStyle}>
          {children}
        </Paper>
      )}
      {attach === 'top' && <Overlay onClick={onClose} />}
    </Wrapper>
  );
}

export default React.memo(Backdrop);

const Wrapper = styled.div<{ attach: BackdropAttach; distance: string }>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  position: fixed;
  z-index: 999;

  width: 100vw;
  max-width: 36rem;
  height: 100vh;

  overflow-y: auto;
  webkit-overflow-scrolling: touch;

  outline: 0;
  ${(props) =>
    props.attach === 'bottom'
      ? `top: ${props.distance}`
      : `bottom: ${props.distance}`};
  transition: all 0.3s ease-out;
`;

const Overlay = styled.div`
  flex: 1;
  background-color: transparent;
`;

const Paper = styled.div<{ hasPadding: boolean; attach: BackdropAttach }>`
  height: auto;
  padding: ${(props) => (props.hasPadding ? '1.6rem' : '0')};
  border-radius: ${(props) =>
    props.attach === 'bottom' ? '0.8rem 0.8rem 0 0' : '0 0 0.8rem 0.8rem'};
  background-color: ${WHITE};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.08);
`;

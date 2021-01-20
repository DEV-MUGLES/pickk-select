import React, { ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';

import { BLACK } from './colors';

type ClickableProps = {
  className?: string;
  children: ReactNode | ReactNodeArray;
  href?: string;
  target?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function Clickable(props: ClickableProps) {
  const {
    className,
    style,
    onClick,
    children,
    href,
    target,
    onMouseEnter,
  } = props;

  if (href) {
    return (
      <Icon {...{ href, className, style, target, onMouseEnter }}>
        <>{children}</>
      </Icon>
    );
  } else {
    return (
      <Icon className={className} style={style} onClick={onClick}>
        <>{children}</>
      </Icon>
    );
  }
}

const Icon = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  height: fit-content;
  color: ${BLACK};
`;

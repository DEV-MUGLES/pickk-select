import React, { ReactText } from 'react';
import styled from 'styled-components';

import {
  WHITE,
  BLACK,
  LIGHT_GREY,
  HOLDER_GREY,
  REGULAR_GREY,
  MIDDLE_GREY,
  SEMI_LIGHT_GREY,
  TRUE_BLACK,
  SEMI_MIDDLE_GREY,
} from './colors';
import P from './P';

export type ButtonType = 'primary' | 'secondary' | 'line' | 'text';
export type ButtonSize = 'large' | 'small';
export type ButtonRadius = 'round' | 'normal';

export type ButtonProps = Pick<
  React.HTMLAttributes<HTMLButtonElement>,
  'className' | 'children' | 'style'
> & {
  title?: ReactText;
  type?: ButtonType;
  size?: ButtonSize;
  circle?: boolean;
  radius?: ButtonRadius;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  target?: '_blank' | '_self';
  block?: boolean;
  LeftIcon?: any;
  RightIcon?: any;
};

const PRESSED_COLORS = {
  primary: TRUE_BLACK,
  secondary: SEMI_LIGHT_GREY,
  line: MIDDLE_GREY,
};

function Button({
  className,
  title,
  children,
  onClick,
  href,
  target,
  style,
  type = 'primary',
  size = 'large',
  circle = false,
  radius = 'normal',
  disabled = false,
  block = false,
  LeftIcon,
  RightIcon,
}: ButtonProps) {
  const [fontColor, backgroundColor, borderColor] = {
    primary: disabled
      ? [HOLDER_GREY, LIGHT_GREY, 'transparent']
      : [WHITE, BLACK, 'transparent'],
    secondary: disabled
      ? [HOLDER_GREY, LIGHT_GREY, 'transparent']
      : [BLACK, LIGHT_GREY, 'transparent'],
    line: disabled
      ? [HOLDER_GREY, LIGHT_GREY, REGULAR_GREY]
      : [BLACK, WHITE, REGULAR_GREY],
    text: disabled
      ? [REGULAR_GREY, 'transparent', 'transparent']
      : [MIDDLE_GREY, 'transparent', 'transparent'],
  }[type];

  const height = size === 'large' ? '4.4rem' : '2.8rem';
  const width = circle
    ? height
    : size === 'large'
    ? block
      ? 'auto'
      : '100%'
    : 'fit-content';
  const fontLevel = size === 'large' ? 2 : 1;
  const borderRadius = circle
    ? '50%'
    : radius === 'round'
    ? '9999px'
    : '0.2rem';
  const flex = block ? 1 : null;

  const handleClick = (e) => {
    if (!onClick || disabled) {
      return;
    }
    onClick(e);
  };

  return (
    <StyledButton
      {...{
        href: disabled ? null : href,
        target: href ? target || '_self' : undefined,
        onClick: handleClick,
        style,
        disabled,
        backgroundColor,
        borderColor,
        borderRadius,
        pressedColor: PRESSED_COLORS[type],
        width,
        height,
        type,
        size,
        circle,
        flex,
        className,
      }}
    >
      {LeftIcon && (
        <LeftIcon
          style={{ width: '1.6rem', height: '1.6rem', marginRight: '0.6rem' }}
        />
      )}
      {title !== undefined && (
        <StyledP
          level={fontLevel}
          color={fontColor}
          fontWeight="medium"
          buttonType={type}
        >
          {title}
        </StyledP>
      )}
      {children}
      {RightIcon && (
        <RightIcon
          style={{ width: '1.6rem', height: '1.6rem', marginLeft: '0.6rem' }}
        />
      )}
    </StyledButton>
  );
}

export default React.memo(Button);

const StyledButton = styled.a<{
  backgroundColor;
  borderColor;
  borderRadius;
  width;
  height;
  pressedColor;
  type;
  size;
  circle;
  flex;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s;
  ${(props) => `
    padding: ${props.circle ? '0' : '0.6rem 1.2rem'};
    background-color: ${props.backgroundColor};
    border: 0.1rem solid ${props.borderColor};
    border-radius: ${props.borderRadius};
    width: ${props.width};
    height: ${props.height};
    flex: ${props.flex};
  `}
  &:focus {
    ${(props) => {
      if (props.type === 'LINE')
        return `
          border: 0.1rem solid ${props.pressedColor};
        `;
      if (props.type === 'PRIMARY' || props.type === 'SECONDARY') {
        return `
          background-color: ${props.pressedColor};
        `;
      }
    }}
  }
`;

const StyledP = styled(P)<{ buttonType: ButtonType }>`
  user-select: none;
  transition: all 0.5s;
  ${StyledButton}: focus & {
    color: ${(props) => props.buttonType === 'text' && SEMI_MIDDLE_GREY};
  }
`;

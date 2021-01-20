import React from 'react';
import styled from 'styled-components';

import { WHITE, MIDDLE_GREY, BLACK } from './colors';

export type SwitchProps = {
  on: boolean;
  onChange: (on: boolean) => void;
  onText?: string;
  offText?: string;
  style?: React.CSSProperties;
};

export default function Switch({
  on,
  onChange,
  onText = 'ON',
  offText = 'OFF',
  style,
}: SwitchProps) {
  return (
    <Wrapper style={style} on={on} onClick={() => onChange(!on)}>
      <Handle on={on} />
      <InnerText on={on}>{on ? onText : offText}</InnerText>
    </Wrapper>
  );
}

const InnerText = styled.p`
  && {
    width: 2rem;
    margin: 0;
    padding: 0;
    transition: margin 0.36s;
    color: ${WHITE};
    font-size: 1.2rem;
    ${(props: { on: boolean }) => `
    margin-left : ${props.on ? `0.6rem` : `calc(100% - 2.2rem - 0.6rem)`};
  `}
  }
`;

const Handle = styled.div`
  position: absolute;
  transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  z-index: 3;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${WHITE};
  top: 0.2rem;
  left: auto;
  ${(props: { on: boolean }) => `
    ${props.on ? `right: 0.2rem;` : `right : calc(100% - 1.6rem - 0.2rem);`}
  `}
`;

const Wrapper = styled.button`
  position: relative;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: fit-content;
  min-width: 5rem;
  height: 2rem;
  vertical-align: middle;
  border: 0;
  border-radius: 9999px;
  cursor: pointer;
  -webkit-transition: all 0.36s;
  transition: all 0.36s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  ${(props: { on: boolean }) => `
    background-color : ${props.on ? BLACK : MIDDLE_GREY};
  `}
`;

import React from 'react';
import styled, { css } from 'styled-components';

import { addDashToPhoneNumber } from '@src/lib/utils/PhoneNumberParser';

type InputProps = {
  level?: number;
  color?: 'PRIMARY' | string;
  fontWeight?: number | 'bold';
  width?: string;
  padding?: string;
  margin?: string;
  name?: string;
  max?: number;
  min?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
  disabled?: boolean;
  type?: string;
  value: string | number;
} & Omit<React.HtmlHTMLAttributes<HTMLInputElement>, 'onChange'>;

export default function Input(props: InputProps) {
  const { fontWeight, onChange, disabled, type } = props;

  const newFontWeight = fontWeight
    ? fontWeight === 'bold'
      ? 700
      : fontWeight
    : 300;

  const handleChange = (e) => {
    if (type === 'tel') {
      onChange(e, addDashToPhoneNumber(e.target.value));
    } else {
      onChange(e);
    }
  };

  return (
    <_Input
      {...props}
      readOnly={disabled}
      fontWeight={newFontWeight}
      onChange={handleChange}
    />
  );
}

const _Input = styled.input`
  ${(
    props: Pick<
      InputProps,
      'padding' | 'margin' | 'level' | 'color' | 'fontWeight' | 'width'
    >
  ) => css`
    padding: ${props.padding || 0};
    margin: ${props.margin || 0};
    font-size: ${1 + props.level * 0.2}rem;
    color: ${props.color === 'PRIMARY' ? '#e22222' : props.color};
    font-weight: ${props.fontWeight};
    width: ${props.width || '100%'};
  `}
  height: fit-content;
  outline: none;
  border: none;
`;

Input.defaultProps = {
  level: 0,
  color: '#333',
  placeholder: '',
  type: 'text',
  min: 0,
  maxLength: 500,
  disabled: false,
  autoFocus: false,
};

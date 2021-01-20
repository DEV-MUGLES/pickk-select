import React from 'react';
import styled, { css } from 'styled-components';

export type TextareaProps = {
  level?: number;
  color?: 'PRIMARY' | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  value: string;
  placeholder?: string;
  fontWeight?: number | 'bold';
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  padding?: string;
  margin?: string;
  required?: boolean;
  name?: string;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
  rows?: number;
  id?: string;
};

export default function Textarea(props: TextareaProps) {
  const {
    level,
    width,
    color,
    fontWeight,
    className,
    style,
    padding,
    value,
    margin,
    placeholder = '',
    onChange,
    required,
    name,
    resize = 'none',
    rows = 1,
    id,
  } = props;
  const newFontWeight = fontWeight
    ? fontWeight === 'bold'
      ? 700
      : fontWeight
    : 300;

  return (
    <_Textarea
      level={level}
      width={width}
      color={color}
      padding={padding}
      margin={margin}
      fontWeight={newFontWeight}
      value={value}
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      name={name}
      resize={resize}
      rows={rows}
      id={id}
    />
  );
}

const _Textarea = styled.textarea`
  ${(props: {
    padding: string;
    margin: string;
    level: number;
    color: string;
    fontWeight: number;
    resize?:
      | 'none'
      | 'both'
      | 'horizontal'
      | 'vertical'
      | 'initial'
      | 'inherit';
    width: string;
  }) => css`
    padding: ${props.padding || 0};
    margin: ${props.margin || 0};
    font-size: ${1 + props.level * 0.2}rem;
    color: ${props.color === 'PRIMARY' ? '#e22222' : props.color};
    font-weight: ${props.fontWeight};
    width: ${props.width || '100%'};
    resize: ${props.resize};
  `}
  height: fit-content;
  outline: none;
  border: none;
`;

Textarea.defaultProps = {
  level: 0,
  color: '#333',
};

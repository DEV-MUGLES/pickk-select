import React from 'react';
import styled from 'styled-components';

import { P, Row, Space } from '.';
import {
  REGULAR_GREY,
  HOLDER_GREY,
  MIDDLE_GREY,
  BLACK,
  LIGHT_GREY,
  SALE_RED,
  SUCCESS_BLUE,
  WHITE,
} from './colors';

type TextInputType = 'box' | 'line';

export type TextInputProps = Pick<
  React.HTMLAttributes<HTMLInputElement>,
  'id' | 'className' | 'style' | 'onKeyDown'
> & {
  inputId?: string;
  name?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  unit?: string;
  maxLength?: number;
  error?: { state: boolean; text: string };
  success?: { state: boolean; text: string };
  width?: string | number;
  LeftIcon?: any;
  RightIcon?: any;
  type?: TextInputType;
  inputWrapperStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  rightIconStyle?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRightIconClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({
  id,
  inputId,
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  onRightIconClick,
  disabled = false,
  readOnly = false,
  unit,
  maxLength = 524288,
  error = { state: false, text: '' },
  success = { state: false, text: '' },
  width,
  LeftIcon,
  RightIcon,
  type = 'box',
  className,
  style,
  inputWrapperStyle = {},
  inputStyle = {},
  rightIconStyle = {},
}: TextInputProps) {
  const [backgroundColor, borderColor, color, guideTextColor] = getColors(
    readOnly,
    !!error?.state,
    !!success?.state,
    disabled
  );

  return (
    <Wrapper {...{ id, className, width, style }}>
      <InputWrapper
        style={{ backgroundColor, ...inputWrapperStyle }}
        borderColor={borderColor}
        errorState={!!error?.state}
        type={type}
      >
        {LeftIcon && (
          <LeftIcon
            style={{ width: '1.6rem', height: '1.6rem', marginRight: '1.2rem' }}
          />
        )}
        <Input
          id={inputId}
          {...{
            name,
            value,
            placeholder,
            onChange,
            onKeyDown,
            maxLength,
          }}
          disabled={disabled || readOnly}
          style={{ color, ...inputStyle }}
        />
        {unit && <Unit color={borderColor}>{unit}</Unit>}
        {RightIcon && (
          <RightIcon
            onClick={onRightIconClick}
            style={{
              width: '1.6rem',
              height: '1.6rem',
              marginLeft: '1.2rem',
              ...rightIconStyle,
            }}
          />
        )}
      </InputWrapper>
      {(error.state || success.state || maxLength !== 524288) && <Space />}
      <StyledRow>
        {error.state && (
          <P level={1} color={SALE_RED} fontWeight="medium">
            {error.text}
          </P>
        )}
        {success.state && (
          <P level={1} color={SUCCESS_BLUE} fontWeight="medium">
            {success.text}
          </P>
        )}
        {maxLength !== 524288 && maxLength > 0 && (
          <Count color={guideTextColor}>
            {value.length}/{maxLength}
          </Count>
        )}
      </StyledRow>
    </Wrapper>
  );
}

export default React.memo(TextInput);

const Wrapper = styled.div<{ width: number | string }>`
  ${(props) => (props.width ? `width: ${props.width} ` : `flex:1; width:100%;`)}
`;

const Input = styled.input`
  && {
    width: 100%;
    height: 99%;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${BLACK};
    outline: none;
    border: none;
    background-color: transparent;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${HOLDER_GREY};
      font-weight: 500;
    }
    :-ms-input-placeholder {
      color: ${HOLDER_GREY};
      font-weight: 500;
    }
    :-mos-input-placeholder {
      color: ${HOLDER_GREY};
      font-weight: 500;
    }
  }
`;

const InputWrapper = styled(Row)<{
  borderColor: string;
  errorState: boolean;
  type: TextInputType;
}>`
  && {
    height: 4rem;
    padding: 0.05rem 1.6rem;
    border: 0.1rem solid ${(props) => props.borderColor};
    ${(props) =>
      props.type === 'line' &&
      `
      border-top: none;
      border-left: none;
      border-right: none;
      padding: 0.05rem 0rem;
    `}
    :focus-within {
      border: 0.1rem solid
        ${(props) => (props.errorState ? props.borderColor : BLACK)};
      ${(props) =>
        props.type === 'line' &&
        `
          border-top: none;
          border-left: none;
          border-right: none;
        `}
    }
  }
`;

const Unit = styled(P).attrs({
  level: 1,
  fontWeight: 'medium',
  textAlign: 'right',
})`
  width: 2.4rem;
`;

const StyledRow = styled(Row)`
  && {
    justify-content: space-between;
  }
`;

const Count = styled(P).attrs(() => ({ level: 1, fontWeight: 'medium' }))`
  && {
    width: fit-content;
    margin-left: auto;
  }
`;

// return [backgroundColor, borderColor, color, guideTextColor]
const getColors = (
  readOnly: boolean,
  errorState: boolean,
  successState: boolean,
  disabled: boolean
) => {
  if (readOnly) {
    return [LIGHT_GREY, MIDDLE_GREY, BLACK, BLACK];
  }
  if (errorState) {
    return [WHITE, SALE_RED, BLACK, SALE_RED];
  }
  if (successState) {
    return [WHITE, REGULAR_GREY, BLACK, SUCCESS_BLUE];
  }
  if (disabled) {
    return [LIGHT_GREY, REGULAR_GREY, REGULAR_GREY, REGULAR_GREY];
  }
  return [WHITE, REGULAR_GREY, BLACK, REGULAR_GREY];
};

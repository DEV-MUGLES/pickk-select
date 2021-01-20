import React, { ReactNode } from 'react';
import styled from 'styled-components';

import P from './P';
import { Space } from '.';
import { addCommaToNumber } from '@src/lib/utils';
import { BLACK, SALE_RED, MIDDLE_GREY } from './colors';

export type LabeledType = 'secondary' | 'primary' | 'heavy' | 'main';
export type LabeledAlignedType = 'top' | 'left';

export type LabeledProps = {
  type?: LabeledType;
  aligned?: LabeledAlignedType;
  required?: boolean;
  important?: boolean;
  label: string;
  labelWidth?: string | number;
  text?: string | number;
  children?: ReactNode;
  isMinus?: boolean;
  isPrice?: boolean;
  hasPadding?: boolean;
  className?: string;
  description?: string;
};

function Labeled({
  type = 'primary',
  aligned = 'left',
  required = false,
  important = false,
  label,
  labelWidth = '8.8rem',
  text,
  children,
  isMinus = false,
  isPrice = false,
  hasPadding = false,
  className,
  description,
}: LabeledProps) {
  const [fontLevel, fontWeight] = {
    secondary: [1, 'regular'],
    primary: [2, 'regular'],
    heavy: [2, 'medium'],
    main: [3, 'bold'],
  }[type] as [number, string];
  const direction = aligned === 'top' ? 'column' : 'row';
  const textColor = important ? SALE_RED : BLACK;

  return (
    <Wrapper
      className={className}
      direction={direction}
      hasText={!!text}
      style={hasPadding ? { padding: '0.8rem 1.6rem' } : {}}
    >
      {label && (
        <Label
          level={fontLevel}
          color={BLACK}
          fontWeight={fontWeight}
          labelWidth={labelWidth}
        >
          {label}
          {required && (
            <strong style={{ color: SALE_RED, fontWeight: 500 }}>*</strong>
          )}
        </Label>
      )}
      {description && <Description>{description}</Description>}
      {aligned === 'top' && <Space size={8} />}
      {text !== undefined && (
        <Text
          level={fontLevel}
          fontWeight={type === 'main' ? 'bold' : 'medium'}
          color={textColor}
          textAlign="right"
          numOfLines={2}
        >
          {isPrice
            ? `${isMinus ? '-' : ''}${addCommaToNumber(Number(text))}원`
            : text}
        </Text>
      )}
      {children}
    </Wrapper>
  );
}

export default React.memo(Labeled);

const Wrapper = styled.div<{ direction; hasText }>`
  width: 100%;
  display: flex;
  ${(props) =>
    `flex-direction: ${props.direction};
    align-items: ${
      props.direction === 'row' && !props.hasText ? 'center' : 'flex-start'
    };`}
  justify-content: space-between;
`;

const Label = styled(P)<{ labelWidth: string | number }>`
  && {
    width: ${(props) => props.labelWidth};
  }
`;

const Description = styled(P).attrs({ level: 1, color: MIDDLE_GREY })`
  margin-top: 0.2rem;
`;

const Text = styled(P)`
  width: auto;
  flex: 1;
`;

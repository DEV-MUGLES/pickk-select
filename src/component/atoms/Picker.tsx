import React from 'react';
import styled from 'styled-components';

import { WHITE, BLACK, REGULAR_GREY, LIGHT_GREY } from './colors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PickerItem = { key: string | number; label: string; value: any };
export type PickerRole = 'category' | 'sort';

export type PickerProps = Pick<
  React.HTMLAttributes<HTMLSelectElement>,
  'defaultValue' | 'onChange' | 'style'
> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  name: string;
  disabled?: boolean;
  items: PickerItem[];
  role?: PickerRole;
  block?: boolean;
  width?: string;
};

function Picker({
  name,
  value,
  defaultValue = '',
  onChange,
  disabled = false,
  items,
  role = 'category',
  block = true,
  width,
  style,
}: PickerProps) {
  const [backgroundColor, borderColor, fontColor] = {
    category: disabled
      ? [LIGHT_GREY, REGULAR_GREY, REGULAR_GREY]
      : [WHITE, REGULAR_GREY, BLACK],
    sort: [WHITE, 'transparent', BLACK],
  }[role];

  const selectWidth = block ? '100%' : width || 'fit-content';

  return (
    <Wrapper {...{ style, selectWidth, backgroundColor, borderColor }}>
      <Select
        {...{
          name,
          defaultValue,
          value,
          onChange,
          disabled,
        }}
      >
        {items.map((item) => {
          const { key, label, value } = item;
          const [disabled, hidden] = [value === '', value === ''];
          return (
            <Option {...{ key, value, fontColor, disabled, hidden }}>
              {label}
            </Option>
          );
        })}
      </Select>
    </Wrapper>
  );
}

export default React.memo(Picker);

const Wrapper = styled.div<{
  selectWidth: string;
  backgroundColor: string;
  borderColor: string;
}>`
  position: relative;
  height: 4rem;
  padding: 1rem 1.6rem;
  overflow: hidden;
  ${(props) => `
    width: ${props.selectWidth};
    border: 0.1rem solid ${props.borderColor};
    background-color: ${props.backgroundColor}
  `}
  :focus-within {
    border: 0.1rem solid ${BLACK};
  }
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: ${WHITE};
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: BLACK;
  outline: none;
  :disabled {
    color: ${REGULAR_GREY};
  }
`;

const Option = styled.option<{ fontColor: string }>`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${(props) => props.fontColor};
`;

import React from 'react';
import styled, { css } from 'styled-components';

import TabButtonDefault from './button-default';
import { Row } from '../../atoms';
import { REGULAR_GREY } from '../../atoms/colors';

export type TabProps = {
  value: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  onChange: (index: number) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TabItem?: React.FunctionComponent<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabItemProps?: any;
  showScrollBar?: boolean;
  style?: React.CSSProperties;
  withCount?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestConfigs?: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters?: any[];
};

function Tab({
  value,
  items,
  onChange,
  TabItem = TabButtonDefault,
  tabItemProps = {},
  showScrollBar = false,
  style = {},
  withCount,
  requestConfigs,
  filters,
}: TabProps) {
  return (
    <Nav {...{ style, showScrollBar }}>
      <MiddleWrapper>
        {items?.map((item, index) => (
          <TabItem
            key={index}
            selected={value === index}
            onClick={() => {
              onChange(index);
            }}
            withCount={withCount}
            requestConfig={requestConfigs && requestConfigs[index]}
            filter={filters && filters[index]}
            {...item}
            {...tabItemProps}
          />
        ))}
      </MiddleWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: calc(100% - 4rem);
  height: auto;
  white-space: nowrap;
  overflow: auto;
  margin: 0 2rem;
  ${(props: { showScrollBar: boolean }) => css`
    ${props.showScrollBar &&
    `
  @media (min-width: 430px) {
    -ms-overflow-style: auto;
    &::-webkit-scrollbar {
      display: flex;
      height: 0.4rem;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background: ${REGULAR_GREY};
      width: 0.4rem;
      opacity: 1;
    }
    &::-webkit-scrollbar-track {
      background: none;
    }
  }
    `}
  `}
`;

const MiddleWrapper = styled(Row)`
  height: fit-content;
`;

export default Tab;

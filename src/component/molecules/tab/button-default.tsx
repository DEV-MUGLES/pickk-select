import React from 'react';
import styled, { css } from 'styled-components';

import { Strong, P, Clickable } from '@src/component/atoms';
import { BLACK, MIDDLE_GREY } from '@src/component/atoms/colors';

import useRequest from '@src/hooks/swr/useRequest';
import { ListResponse } from '@src/types';

export type TabButtonDefaultProps = {
  href?: string;
  onClick?: () => void;
  selected: boolean;
  title: string;
  requestConfig?: any;
  filter?: any;
  withCount?: boolean;
};

export default function TabButtonDefault(props: TabButtonDefaultProps) {
  const { href, onClick, selected, title, withCount = false } = props;
  const color = selected ? BLACK : MIDDLE_GREY;

  const { data } = useRequest<ListResponse<any>>(
    props.requestConfig && withCount
      ? props.requestConfig({ offset: 0, limit: 1, ...props.filter })
      : null
  );

  return (
    <Clickable
      href={href}
      onClick={onClick}
      style={{ flex: 1, cursor: 'pointer' }}
    >
      <_Button selected={selected} color={color}>
        <P level={2} fontWeight="medium" color={color}>
          {title}
          <Strong level={2} color={color}>
            {withCount ? ` ${data?.count || '-'}` : ''}
          </Strong>
        </P>
      </_Button>
    </Clickable>
  );
}

const _Button = styled.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    padding: 1rem 0;
    transition: all 0.4s ease-in-out;
    background-color: transparent;
    outline: 0;
    border: none;
    ${(props: { selected: boolean; color: string }) => css`
      border-bottom: ${props.selected
        ? `0.2rem solid ${props.color}`
        : `0.2rem solid transparent`};
      &:focus,
      &:hover {
        border-bottom: ${!props.selected && `0.2rem solid ${MIDDLE_GREY}`};
      }
    `}
  }
`;

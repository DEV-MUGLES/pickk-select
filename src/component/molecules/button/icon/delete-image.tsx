import React from 'react';
import styled from 'styled-components';
import ButtonProps from '../button-props';
import ButtonDefault from '../button-default';

import X from '../../../../asset/icons/common/x';

import { BLACK } from '../../../atoms/colors';

type IProps = ButtonProps & {
  level;
};

export default function DeleteImageButton(props: IProps) {
  const { level } = props;
  return (
    <Wrapper>
      <Button
        level={level}
        onClick={(e) => {
          e.preventDefault();
          props.onClick(e);
        }}
        backgroundColor={BLACK}
      >
        <X
          style={{
            width: `${0.55 * (level + 1)}rem`,
            height: `${0.55 * (level + 1)}rem`,
          }}
          fill="#fff"
        />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 0.1px;
  position: relative;
`;

const Button = styled(ButtonDefault)`
  && {
    position: absolute;
    z-index: 2;
    background-color: ${BLACK};
    cursor: pointer;
    ${(props: { level }) =>
      `
      top: ${0.4 * (props.level + 1)}rem;
      right: ${0.4 * (props.level + 1)}rem;
      width: ${1.2 * (props.level + 1)}rem;
      height: ${1.2 * (props.level + 1)}rem;
      `}
  }
`;

DeleteImageButton.defaultProps = {
  level: 1,
};

import styled, { css } from 'styled-components';
import ButtonProps from './button-props';

const ButtonDefault = styled.button`
  ${(props: ButtonProps) =>
    css`
      background-color: ${props.backgroundColor};
    `}
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
`;

export default ButtonDefault;

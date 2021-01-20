import styled from 'styled-components';

export default function Gradient() {
  return <_Gradient />;
}

const _Gradient = styled.em`
  display: block;
  clear: both;
  content: '';
  width: 2rem;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: -moz-linear-gradient(
    right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  background: -webkit-linear-gradient(
    right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
`;

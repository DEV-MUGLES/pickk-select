import LoadingOverlay from 'react-loading-overlay';
import styled from 'styled-components';

export default styled(LoadingOverlay)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
`;

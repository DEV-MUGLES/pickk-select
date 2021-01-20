import React from 'react';
import styled, { Keyframes, keyframes } from 'styled-components';

import { P, Row } from '@src/component/atoms';
import { BLACK, SEMI_LIGHT_GREY } from '@src/component/atoms/colors';

export type ProgressBarProps = {
  phase: number;
  phaseCount: number;
  phaseLabels?: string[];
};

export default function ProgressBar({
  phase,
  phaseCount,
  phaseLabels,
}: ProgressBarProps) {
  const phaseWidth = Math.round(100 / phaseCount);
  const progressKeyframes = keyframes`
    0% { width: ${phaseWidth * phase}%; }
    100% { width: ${phaseWidth * (phase + 1)}%; }
`;

  return (
    <>
      <Wrapper>
        <_ProgressBar
          style={{ width: `${phaseWidth * (phase + 1)}%` }}
          progressKeyframes={progressKeyframes}
        />
      </Wrapper>
      {phaseLabels && (
        <Row>
          {phaseLabels.map((label, index) => (
            <LabelWrapper
              style={{ visibility: index === phase ? 'visible' : 'hidden' }}
            >
              <PhaseIndicator>{phase + 1}</PhaseIndicator>
              <P level={1} fontWeight="medium">
                {label}
              </P>
            </LabelWrapper>
          ))}
        </Row>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${SEMI_LIGHT_GREY};
`;

const _ProgressBar = styled.div<{ progressKeyframes: Keyframes }>`
  height: 1px;
  background-color: ${BLACK};
  animation: ${(props) => props.progressKeyframes} 1s ease-out;
`;

const LabelWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 0;
`;

const PhaseIndicator = styled(P).attrs({
  level: 1,
  fontWeight: 'medium',
})`
  margin-right: 1rem;
`;

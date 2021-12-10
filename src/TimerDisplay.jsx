import React from 'react';
import styled from 'styled-components';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';

import Button, { ButtonWithHold } from './Button';

import { animationDuration, glowTextKeyframes, white } from './styles';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  place-content: center;
  place-items: center;
  gap: 0;
`;

const Segment = styled.div`
  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  gap: 1.5em;

  &:hover {
    transform: scale(1.05);
  }
`;

const TimerValue = styled.span`
  font-size: 7rem;
  font-weight: bold;
  user-select: none;

  color: ${white};

  animation: ${glowTextKeyframes} ${animationDuration} ease-in-out infinite
    alternate;
`;

const TimerSeparator = styled.span`
  font-size: 3rem;
  font-weight: bold;
  user-select: none;

  color: ${white};

  animation: ${glowTextKeyframes} ${animationDuration} ease-in-out infinite
    alternate;
`;

const formatDisplayValue = (value) => {
  return value > 9 ? value : '0' + value;
};

const TimerDisplay = ({ segments, separator }) => {
  if (!Array.isArray(segments)) {
    return null;
  }

  return (
    <Container>
      {segments.map((segment, index) => {
        return (
          <React.Fragment key={'display-fragment' + index}>
            {index !== 0 && <TimerSeparator>{separator}</TimerSeparator>}
            <Segment>
              <ButtonWithHold callback={segment.onInc}>
                <CgChevronUp style={{ verticalAlign: 'middle' }} />
              </ButtonWithHold>
              <TimerValue>{formatDisplayValue(segment.value)}</TimerValue>
              <ButtonWithHold callback={segment.onDec}>
                <CgChevronDown style={{ verticalAlign: 'middle' }} />
              </ButtonWithHold>
            </Segment>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default TimerDisplay;

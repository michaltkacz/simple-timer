import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  place-content: center;
  place-items: center;
  gap: 2em;
`;

const TimerController = ({ controls }) => {
  if (!Array.isArray(controls)) {
    return null;
  }

  return (
    <Container>
      {controls.map((control, index) => {
        return (
          <Button
            key={'timer-control' + index}
            onClick={() => control.callback(control.label)}
          >
            {control.label}
          </Button>
        );
      })}
    </Container>
  );
};

export default TimerController;

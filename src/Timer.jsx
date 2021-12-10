import React, { useReducer } from 'react';
import styled from 'styled-components';

import { CgPlayButton, CgPlayPause, CgPlayStop } from 'react-icons/cg';

import TimerController from './TimerController';
import TimerDisplay from './TimerDisplay';

import useInterval from './hooks/useInterval';

import { animationDuration, glowBoxKeyframes, white } from './styles';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  gap: 5em;

  padding: 3em 7em;

  border: 1px solid ${white};
  border-radius: 5em;

  animation: ${glowBoxKeyframes} ${animationDuration} ease-in-out infinite
    alternate;
`;

const ACTIONS = {
  inc: 'increment',
  dec: 'decrement',
  start: 'start',
  stop: 'stop',
  reset: 'reset',
  countdown: 'countdown',
};

const initialState = {
  seconds: 0,
  isCountingDown: false,
};

const initTimerReducer = (value) => {
  return value;
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.reset:
      return initTimerReducer(action.payload);
    case ACTIONS.inc:
      return {
        ...state,
        seconds: Math.min(
          state.seconds + action.payload.seconds,
          60 * 60 * 100 - 1
        ),
      };
    case ACTIONS.dec:
      return {
        ...state,
        seconds: Math.max(state.seconds - action.payload.seconds, 0),
      };
    case ACTIONS.start:
      return {
        ...state,
        isCountingDown: true,
      };
    case ACTIONS.stop:
      return {
        ...state,
        isCountingDown: false,
      };
    case ACTIONS.countdown:
      if (!state.isCountingDown) {
        return state;
      }

      if (state.seconds <= 0) {
        return { ...state, isCountingDown: false };
      }

      return {
        ...state,
        seconds: state.seconds - 1,
      };
    default:
      throw new Error('Reducer action not recognized!');
  }
};

const Timer = () => {
  const [timerState, dispatch] = useReducer(
    timerReducer,
    initialState,
    initTimerReducer
  );

  useInterval(
    () => {
      dispatch({ type: ACTIONS.countdown });
    },
    timerState.isCountingDown ? 1000 : null
  );

  return (
    <Container>
      <TimerDisplay
        segments={[
          {
            value: Math.floor(timerState.seconds / 60 / 60) % 60,
            onInc: () =>
              dispatch({ type: ACTIONS.inc, payload: { seconds: 3600 } }),
            onDec: () =>
              dispatch({ type: ACTIONS.dec, payload: { seconds: 3600 } }),
          },
          {
            value: Math.floor(timerState.seconds / 60) % 60,
            onInc: () =>
              dispatch({ type: ACTIONS.inc, payload: { seconds: 60 } }),
            onDec: () =>
              dispatch({ type: ACTIONS.dec, payload: { seconds: 60 } }),
          },
          {
            value: timerState.seconds % 60,
            onInc: () =>
              dispatch({ type: ACTIONS.inc, payload: { seconds: 1 } }),
            onDec: () =>
              dispatch({ type: ACTIONS.dec, payload: { seconds: 1 } }),
          },
        ]}
        separator={':'}
      />
      <TimerController
        controls={[
          {
            label: (
              <CgPlayButton
                style={{ verticalAlign: 'middle', fontSize: '1.5em' }}
              />
            ),
            callback: () => dispatch({ type: ACTIONS.start }),
          },
          {
            label: (
              <CgPlayPause
                style={{ verticalAlign: 'middle', fontSize: '1.5em' }}
              />
            ),
            callback: () => dispatch({ type: ACTIONS.stop }),
          },
          {
            label: (
              <CgPlayStop
                style={{ verticalAlign: 'middle', fontSize: '1.5em' }}
              />
            ),
            callback: () =>
              dispatch({ type: ACTIONS.reset, payload: initialState }),
          },
        ]}
      />
    </Container>
  );
};

export default Timer;

import React from 'react';
import styled from 'styled-components';

import useButtonHold from './hooks/useButtonHold';

import { shadowSmallBright } from './styles';

const Button = styled.button`
  cursor: pointer;
  user-select: none;

  font-size: 1rem;
  font-weight: bold;

  padding: 0.5em;

  color: white;
  background: transparent;

  border: 1px solid #fff;
  border-radius: 100px;

  box-shadow: ${shadowSmallBright};

  transition: transform 0.333s ease-in-out;
  transition: background 0.111s ease-in-out;

  /* box-shadow: 1px 1px white; */

  &:hover {
    transform: scale(1.05);
    background: #ffffff18;
  }

  &:active {
    background: #ffffff40;
  }
`;

export const ButtonWithHold = ({
  children,
  callback,
  delay = 333,
  ...rest
}) => {
  const holdEventHandlers = useButtonHold(callback, delay);

  return (
    <Button {...rest} {...holdEventHandlers}>
      {children}
    </Button>
  );
};

export default Button;

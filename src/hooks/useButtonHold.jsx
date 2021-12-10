import { useEffect, useState } from 'react';

const useButtonHold = (callback, delay) => {
  const [isHolding, setIsHolding] = useState(false);
  const [currentDelay, setCurrentDelay] = useState(delay);

  useEffect(() => {
    if (!isHolding) {
      setCurrentDelay(delay);
      return;
    }

    const timeoutId = setTimeout(() => {
      callback();
      setCurrentDelay(currentDelay * 0.9);
    }, currentDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, currentDelay, isHolding]);

  const start = () => setIsHolding(true);
  const stop = () => setIsHolding(false);

  return {
    onClick: () => callback(),
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};

export default useButtonHold;

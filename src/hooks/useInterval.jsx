import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const intervalRef = useRef(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );

      return () => window.clearInterval(intervalRef.current || 0);
    }
  }, [delay]);

  return intervalRef;
};

export default useInterval;

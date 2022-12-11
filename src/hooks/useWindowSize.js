import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  // we check if window is defined
  const isClient = typeof window === 'object';

  // prepare initialState to have some values before resizing
  const initialState = {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  };

  const [width, setWidth] = useState(initialState.width);
  const [height, setHeight] = useState(initialState.height);

  // function we pass to event listener
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    window.addEventListener('resize', handleResize);

    // remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return {
    width,
    height,
  };
};

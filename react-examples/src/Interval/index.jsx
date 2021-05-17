import React, { useEffect } from 'react';

export const Interval = () => {
  useEffect(() => {
    const interval = setInterval(() => console.log('interval!'), 1000)

    return () => clearInterval(interval);
  }, []);

  return <div>
    Interval
  </div>
}

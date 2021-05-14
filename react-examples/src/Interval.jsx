import React, { useEffect } from 'react';

export const Interval = () => {
  useEffect(() => { setInterval(() => console.log('interval!'), 1000) }, []);

  return <div>
    Interval
  </div>
}

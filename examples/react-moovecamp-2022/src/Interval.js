import React, { useEffect, useState } from "react";

const Interval = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(`doing something for count: ${count}`);
    const interval = setInterval(() => {
      console.log(`running every ${count} secs`);
    }, count * 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>increase!</button>
    </div>
  )
}

export default Interval;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>increase!</button>
      <button onClick={() => setCount(count - 1)}>decrease!</button>
    </div>
  )
}

export default Counter;
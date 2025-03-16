import React, { useState } from 'react';

function Counter() {
  // useState ilə counter state-i yaradırıq
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}

export default Counter;


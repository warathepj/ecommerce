// app/components/Counter
// create counter in app/components/Counter

// app/components/Counter.jsx
import { useState } from 'react';

export default function Counter({ onCountChange }) {
  const [count, setCount] = useState(0); 

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount); 
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3299370613.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2340470944.
// app/components
//Qty.js
import { useState } from 'react';

export default function Qty() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    
if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>จำนวน: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

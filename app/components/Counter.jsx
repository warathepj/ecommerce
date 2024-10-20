// app/components/Counter

import { useState } from 'react';

export default function Counter({ onCountChange, disabled }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    onCountChange(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      onCountChange(count - 1);
    }
  };


  return (
    <div>
      <p>จำนวนสินค้า: {count}</p>
      <button onClick={handleIncrement} disabled={disabled}
        className='bg-green-700 text-white rounded m-2 p-4 text-3xl font-bold'>
        {disabled ? 'สินค้าหมด' : '+'}
      </button>
      <button onClick={handleDecrement}
        className='bg-green-700 text-white rounded m-2 p-4 text-3xl font-bold'>-
      </button>
    </div>
  );
}





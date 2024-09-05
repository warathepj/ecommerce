// app/components/Counter
// create counter in app/components/Counter

// app/components/Counter.jsx
import { useState } from 'react';

export default function Counter({ onCountChange, disabled }) {
  const [count, setCount] = useState(0); 
//from app/components/Counter/count can't minus, how to code?

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


  // const increment = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  //   onCountChange(newCount); 
  // };

  // const decrement = () => {
  //   if (count > 0) {
  //     const newCount = count - 1;
  //     setCount(newCount);
  //     onCountChange(newCount);
  //   }
  // };

  return (
    <div>
      
      <p>จำนวนสินค้า: {count}</p>

      <button onClick={handleIncrement} disabled={disabled}
      className='bg-green-700 text-white rounded m-2 p-4 text-3xl font-bold'>
      {disabled ? 'สินค้าหมด' : '+'}
      {/* {disabled ? 'สินค้าหมด' : `Count: ${count}`} */}
    </button>
      <button onClick={handleDecrement}
      className='bg-green-700 text-white rounded m-2 p-4 text-3xl font-bold'>-
    </button>

      {/* <button 
        onClick={decrement}
        className='bg-green-700 text-white rounded m-2 p-4 text-3xl font-bold'>-</button>
      <button 
        onClick={increment}
        className='bg-green-700 text-white rounded m-4 p-4 text-3xl font-bold'
      >+</button> */}
    </div>
  );
}

/////////////////




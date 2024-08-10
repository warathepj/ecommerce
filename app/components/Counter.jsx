// app/components/Counter

//state count from 
// app/components/Counter.jsx to context/CartContext.js
// import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

export default function Counter() {
  const { count, setCount } = useContext(CartContext);

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
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}



  
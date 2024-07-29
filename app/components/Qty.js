// Suggested code may be subject to a license. Learn more: ~LicenseLog:3299370613.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2340470944.
// app/components/Qty.js

import { useState } from 'react';

export default function Qty({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1); // Notify parent about count change
  };

  const decrement = () => {
    
if (quantity > 0) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1); // Notify parent about count change
    }
  };

  return (
    <div>
      <p>จำนวน: {quantity}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

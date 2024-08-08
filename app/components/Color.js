// app/components/Color.js/
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
// import { useProducts } from '../../context/ProductsContext';

// import ProductsContext from '../../context/ProductsContext';
export default function Color() {
  const { selectedColor, setSelectedColor } = useContext(CartContext); 
// from app/components/Color.js/ set state of
  // const [ selectedColor, setSelectedColor ]  = useContext(CartContext);
// to context/CartContext.js/
  // manage state in 
// context/ProductsContext.js/
  return (
    <div>
        <pre>selectedColor from Color.js : {selectedColor}</pre>

      <p>สี</p>
      <label>
        <input 
          type="radio" 
          value="ดำ" 
          checked={selectedColor === "ดำ"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ดำ
      </label>
      <label>
        <input 
          type="radio" 
          value="ขาว" 
          checked={selectedColor === "ขาว"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ขาว
      </label>
      <label>
        <input 
          type="radio" 
          value="น้ำเงิน" 
          checked={selectedColor === "น้ำเงิน"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        น้ำเงิน
      </label>
      <label>
        <input 
          type="radio" 
          value="ม่วง" 
          checked={selectedColor === "ม่วง"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ม่วง
      </label>
    </div>
  );
}

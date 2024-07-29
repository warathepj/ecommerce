// app/components/Color.js/
// import { useState } from 'react';
import { useContext } from 'react';
// import { useProducts } from '../../context/ProductsContext';

// import ProductsContext from '../../context/ProductsContext';
export default function Color() {
// from app/components/Color.js/
  // const { selectedColor, setSelectedColor } = useProducts(); 

  // manage state in 
// context/ProductsContext.js/
  return (
    <div>
      <p>สี</p>
      <label>
        <input 
          type="radio" 
          value="ดำ" 
          // checked={selectedColor === "ดำ"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ดำ
      </label>
      <label>
        <input 
          type="radio" 
          value="ขาว" 
          // checked={selectedColor === "ขาว"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ขาว
      </label>
      <label>
        <input 
          type="radio" 
          value="น้ำเงิน" 
          // checked={selectedColor === "น้ำเงิน"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        น้ำเงิน
      </label>
      <label>
        <input 
          type="radio" 
          value="ม่วง" 
          // checked={selectedColor === "ม่วง"} 
          onChange={(e) => setSelectedColor(e.target.value)} 
        />
        ม่วง
      </label>
    </div>
  );
}

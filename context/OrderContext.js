// Suggested code may be subject to a license. Learn more: ~LicenseLog:3819443554.

// context/OrderContext.js
"use client"
import { createContext, useState, useContext } from 'react';

// const a = 1;
const OrderContext = createContext(null);

function OrderProvider({ children }) {
  const [order, setOrder] = useState(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
    // return a;
  return useContext(OrderContext);
};


export { OrderProvider };

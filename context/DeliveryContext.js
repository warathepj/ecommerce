// DeliveryContext.js
"use client"
import { createContext, useState } from 'react';

const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [delivery, setDelivery] = useState([]); 

  return (
    <DeliveryContext.Provider value={{ delivery, setDelivery }}>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryContext;


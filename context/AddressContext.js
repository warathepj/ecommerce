// context/AddressContext.js/
// context/AddressContext.js
"use client"
import { createContext, useState } from 'react';

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <AddressContext.Provider value={{ name, setName, address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContext;

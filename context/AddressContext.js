// context/AddressContext.js
"use client"
import { createContext, useState, useEffect } from 'react';

const AddressContext = createContext();

// AddressProvider component to wrap around the application
export function AddressProvider({ children }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  // Persist the name and address to localStorage on updates
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedAddress = localStorage.getItem('address');
    if (storedName) setName(storedName);
    if (storedAddress) setAddress(storedAddress);
  }, []);

  // Update localStorage when state changes
  useEffect(() => {
    if (name) localStorage.setItem('name', name);
    if (address) localStorage.setItem('address', address);
  }, [name, address]);

  return (
    <AddressContext.Provider value={{ name, setName, address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

export default AddressContext;

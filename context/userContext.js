
// context/userContext.js
// in context/userContext.js, made logic for initial can go to
// route /signup and /login except other route

'use client'; 
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider
 = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  console.log("formData.name: ", formData.name);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

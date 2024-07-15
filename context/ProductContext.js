// Suggested code may be subject to a license. Learn more: ~LicenseLog:3506963186.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2025573084.

// context/ProductContext.js
'use client'

     import { createContext, useState } from 'react';

     const ProductContext = createContext();

     export const ProductProvider
 = ({ children }) => {
       const [products] = useState([
         { id: 1, name: "Product 1" },
         { id: 2, name: "Product 2" },
         { id: 3, name: "Product 3" }
       ]);

       return (
         <ProductContext.Provider value={products}>
           {children}
         </ProductContext.Provider>
       );
     };

     export default ProductContext;

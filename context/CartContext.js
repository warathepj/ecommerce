// Suggested code may be subject to a license. Learn more: ~LicenseLog:1584466391.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1706074875.
// context/CartContext.js/
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2499214005.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2999946844.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1589595377.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1718385428.

// context/CartContext.js
"use client"
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export
 const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (product) => {
    setCartItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(item => item.productId === product.productId);

      if (existingItemIndex !== -1) {
        // If item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // If item doesn't exist, add it to the cart
        return [...prevItems, product];
      }
    });
  };

  const removeCartItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

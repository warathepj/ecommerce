// context/CartContext.js/
// context/CartContext.js
"use client"
import { createContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export
 const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  // const [addCartItem, setAddCartItem] = useState(null);
  const [count, setCount] = useState(0);
  const addCartItem = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productId === product.productId 
      // (item) => item.productId === product.productId && item.selectedColor === product.selectedColor
    );
    if (existingItemIndex > -1) {
      // Update quantity of existing item
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += product.quantity;
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, product]);
    }
  };

  

  const updateDiscountPrice = useCallback((productId, discountPrice) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId ? { ...item, discountPrice } : item
      )
    );
  }, []);




  // console.log("addCartItem from CartProvider :", addCartItem);

  // const value = {
  //   cartItems,
  //   addCartItem,
  //   setCartItems,
  //   // ... other context values
  // };

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
    updateDiscountPrice,
    setCartItems,
    selectedColor,
    setSelectedColor,
    count, // Add count to context value
    setCount,  
  };

  return (
    <CartContext.Provider 
      value={
        contextValue }>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

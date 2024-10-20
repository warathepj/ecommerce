// context/CartContext.js/
"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import useLocalStorage from "use-local-storage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [sum, setSum] = useState(0);
  const [productInCart, setProductInCart] = useLocalStorage(
    "productInCart",
    []
  );

  const addProductToCart = (product) => {
    setProductInCart(product);
  };


  useEffect(() => {
    const newSum = productInCart.reduce(
      (sum, product) => sum + product.count * product.modalPrice,
      0
    );
    setSum(newSum);
  }, [productInCart]);

  const contextValue = {
    productInCart,
    setProductInCart,
    sum,
    setSum,
  };

  return (
    <CartContext.Provider
      value={{ contextValue, productInCart, setProductInCart, sum, setSum }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

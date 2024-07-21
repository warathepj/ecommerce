"use client"
import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};
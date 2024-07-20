// Suggested code may be subject to a license. Learn more: ~LicenseLog:3819443554.

// context/OrderContext.js/orders
"use client"
import { createContext, useState, useContext } from 'react';

// const a = 1;
// const OrderContext = createContext(null);
export const OrderContext = createContext({ orders: [], addOrder: () => {} });

function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const updateOrder = (newOrder) => {
    setOrders((prevOrder) => {
      if (prevOrder) {
        // Add to existing order
        return {
          productId: newOrder.productId,
          count: prevOrder.count + newOrder.count,
        };
      } else {
        // Create a new order
        return newOrder;
      }
    });
  };
  console.log("orders from context : ", orders);

  return (
    <OrderContext.Provider value={{ setOrders: updateOrder, orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
    // return a;
  return useContext(OrderContext);
};

export { OrderProvider };

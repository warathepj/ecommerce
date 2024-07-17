// app/components/Modal.js
import { useState, useEffect } from 'react';
import { useOrder } from '../../context/OrderContext';
// import { OrderProvider } from '../../context/OrderContext';
import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';

export default function Modal({ onClose, buttonText, productId, onOrderChange }) {
    // const { order, setOrder } = useOrder();
    const [count, setCount] = useState(0);
    const { setOrder } = useOrder();
    // const [order, setOrder] = useState(null);
    // const [count, setCount] = useState(order ? order.count : 0); // State to store count
    // order = { productId, count };
    // console.log(order);

    const handleCloseAndOrder = () => {
        setOrder({ productId, count }); // Create order object
        onClose(); // Close the modal
      };
    // Update order when count changes
    // useEffect(() => {
    //     const newOrder = { productId, count };
    //     setOrder(newOrder);
    // }, [count, productId, setOrder]);

    // const handleViewCart = () => {
    //     console.log("Order before navigation:", order); // Check if order is populated
    //     const queryString = new URLSearchParams(order).toString();
    //     router.push(`/cart?${queryString}`);
    // };

    return (
        <div className='bg-blue-100'>

            <p>modal</p>
            <p>Product ID from Modal: {productId}</p>
            <img
                className="w-16"
                src='https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            <p className="text-red-500">฿400</p>
            <p>คลัง: 100</p>
            <Color />
            <p>Count from Modal: {count}</p>
            {/* <Qty onCountChange={setCount} /> */}
            <Qty onCountChange={setCount} />
            <Button onClick={handleCloseAndOrder}>
                {buttonText}
            </Button>
            
            {/* <p>Order: {JSON.stringify(order)}</p> */}
        </div>

    );
}

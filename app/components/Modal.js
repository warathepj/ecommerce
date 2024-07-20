// app/components/Modal.js/
import { useState, useEffect } from 'react';
import { useOrder } from '../../context/OrderContext';
// import { OrderProvider } from '../../context/OrderContext';
import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';

export default function Modal({ onClose, buttonText, productId, onOrderChange }) {
    // const { order, setOrder } = useOrder();
    const [count, setCount] = useState(0);
    const { setOrders } = useOrder();
    const { addOrder } = useOrder();
    // const [order, setOrder] = useState(null);
    // const [count, setCount] = useState(order ? order.count : 0); // State to store count
    // order = { productId, count };
    // console.log(order);
//modify app/components/Modal.js/
    const handleCloseAndOrder = () => {
        // to create array of order object after add more order, useOrder is from '../../context/OrderContext
        // from app/components/Modal.js/
        addOrder({ productId, count }); // Add new order to the array
        // count is not add to
        setOrders({ productId, count }); // Create order object
        onClose(); // Close the modal
      };

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
            {/* when click app/components/Modal.js/ */}
            <Button onClick={handleCloseAndOrder}>
                {buttonText}
            </Button>
            
            {/* <p>Order: {JSON.stringify(order)}</p> */}
        </div>

    );
}

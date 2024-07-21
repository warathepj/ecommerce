// app/components/Modal.js/
import { useState, useEffect } from 'react';
import { useProducts } from '../../context/ProductsContext';
// import { OrderProvider } from '../../context/OrderContext';
import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';

export default function Modal({ buttonText, productId, onOrderChange, onClose }) {
    // const { order, setOrder } = useOrder();
    const [count, setCount] = useState(0);
    const { products, addProduct } = useProducts();
    // const [products, setProducts] = useState([]);
    
    // 45
    const handleCloseAndOrder = () => {
        addProduct({ productId, count });
        //onClose(); // Assuming onClose will close the modal
    };

    // Close the modal or perform any other necessary actions
    // onClose();
    // console.log("orders", orders);
    // console.log("setOrders", setOrders);


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
        {/* 19 */}
        {/* when click on app/components/Modal.js/ */}
        <Button onClick={handleCloseAndOrder}>
            {buttonText}
        </Button>
        {/* keep productId and count in an array of object */}
        <ul>
            {products.map((product, index) => (
                <li key={index}>Product ID: {product.productId}, Count: {product.count}</li>
            ))}
        </ul>
    </div>

);
}

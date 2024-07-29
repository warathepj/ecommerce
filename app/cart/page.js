// app/cart/page.js/
"use client"
import ArrowLeft from "../components/(icon)/ArrowLeft";
import { useRouter } from 'next/navigation';
// import { useProducts } from '../../context/ProductsContext';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
// import { useSearchParams } from 'next/navigation';

export default function Cart() {
  //why orders in app/cart/page.js/
  // is empty array, useOrder is in context/OrderContext
  const router = useRouter();
  const { cartItems } = useContext(CartContext);
  // const { products, addProduct, selectedColor, setSelectedColor } = useProducts(); 
// app/cart/page.js/
console.log("cartItems from cart :", cartItems);


const handleGoBack = () => {
  router.push('/'); // Navigate to the root route
};
// const totalPrice = products.reduce((sum, product) => sum + product.cost, 0);

return (
  <div>
    <pre>
        {cartItems.map(item => (
          <div key={item.productId}>
            Product ID: {item.productId}
            qty: {item.quantity}
          </div>
        ))}
      </pre>
    <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />
    <p>รถเข็น</p>
    
    <ul>
            {/* {products.map((product, index) => ( */}
                {/* <li  */}
                  {/* key={index}>Product ID: {product.productId}, Count: {product.count} */}
                  {/* ฿{product.calculatePrice} price */}
                  {/* ฿{product.cost} cost */}
            {/* <p>Selected Color: {selectedColor}</p> */}
                  
                {/* </li> */}
            {/* ))} */}
        </ul>
        {/* <p>Total: ฿{totalPrice}</p> */}

    
  </div>
)
  }
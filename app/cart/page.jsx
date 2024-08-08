// app/cart/page.js/

"use client"
import ArrowLeft from "../components/(icon)/ArrowLeft";
import { useRouter } from 'next/navigation';
import { useEffect, useContext, useCallback } from 'react';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';

export default function Cart() {

  const router = useRouter();
  const { cartItems, updateDiscountPrice } = useContext(CartContext);
  const { products } = useContext(ProductContext);



  const updatePrices = useCallback(() => {
    cartItems.forEach(item => {
      const product = products.find(product => product.id === item.productId);
      if (product && (!item.discountPrice || item.discountPrice !== product.discountPrice)) {
        updateDiscountPrice(item.productId, product.discountPrice);
      }
    });
  }, [cartItems, products, updateDiscountPrice]);

  useEffect(() => {
    updatePrices();
  }, [updatePrices]);

  console.log("cartItems from cart :", cartItems);
  // [{productId:"2",quantity:2,selectedColor:"น้ำเงิน"},{...}]




  const handleLogDiscount = (productId) => {
    const product = cartItems.find(item => item.productId === productId);
    if (product) {
      console.log('Discount Price from cart: ', product.discountPrice);
    } else {
      console.log('Product not found in cart.');
    }
  };


  const handleGoBack = () => {
    router.push('/'); // Navigate to the root route
  };

  return (
    <div>
      <div>
        {/* ... your cart page content ... */}
        <button onClick={() => handleLogDiscount('your-product-id')}>
          Log Discount Price
        </button>
      </div>

      <pre>
        {cartItems.map(item => (
          <div key={item.productId}>
            Product ID: {item.productId}
            selectedColor : {item.selectedColor}
            qty: {item.quantity}
          </div>
        ))}
      </pre>
      <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />
      <p>รถเข็น</p>

    </div>
  )
}
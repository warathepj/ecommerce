// app/components/NavigateToCart.js
"use client"
import { useRouter } from 'next/navigation';
// import { useOrder } from '../../context/OrderContext';

function NavigateToCart() {
  const router = useRouter();
  // const { order } = useOrder();

  const handleViewCart = () => {
    // if (order) {
    //   const queryString = new URLSearchParams(order).toString();
    //   router.push(`/cart?${queryString}`);
    // } else {
    //   // Handle case where order is null (maybe show a message)
    //   console.log("No order to view.");
    // }
  };

  return (
    <button onClick={handleViewCart}>View Cart</button>
  );
}

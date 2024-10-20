// app/components/NavigateToCart.js
"use client";
import { useRouter } from "next/navigation";

function NavigateToCart() {
  const router = useRouter();
  const handleViewCart = () => {

  };

  return <button onClick={handleViewCart}>View Cart</button>;
}

// app/cart/page.js/

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useContext, useCallback } from "react";
import CartContext from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";
import ArrowLeft from "../components/(icon)/ArrowLeft";
import Button from "../components/Button";

export default function Cart() {
  const router = useRouter();
  const { productInCart, sum } = useContext(CartContext);
  // console.log("productInCart from cart :", productInCart);
  const { products } = useContext(ProductContext);

  const handleLogDiscount = (productId) => {
    const product = cartItems.find((item) => item.productId === productId);
    // if (product) {
    //   console.log("Discount Price from cart: ", product.discountPrice);
    // } else {
    //   console.log("Product not found in cart.");
    // }
  };

  const handleGoBack = () => {
    router.push("/"); // Navigate to the root route
  };

  return (
    <div className="bg-green-200 p-2">
      <p>รถเข็น</p>

      {productInCart.map((product, index) => (
        <div key={index} className="mt-4">
          <img src={product?.image} alt="Product Image" width="60px" />
          <p className="mt-3">ชื่อสินค้า: {product.name}</p>
          <p>จำนวน: {product.count}</p>
          <p>ราคาสินค้า: {product.modalPrice}</p>
          <p>สี: {product.selectedColor}</p>
          <p>฿: {product.count * product.modalPrice}</p>
        </div>
      ))}

      <p style={{ color: "red" }}>ยอดรวมทั้งหมด (฿): {sum}</p>

      <div>
        <Link href="/address">
          <Button>ยืนยัน</Button>
        </Link>
      </div>

      <ArrowLeft style={{ cursor: "pointer" }} onClick={handleGoBack} />
    </div>
  );
}

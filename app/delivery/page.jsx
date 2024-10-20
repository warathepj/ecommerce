// app/delivery/page.jsx
"use client";
import { useState, useEffect, useContext, useCallback } from "react";
import CartContext from "../../context/CartContext";
import ProductContext from "../../context/ProductContext";
import AddressContext from "../../context/AddressContext";
import DeliveryContext from "../../context/DeliveryContext";
import Button from "../components/Button";
import Link from "next/link";

export default function Delivery() {
  const { productInCart, setProductInCart, sum } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { name, address } = useContext(AddressContext);
  const { cartItemCount } = useContext(CartContext);
  // console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWcartItemCount :", cartItemCount);
  const { delivery } = useContext(DeliveryContext);
  // console.log(",,,,,,,,,,,delivery: ", delivery);
  const [deliverySum, setSum] = useState(0);

  // Calculate the date 4 days from now
  const today = new Date();
  const fourDaysLater = new Date(today);
  fourDaysLater.setDate(today.getDate() + 4);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = fourDaysLater.toLocaleDateString("th-TH", options);

  useEffect(() => {
    // Clear the cart when this page is rendered
    setProductInCart([]);
  }, [setProductInCart]);

  useEffect(() => {
    const newSum = delivery.reduce(
      (deliverySum, product) => deliverySum + product.quantity * product.price,
      0
    );
    setSum(newSum);
  }, [delivery]);

  return (
    <div className="p-2 md:p-4">
      <p>รายการสินค้าที่สั่งซื้อ</p>

      <p>
        {delivery.map((product, index) => (
          <div key={index}>
            <img src={product?.image} alt="Product Image" width="60px" />
            <p>ชื่อสินค้า: {product.name}</p>
            <p>จำนวน: {product.quantity}</p>
            <p>ราคาสินค้า: {product.price}</p>
            <p>สี: {product.color}</p>
            <p className="mb-4">฿: {product.quantity * product.price}</p>
          </div>
        ))}
      </p>
      <p>
        {productInCart.map((product, index) => (
          <div key={index}>
            <img src={product?.image} alt="Product Image" width="60px" />
            <p>ชื่อสินค้า: {product.name}</p>
            <p>จำนวน: {product.count}</p>
            <p>ราคาสินค้า: {product.modalPrice}</p>
            <p>สี: {product.selectedColor}</p>
            <p className="mb-4">฿: {product.count * product.modalPrice}</p>
          </div>
        ))}
      </p>
      <p className="text-red-500 mb-4">ยอดรวมทั้งหมด (฿): {deliverySum}</p>
     
      <p>ที่อยู่สำหรับจัดส่งสินค้า</p>
      <p className="mb-4 break-words whitespace-normal overflow-hidden w-80">
        ชื่อ: {name}
      </p>
      <p className="mb-4 break-words whitespace-normal overflow-hidden w-80">
        ที่อยู่: {address}
      </p>
      <p className="mb-4">สินค้าจะถึงภายในวันที่: {formattedDate}</p>
      <Link href="/">
        <Button>เลือกซื้อสินค้าอื่นๆ</Button>
      </Link>
    </div>
  );
}

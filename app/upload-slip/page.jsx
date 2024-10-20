// app/upload-slip/page.jsx
"use client";
import Link from "next/link";
import Upload from "../components/(icon)/Upload";
import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import DeliveryContext from "../../context/DeliveryContext";

export default function UploadSlip() {
  const { productInCart, sum } = useContext(CartContext);
  const { setDelivery } = useContext(DeliveryContext);

  useEffect(() => {
    const deliveryData = productInCart.map((product) => ({
      image: product.image,
      name: product.name,
      quantity: product.count,
      price: product.modalPrice,
      color: product.selectedColor,
    }));

    setDelivery(deliveryData);
  }, [productInCart, setDelivery]);

  // console.log("DDDDDDDDDDDDDDDdeliveryData from upload-slip : ", deliveryData);

  return (
    <div>
      <p className="mx-auto text-center mt-4 mb-4">
        อัปโหลดสลิปการจ่ายเงินของคุณ
      </p>
      
      <Link href="/delivery">
        <Upload />
      </Link>
    </div>
  );
}

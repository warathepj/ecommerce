// app/order/page.jsx
"use client";
import { useContext } from "react";
import Link from "next/link";
import AddressContext from "../../context/AddressContext";
import CartContext from "../../context/CartContext";
import Button from "../components/Button";

export default function Order() {
  const { name, address } = useContext(AddressContext);
  const { sum } = useContext(CartContext);

  // console.log("Name:", name); 
  // console.log("Address:", address); 

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 mt-4">สั่งซื้อสินค้า</h1>
      <p className="mb-4 break-words whitespace-normal overflow-hidden w-80">
        ชื่อ: {name}
      </p>
      <p className="mb-4 break-words whitespace-normal overflow-hidden w-80">
        ที่อยู่สำหรับจัดส่งสินค้า: {address}
      </p>
      <Link href="/address">
        <div>
          <Button>แก้ไขที่อยู่</Button>
        </div>
      </Link>
      <pre className="mt-4">สแกนเพื่อจ่าย</pre>
      <pre className="text-red-500 mb-4">฿{sum}</pre>
      <img
        className="mx-auto mb-4"
        src="https://warathepj.github.io/js-ai-gallery/public/image/qrcode.png"
        alt=""
      />

      <Link href="/upload-slip">
        <div className="flex justify-center">
          <Button>ยืนยันการจ่ายเงิน</Button>
        </div>
      </Link>
    </div>
  );
}

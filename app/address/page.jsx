// app/address/page.jsx
"use client";
import { useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import AddressContext from "../../context/AddressContext";
import Button from "../components/Button";

export default function Address() {
  const { name, setName, address, setAddress } = useContext(AddressContext);
  const router = useRouter();

  const handleClick = () => {
    // console.log('Name:', name);
    // console.log('Address:', address);
    router.push("/order");
  };

  return (
    <div className="flex flex-col p-2 mt-4 gap-4">
      <h1>ที่อยู่สำหรับจัดส่งสินค้า</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button onClick={handleClick}>ยืนยัน</Button>
    </div>
  );
}

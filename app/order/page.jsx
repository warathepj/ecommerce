// app/order/page.jsx
'use client';
import { useContext } from 'react';
import Link from 'next/link';
import AddressContext from '../../context/AddressContext';
import CartContext from '../../context/CartContext';
import Button from "../components/Button";

export default function Order() {
  const { name, address } = useContext(AddressContext);
  const { sum } = useContext(CartContext);

  console.log('Name:', name); // 16/8 ok
  console.log('Address:', address); // 16/8 ok

  return (
    <div>
      <h1>Order</h1>
      <pre>--------DEBUG start---------</pre>
      <pre>Name: {name}</pre>
      <pre>Address: {address}</pre>
      <Link href="/address"> 
  <Button>แก้ไขที่อยู่</Button>
</Link>
<pre>สแกนเพื่อจ่าย</pre>
<pre>{sum}</pre>
<img src="https://warathepj.github.io/js-ai-gallery/public/image/qrcode.png" alt="" />
<Link href="/upload-slip"> 

<Button>ยืนยันการจ่ายเงิน</Button>
</Link>

      <pre>--------DEBUG end---------</pre>
    </div>
  );
}

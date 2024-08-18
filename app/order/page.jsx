// app/order/page.jsx
'use client';
import { useContext } from 'react';
import AddressContext from '../../context/AddressContext'; 

export default function Order() {
  const { name, address } = useContext(AddressContext);

  console.log('Name:', name); // 16/8 ok
  console.log('Address:', address); // 16/8 ok

  return (
    <div>
      <h1>Order</h1>
      <pre>--------DEBUG start---------</pre>
      <pre>Name: {name}</pre>
      <pre>Address: {address}</pre>
      <pre>--------DEBUG end---------</pre>
    </div>
  );
}

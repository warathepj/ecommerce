// app/address/page.jsx
"use client"
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import AddressContext from '../../context/AddressContext';
import Button from "../components/Button";


export default function Address() {
//state app/address/page.jsx
const { name, setName, address, setAddress } = useContext(AddressContext);
//to context/AddressContext.js/
const router = useRouter();

  const handleClick = () => {
    // Store name and address in state or send to server
    console.log('Name:', name);
    console.log('Address:', address);
    // You can add your logic here to handle the data
    router.push('/order');
  };

  return (
    <div>
      <pre>--------DEBUG start---------</pre>
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
{/* when click app/address/page.jsx */}
      <Button onClick={handleClick}>ยืนยัน</Button>
      {/* go to /order */}
      <pre>--------DEBUG end---------</pre>
      <h1>address</h1>
    </div>
  );
}

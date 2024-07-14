// app/products/[productId].js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import AddShoppingCart from '@/app/components/(icon)/AddShoppingCart';
import Modal from '@/app/components/Modal';
import { useSearchParams } from 'next/navigation';

export default function ProductDetail({ params }) {
  const productId = params.id;
  const searchParams = useSearchParams();
  const productName = searchParams.get('name');
  const [showModal, setShowModal] = useState(false);
  // Fetch product details based on productId (you'll need to implement this)
  // ...

  return (
    <div>
      <h1 className='bg-red-500'>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <p>Product Name: {productName}</p>
      {/* Display other product details here */}
      <AddShoppingCart className="cursor-pointer" onClick={() => setShowModal(true)} /> 
      {showModal && <Modal />} 
    </div>
  );
}

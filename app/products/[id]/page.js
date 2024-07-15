// app/products/[productId].js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import AddShoppingCart from '@/app/components/(icon)/AddShoppingCart';
import Modal from '@/app/components/Modal';
import { useSearchParams } from 'next/navigation';
import Button from '@/app/components/Button';

export default function ProductDetail({ params }) {
  const productId = params.id;
  const searchParams = useSearchParams();
  const productName = searchParams.get('name');
  const [showModal, setShowModal] = useState(false);
  const [modalButtonText, setModalButtonText] = useState('');
  // Fetch product details based on productId (you'll need to implement this)
  // ...
  const handleBuyButtonClick = () => {
    setModalButtonText("ซื้อสินค้า"); // Set button text for "Buy"
    setShowModal(true); 
};

  return (
    <div>
      <h1 className='bg-red-500'>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <p>Product Name: {productName}</p>
      {/* Display other product details here */}
      <AddShoppingCart className="cursor-pointer" onClick={() => {
                setModalButtonText("เพิ่มไปยังรถเข็น"); // Set button text for "Add to Cart"
                setShowModal(true);
            }} /> 
            <Button onClick={handleBuyButtonClick}>ซื้อสินค้า</Button>
            {showModal && ( 
                <Modal 
                    onClose={() => setShowModal(false)} 
                    productId={productId} 
                    buttonText={modalButtonText}  // Use dynamic button text
                />
            )}
    </div>
  );
}

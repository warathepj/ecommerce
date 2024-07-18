// app/products/[productId].js/
"use client"
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import AddShoppingCart from '@/app/components/(icon)/AddShoppingCart';
import Modal from '@/app/components/Modal';
import { useSearchParams } from 'next/navigation';
import { useOrder } from '../../../context/OrderContext';
import ProductContext from '../../../context/ProductContext'; 
import ArrowLeft from "../../components/(icon)/ArrowLeft";
import Button from '@/app/components/Button';

export default function ProductDetail({ params }) {
  const router = useRouter();

  const productId = params.id;
  const { productsWithDiscount, isLoading } = useContext(ProductContext); 
  const searchParams = useSearchParams();
  // const productName = searchParams.get('name');
  const [showModal, setShowModal] = useState(false);
  const [modalButtonText, setModalButtonText] = useState('');
  const { order, setOrder} = useOrder();
  const { name } = useContext(ProductContext);
  // const [order, setOrder] = useOrder();
  // Fetch product details based on productId (you'll need to implement this)
  // ...
  const handleBuyButtonClick = () => {
    setModalButtonText("ซื้อสินค้า"); // Set button text for "Buy"
    setShowModal(true);
  };

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // No need to reset order here
  };

  // ... fetch product data and then:
if (isLoading) {
  return <div>Loading products...</div>;
}
console.log("productsWithDiscount : ", productsWithDiscount);
const product = productsWithDiscount?.find(prod => prod.id === productId);
const handleGoBack = () => {
  router.push('/'); // Navigate to the root route
};
  return (
    <div className="bg-red-100">
    <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />

      <h1 className='bg-red-500'>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <img src={product?.image} alt='Product Image'/>
      {/* render app/products/[productId].js/  */}
      <p>{product.discountPrice}฿</p> 
      {product ? ( 
  <p>Product Name: {product.name}</p> 
) : (
  <p>Product not found.</p> 
)}
      {order && (
        <p>
          Order Placed: Product ID - {order.productId}, Count - {order.count}
        </p>
      )}
      <p>end</p>
      {/* Display other product details here */}
      <AddShoppingCart className="cursor-pointer" onClick={() => {
        setModalButtonText("เพิ่มไปยังรถเข็น"); // Set button text for "Add to Cart"
        setShowModal(true);
      }} />
      <Button onClick={handleBuyButtonClick}>ซื้อสินค้า</Button>
      
      {showModal && (
        <Modal
          productId={productId}
          buttonText={modalButtonText}  // Use dynamic button text
          onClose={handleCloseModal}
          order={order} 
           onOrderChange={handleOrderChange} 
        />
      )}
    </div>
  );
}

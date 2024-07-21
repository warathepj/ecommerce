// app/products/[productId].js/
"use client"
import { useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';
import { useProducts } from '../../../context/ProductsContext';

import Link from 'next/link';

import ProductContext from '../../../context/ProductContext';

import AddShoppingCart from '@/app/components/(icon)/AddShoppingCart';
import Modal from '@/app/components/Modal';
import ShoppingCart from "../../components/(icon)/ShoppingCart";
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
      <ShoppingCart />
      <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />

      <h1 className='bg-red-500'>Product Detail</h1>
      <p>Product ID: {productId}</p>
      <img src={product?.image} alt='Product Image' />

      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-between'>

          {/* <p className='pr-2 text-red-500'>฿{product.discountPrice}</p>  */}
          {/* if product.discount==0 then don't show product.price and product.discount */}
          {/* <p className='pr-2 line-through'>{product.price}</p>       <div className='flex flex-row justify-between'> */}
          <div className='flex flex-row justify-between'>
            {product.discount > 0 && (
              <>
                <p className='pr-2 text-red-500'>฿{product.discountPrice}</p>
                <p className='pr-2 line-through'>{product.price}</p>
                <p className='text-red-500'>-{product.discount}%</p>
              </>
            )}
            {product.discount == 0 && (
              <>
                <p className='pr-2 text-red-500'>฿{product.discountPrice}</p>
              </>
            )}
          </div>
        </div>
        {/* <div className='flex flex-row justify-between'> */}
          <p>ขายแล้ว {Math.floor(Math.random() * 10000) + 1 > 999 ? (Math.round((Math.floor(Math.random() * 10000) + 1) / 1000 * 10) / 10).toFixed(1) + " พัน" : Math.floor(Math.random() * 10000) + 1}</p>

          {/* <p className='text-red-500'>-{product.discount}%</p> */}
        {/* </div> */}
      </div>
      {/* <div>
      <p>ขายแล้ว {Math.floor(Math.random() * 10000) + 1 > 999 ? (Math.round((Math.floor(Math.random() * 10000) + 1) / 1000 * 10) / 10).toFixed(1) + " พัน" : Math.floor(Math.random() * 10000) + 1}</p>
    </div> */}

      {product ? (
        <p>{product.name}</p>
      ) : (
        <p>Product not found.</p>
      )
      }
      <p>{product.descriptionHead}</p>

      <div>
        {product.description.split(',').map((item, index) => (
          <p key={index} className="indent-description">{item}</p>
        ))}
      </div>


      
      <p>end</p>
      {/* Display other product details here */}
      <AddShoppingCart className="cursor-pointer" onClick={() => {
        setModalButtonText("เพิ่มไปยังรถเข็น"); // Set button text for "Add to Cart"
        setShowModal(true);
      }} />
      <Button onClick={handleBuyButtonClick}>ซื้อสินค้า</Button>

      {
        showModal && (
          <Modal
            productId={productId}
            buttonText={modalButtonText}  // Use dynamic button text
            onClose={handleCloseModal}
            onOrderChange={handleOrderChange}
          />
        )
      }
    </div >
  );
}

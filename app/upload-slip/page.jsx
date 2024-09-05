// app/upload-slip/page.jsx
//reference to app/upload-slip/page.jsx
// and app/delivery/page.jsx/ and
// context/DeliveryContext why it error ""
"use client"
import Link from 'next/link';
import Upload from "../components/(icon)/Upload";
import { useContext, useEffect } from 'react';
import CartContext from '../../context/CartContext';
import DeliveryContext from '../../context/DeliveryContext';

export default function UploadSlip() {
  const { productInCart, sum } = useContext(CartContext);
  const { setDelivery } = useContext(DeliveryContext);


  // Assuming productInCart is an array of objects with the necessary data

  /////////////////////////////////////////////
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

/////////////////////////////////////////

//from app/delivery/page.jsx/
// const Delivery = productInCart.map((product) => ({
//   // Map relevant properties from product to Delivery object
//   image: product.image,
//   name: product.name, 
//   quantity: product.count,
//   price: product.modalPrice,
//   color: product.selectedColor,
//   // Add other properties as needed...
// }));
// state Delivery to Delivery context


return (
  <div>
    <p
      className='mx-auto text-center mt-4 mb-4'>
      อัปโหลดสลิปการจ่ายเงินของคุณ</p>
    {/* //when click app/upload-slip/page.jsx */}

    {/* //when click app/upload-slip/page.jsx */}
    <Link href="/delivery">
      <Upload />

    </Link>

    {/* go to /delivery */}
    {/* <pre>Name: {name}</pre>
      <pre>Address: {address}</pre> */}
  </div>
);
}
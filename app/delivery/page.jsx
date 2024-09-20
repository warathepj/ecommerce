// app/delivery/page.jsx
"use client"
import { useState, useEffect, useContext, useCallback } from 'react';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import AddressContext from '../../context/AddressContext';
import DeliveryContext from '../../context/DeliveryContext';
import Button from "../components/Button";
import Link from 'next/link';


export default function Delivery() {
    const { productInCart, setProductInCart, sum } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { name, address } = useContext(AddressContext);
  const { cartItemCount } = useContext(CartContext);
  // console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWcartItemCount :", cartItemCount);
  const { delivery } = useContext(DeliveryContext);
  console.log(",,,,,,,,,,,delivery: ", delivery);
  const [deliverySum, setSum] = useState(0);

  


  // Calculate the date 4 days from now
  const today = new Date();
  const fourDaysLater = new Date(today);
  fourDaysLater.setDate(today.getDate() + 4);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = fourDaysLater.toLocaleDateString('th-TH', options);
//from app/delivery/page.jsx, create removeItem in context/CartContext.js/
 

  ////////////
  useEffect(() => {
    // Clear the cart when this page is rendered
     setProductInCart([]);
     }, [setProductInCart]);

     useEffect(() => {
      const newSum = delivery.reduce(
        (deliverySum, product) => deliverySum + (product.quantity * product.price), 0
      );
      setSum(newSum);
    }, [delivery]); 
  //////////

    return (
        <div className='p-2'>
      {/*productInCart: {productId: '1', name: 'สนีกเกอร์', count: 1, 
        modalPrice: 2700, selectedColor: 'น้ำเงิน'} */}

 {/*loop and render amount in app/cart/page.js/pre tag
 amount is product.count * product.modalPrice */}
 <pre>รายการสินค้าที่สั่งซื้อ</pre>

<pre>
  {delivery.map((product, index) => (
    <div key={index}>
      <img src={product?.image} alt='Product Image' width="60px" />
      {/* <pre>image: {product.image}</pre> */}
      <pre>ชื่อสินค้า: {product.name}</pre>

{/* quantity: product.count,
      price: product.modalPrice,
      color: product.selectedColor */}

      <pre>จำนวน: {product.quantity}</pre>
      <pre>ราคาสินค้า: {product.price}</pre>
      <pre>สี: {product.color}</pre>
      <pre className='mb-4'>฿: {product.quantity * product.price}</pre>
    </div>
  ))}
</pre>
<pre>
  {productInCart.map((product, index) => (
    <div key={index}>
      <img src={product?.image} alt='Product Image' width="60px" />
      {/* <pre>image: {product.image}</pre> */}
      <pre>ชื่อสินค้า: {product.name}</pre>
      <pre>จำนวน: {product.count}</pre>
      <pre>ราคาสินค้า: {product.modalPrice}</pre>
      <pre>สี: {product.selectedColor}</pre>
      <pre className='mb-4'>฿: {product.count * product.modalPrice}</pre>
    </div>
  ))}
</pre>

<p className='text-red-500 mb-4'>
        ยอดรวมทั้งหมด (฿): {deliverySum}
      </p>
{/* from app/cart/page.js/*/}
{/* <pre style={{color: 'red'}}>
  ยอดรวมทั้งหมด (฿): {
    productInCart.reduce(
      (sum, product) => sum + (product.count * product.modalPrice), 0)}
  </pre> */}
{/* state sum to context/CartContext.js */}
<p>ที่อยู่สำหรับจัดส่งสินค้า</p>
<p className="mb-4 break-words whitespace-normal overflow-hidden w-80">ชื่อ: {name}</p>
      <p className='mb-4 break-words whitespace-normal overflow-hidden w-80'>ที่อยู่: {address}</p>
      <p className='mb-4'>สินค้าจะถึงภายในวันที่: {formattedDate}</p>
      <Link href="/">
        <Button>เลือกซื้อสินค้าอื่นๆ</Button>
      </Link>
        </div>
    )
}
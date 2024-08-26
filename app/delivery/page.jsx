// app/delivery/page.jsx
//from app/delivery/page.jsx, render date 4 day after now, render in pre tag
"use client"
import { useEffect, useContext, useCallback } from 'react';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import AddressContext from '../../context/AddressContext';

export default function Delivery() {
    const { productInCart, sum } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const { name, address } = useContext(AddressContext);

  // Calculate the date 4 days from now
  const today = new Date();
  const fourDaysLater = new Date(today);
  fourDaysLater.setDate(today.getDate() + 4);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = fourDaysLater.toLocaleDateString('th-TH', options);

    return (
        <>
            <pre>delivery</pre>
            <pre>--------DEBUG start---------</pre>
      {/*productInCart: {productId: '1', name: 'สนีกเกอร์', count: 1, 
        modalPrice: 2700, selectedColor: 'น้ำเงิน'} */}

 {/*loop and render amount in app/cart/page.js/pre tag
 amount is product.count * product.modalPrice */}
 <pre>.....</pre>
 <pre>รายการสินค้าที่สั่งซื้อ</pre>

<pre>
  {productInCart.map((product, index) => (
    <div key={index}>
      <img src={product?.image} alt='Product Image' width="60px" />
      {/* <pre>image: {product.image}</pre> */}
      <pre>ชื่อสินค้า: {product.name}</pre>
      <pre>จำนวน: {product.count}</pre>
      <pre>ราคาสินค้า: {product.modalPrice}</pre>
      <pre>สี: {product.selectedColor}</pre>
      <pre>฿: {product.count * product.modalPrice}</pre>
    </div>
  ))}
</pre>
<pre>.....</pre>

<pre style={{ color: 'red' }}>
        ยอดรวมทั้งหมด (฿): {sum}
      </pre>
{/* from app/cart/page.js/*/}
{/* <pre style={{color: 'red'}}>
  ยอดรวมทั้งหมด (฿): {
    productInCart.reduce(
      (sum, product) => sum + (product.count * product.modalPrice), 0)}
  </pre> */}
{/* state sum to context/CartContext.js */}
<pre>.....</pre>
<pre>ที่อยู่สำหรับจัดส่งสินค้า</pre>
<pre>Name: {name}</pre>
      <pre>Address: {address}</pre>
      <pre>.....</pre>
      <pre>สินค้าจะถึงภายในวันที่: {formattedDate}</pre>
      <pre>.....</pre>
      <pre>--------DEBUG end---------</pre>
        </>
    )
}
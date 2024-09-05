// app/cart/page.js/

"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useContext, useCallback } from 'react';
import CartContext from '../../context/CartContext';
import ProductContext from '../../context/ProductContext';
import ArrowLeft from "../components/(icon)/ArrowLeft";
import Button from "../components/Button";

export default function Cart() {

  const router = useRouter();
  // const { cartItems, updateDiscountPrice } = useContext(CartContext);
  const { productInCart, sum } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  console.log("productInCart from cart :", productInCart);
  // 12/8 ok array of object
  //")

  // const updatePrices = useCallback(() => {
  //   cartItems.forEach(item => {
  //     const product = products.find(product => product.id === item.productId);
  //     if (product && (!item.discountPrice || item.discountPrice !== product.discountPrice)) {
  //       updateDiscountPrice(item.productId, product.discountPrice);
  //     }
  //   });
  // }, [cartItems, products, updateDiscountPrice]);

  // useEffect(() => {
  //   updatePrices();
  // }, [updatePrices]);

  // console.log("cartItems from cart :", cartItems);
  // [{productId:"2",quantity:2,selectedColor:"น้ำเงิน"},{...}]




  const handleLogDiscount = (productId) => {
    const product = cartItems.find(item => item.productId === productId);
    if (product) {
      console.log('Discount Price from cart: ', product.discountPrice);
    } else {
      console.log('Product not found in cart.');
    }
  };


  const handleGoBack = () => {
    router.push('/'); // Navigate to the root route
  };

  return (
    <div className='bg-green-200 p-2'>
      <p>รถเข็น</p>

      {/*productInCart: {productId: '1', name: 'สนีกเกอร์', count: 1, 
        modalPrice: 2700, selectedColor: 'น้ำเงิน'} */}

 {/*loop and render amount in app/cart/page.js/pre tag
 amount is product.count * product.modalPrice */}
  {productInCart.map((product, index) => (
    <div 
      key={index}
      className='mt-4'
    >
      <img src={product?.image} alt='Product Image' width="60px" />
      <p>ชื่อสินค้า: {product.name}</p>
      <p>จำนวน: {product.count}</p>
      <p>ราคาสินค้า: {product.modalPrice}</p>
      <p>สี: {product.selectedColor}</p>
      <p>฿: {product.count * product.modalPrice}</p>
    </div>
  ))}

<p style={{ color: 'red' }}>
        ยอดรวมทั้งหมด (฿): {sum}
      </p>
{/* from app/cart/page.js/*/}
{/* <pre style={{color: 'red'}}>
  ยอดรวมทั้งหมด (฿): {
    productInCart.reduce(
      (sum, product) => sum + (product.count * product.modalPrice), 0)}
  </pre> */}
{/* state sum to context/CartContext.js */}

      <div>
        {/* ... your cart page content ... */}
        <Link href="/address"> 
  <Button>
    ยืนยัน 
  </Button>
</Link>

      </div>

      {/* <pre>
        {cartItems.map(item => (
          <div key={item.productId}>
            Product ID: {item.productId}
            selectedColor : {item.selectedColor}
            qty: {item.quantity}
          </div>
        ))}
      </pre> */}
      <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />

    </div>
  )
}
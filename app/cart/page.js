// app/cart/page.js/
"use client"
import ArrowLeft from "../components/(icon)/ArrowLeft";
import { useRouter } from 'next/navigation';
import { useProducts } from '../../context/ProductsContext';

// import { useSearchParams } from 'next/navigation';

export default function Cart() {
  //why orders in app/cart/page.js/
  // is empty array, useOrder is in context/OrderContext
  const router = useRouter();
  const { products, addProduct } = useProducts();
  // const searchParams = useSearchParams();
  // const productId = searchParams.get('productId');
  // const count = searchParams.get('count');
  // const order = {
  //   productId: productId || null,
  //   count: count ? parseInt(count) : 0
  // };
  // Assuming 'order' is an object like { productId: 123, count: 2 }
  // const queryString = new URLSearchParams(order).toString();
  // router.push(`/cart?${queryString}`);

const handleGoBack = () => {
  router.push('/'); // Navigate to the root route
};

return (
  <div>
    <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} />
    <p>รถเข็น</p>
    <ul>
            {products.map((product, index) => (
                <li key={index}>Product ID: {product.productId}, Count: {product.count}</li>
            ))}
        </ul>

    
    {/* <button onClick={handleViewCart}>View Cart</button> */}
    {/* {order && ( // Conditionally render if order exists
      <pre>{JSON.stringify(order, null, 2)}</pre>
    )} */}
  </div>
)
  }
// app/components/Modal.js/
// props count from app/components/Counter.jsx/ to 
// 

import { useState, useEffect, useContext } from 'react';
// import { useProducts } from '../../context/ProductsContext';
import ProductContext from '../../context/ProductContext';
import CartContext from '../../context/CartContext';
import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';
import Counter from './Counter';

export default function Modal({ buttonText, productId, onOrderChange, onClose }) {
  const { productsWithDiscount } = useContext(ProductContext);
  const { productInCart, setProductInCart } = useContext(CartContext);
  const { addProductToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState('');
  const [error, setError] = useState('');
  // const { cartItems, setCartItems } = useContext(CartContext);
  // let [productInCart, setProductInCart] = useState({ count: 0 });
  const [countFromCounter, setCountFromCounter] = useState(0);
  let [stockRemain, setStockRemain] = useState(0);
  const [isCounterDisabled, setIsCounterDisabled] = useState(false);
  const handleCountChange = (newCount) => {
    console.log("New count:", newCount);
    // Do something with the new count
  };
  console.log(
    "productsWithDiscount from modal : ", productsWithDiscount
  ); // ok, array of object, have discountPrice, color (all product)

  // productInCart = productsWithDiscount.find(product => product.id === productId);

  // if (productInCart) {
  //   console.log("productInCart from modal: ", productInCart);
  //   // 9/8 ok only selected object
  //   console.log("discountPrice from modal: ", productInCart.discountPrice); // ok
  // } else {
  //   console.log("Product with ID", productId, "not found in productsWithDiscount");
  // }
  // from app/components/Modal.js/, state productInCart.discountPrice to context/CartContext.js/


  const product = productsWithDiscount?.find(prod => prod.id === productId);
  console.log("product from modal : ", product); // 11/8 ok selected object

  const id = product.id;
  const name = product.name;
  const modalPrice = product.discountPrice;
  const stock = product.stock;
  const image = product.image;
  // console.log("@@@@@@@@@store : ", store);
  console.log("modalPrice : ", modalPrice);
  //productInCart is an array in context/CartContext.js/, 
  // when call app/components/Modal.js/
  const handleAddToCart = () => {
    // push productInModal to productInCart 
    const productInModal = {
      // product.image ?
      productId, name, count: countFromCounter, modalPrice, selectedColor, image
    };
    console.log("productInModal from modal : ", productInModal);
    //12/8 ok it object
    if (!selectedColor) {
      setError('คุณยังไม่ได้เลือกสี');
    } else if (!countFromCounter) {
      setError('คุณยังไม่ได้ระบุจำนวนสินค้า');

    } else {
      // Proceed with adding to cart
      setError('');
      onClose();
      // Your add to cart logic here
      setProductInCart(prevItems => [...prevItems, productInModal]);
    }
    // addProductToCart(productInModal); // Add product to CartContext
    // onClose(); // Close the modal
  };
  // const handleAddToCart = () => {
  //in next js 14,state app/components/Modal.js/ 
  // const productInModal = { productId, count: countFromCounter, modalPrice, selectedColor };
  // in context/CartContext with name productInCart
  // console.log("productInModal from modal : ", productInModal);
  //12/8 ok it object

  // setCartItems(prevItems => [...prevItems, productInModal]); 
  // onClose();

  // };

  // const { addCartItem, selectedColor } = useContext(CartContext);
  //state app/components/Modal.js/ 
  // and push to array in context/CartContext



  //   const product = productsWithDiscount?.find(prod => prod.id === productId);
  // const calculatePrice = product.discountPrice;
  let calculatePrice;
  // const cost = count * calculatePrice;
  let cost;
  // const handleCloseAndOrder = () => {
  //     addProduct({ productId, count, calculatePrice, cost });
  // console.log("products in handleCloseAndOrder :", products);

  //onClose(); // Assuming onClose will close the modal
  // };
  // Close the modal or perform any other necessary actions
  // onClose();
  // console.log("setOrders", setOrders);

  
  useEffect(() => {
    setStockRemain(stock - countFromCounter);
  }, [stock, countFromCounter]);

  return (
    <div className='bg-blue-100 p-2'>
      <div className="modal">
        {/* <pre>product.id: {product.id}</pre> */}
      {/* <p>stock from context: {stock}</p> */}
      <p>คลัง: {stockRemain}</p>
      <Counter 
        onCountChange={setCountFromCounter} 
        disabled={stockRemain === 0}
      />
    </div>
      {/*from app/components/Modal.js/ */}
      
      {/* {stockRemain = 0 ? (
        <>
          <pre>สินค้าหมด</pre>
          <Counter disabled={true} onCountChange={setCountFromCounter} />
        </>
      ) : (
        <Counter disabled={isCounterDisabled} onCountChange={setCountFromCounter} />
      )} */}
      {/* initial can click Counter */}
      {/* if stockRemain < 0 then disable button and render
      "สินค้าหมด" in pre tag*/}


      {/* <Qty onQuantityChange={setQuantity} /> */}
      {/* when click app/components/Modal.js/ */}
      {/* 19 */}
      {/* when second click on app/components/Modal.js/ */}


      {/* Reference: context/ProductContext.js */}
      <div className='ml-2 mb-3 flex flex-row gap-4'>
      {/* {colors.map((color) => (
        <label key={color}>
          <input
            type="radio"
            value={color}
            name="color"
            checked={selectedColor === color}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          {color}
        </label>
      ))} */}
        {product && product.color.map((color, index) => (
          <label key={index}>
            <input
              type="radio"
              value={color}
              name="color"
              checked={selectedColor === color}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
            {color}
          </label>
        ))}
      </div>


      {/* DEBUG */}
      {/* <pre>Product ID from Modal: {productId}</pre> */}
      <p className='mt-3'>ชื่อสินค้า: {product.name}</p>

      <p>สี : {selectedColor}</p>

      {/* //in app/components/Modal.js/p tag, render
 sum of product.discountPrice * count */}
      <p className='pr-2'>฿{product.discountPrice}</p>
      <p>จำนวนสินค้า: {countFromCounter}</p>
      <p className='pr-2 text-red-500'>รวมยอด ฿{product.discountPrice * countFromCounter}</p>
      {/* in next js 14, have app/components/Modal.js/, and have
  const [selectedColor, setSelectedColor] = useState('');
  and have
  <input
              type="radio"
              value={color}
              name="color"
              checked={selectedColor === color}
              onChange={(e) => setSelectedColor(e.target.value)}
            />
        / if not selectedColor when press*/}
      <Button onClick={handleAddToCart}> 
  {buttonText}
</Button>
{error && <p className="text-red-500">{error}</p>}
{/* render "คุณยังไม่ได้เลือกสี" */}
    </div>
  );

}
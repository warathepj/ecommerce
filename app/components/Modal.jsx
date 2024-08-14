// app/components/Modal.js/
// props count from app/components/Counter.jsx/ to 
// app/components/Modal.js/

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
  // const { cartItems, setCartItems } = useContext(CartContext);
  // let [productInCart, setProductInCart] = useState({ count: 0 });
  const [countFromCounter, setCountFromCounter] = useState(0);
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

  const name = product.name;
  const modalPrice = product.discountPrice;
  const image = product.image;
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
    setProductInCart(prevItems => [...prevItems, productInModal]);
    // addProductToCart(productInModal); // Add product to CartContext
    onClose(); // Close the modal
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

  return (
    <div className='bg-blue-100'>

      <p>modal</p>
      {/* <img src={product.image} className='w-16'/> */}
      <p>คลัง: {Math.floor(Math.random() * (2000 - 20 + 1)) + 20}</p>

      {/* <Color /> */}
      {/* is in app/components/Modal.js/*/}
      {/* Color is import from app/components/Color.js/ */}
      {/* can not input to <input 
          type="radio" />, how to fix */}
      <Counter onCountChange={setCountFromCounter} />
      {/* <Qty onQuantityChange={setQuantity} /> */}
      {/* when click app/components/Modal.js/ */}
      {/* 19 */}
      {/* when second click on app/components/Modal.js/ */}
      <Button onClick={handleAddToCart}>
        {buttonText}
      </Button>

      {/* Reference: context/ProductContext.js */}
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

      {/* DEBUG */}
      <pre>--------DEBUG---------</pre>
      <pre>Product ID from Modal: {productId}</pre>
      <pre>name from Modal: {product.name}</pre>

      {/* from app/components/Modal.js/ set productId, selectedColor and*/}
      {/* quantity in 1 object */}
      <pre>Selected Color from Modal.js : {selectedColor}</pre>

      {/* //in next js 14 app/components/Modal.js/ 
have code */}
      <pre className='pr-2 text-red-500'>฿{product.discountPrice} from modal</pre>
      <pre>Count from Modal: {countFromCounter}</pre>
     
      <pre>----------DEBUG-----------</pre>

    </div>
  );

}
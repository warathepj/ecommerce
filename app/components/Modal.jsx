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
    const [quantity, setQuantity] = useState(0);
  const { productsWithDiscount } = useContext(ProductContext);
  const { count } = useContext(CartContext);
  let [productInCart, setProductInCart] = useState({ count: 0 });

  console.log(
    "productsWithDiscount from modal : ", productsWithDiscount
  ); // ok, array of object, have discountPrice, color (all product)

productInCart = productsWithDiscount.find(product => product.id === productId);

if (productInCart) {
  console.log("productInCart from modal: ", productInCart); 
  // 9/8 ok only selected object
  console.log("discountPrice from modal: ", productInCart.discountPrice); // ok
} else {
  console.log("Product with ID", productId, "not found in productsWithDiscount");
}
// from app/components/Modal.js/, state productInCart.discountPrice to context/CartContext.js/

// to log discountPrice that have id === productId
// productsWithDiscount is from context/ProductContext



    const { addCartItem, selectedColor } = useContext(CartContext);
    //next js 14 in app/components/Modal.js/ have
    const product = { productId, selectedColor, quantity };
    // how to state product to context
    // state app/components/Modal.js/addToCart to context/CartContext.js/
    // it error "" how to fix
    // console.log("selectedColor", selectedColor);

    // console.log("products", products);
    //   const { productsWithDiscount, isLoading } = useContext(ProductContext);
    //   console.log("productsWithDiscount from Modal.js : ", productsWithDiscount); // array of object, have discountPrice

    // 45

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

const handleAddToCart = () => {
    addCartItem({ productId, selectedColor, quantity });
    onClose(); 
// console.log("product in modal/handleAddToCart :", product); // object

  }
return (
    <div className='bg-blue-100'>

        <p>modal</p>
        {/* <img src={product.image} className='w-16'/> */}
        {/* <p className='pr-2 text-red-500'>฿{product.discountPrice} from modal</p> */}
        <p>คลัง: {Math.floor(Math.random() * (2000 - 20 + 1)) + 20}</p>

        {/* <Color /> */}
        {/* is in app/components/Modal.js/*/}
        {/* Color is import from app/components/Color.js/ */}
        {/* can not input to <input 
          type="radio" />, how to fix */}
        <Counter />
        {/* <Qty onQuantityChange={setQuantity} /> */}
        {/* when click app/components/Modal.js/ */}
        {/* 19 */}
        {/* when second click on app/components/Modal.js/ */}
        <Button onClick={handleAddToCart}>
            {buttonText}
        </Button>

        <pre>Product ID from Modal: {productId}</pre>
  {/* Reference: context/ProductContext.js */}
{productInCart && productInCart.color.map((color, index) => (
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

        {/* from app/components/Modal.js/ set productId, selectedColor and*/}
        {/* quantity in 1 object */}
        <pre>Selected Color from Modal.js : {selectedColor}</pre>

{/* //in next js 14 app/components/Modal.js/ 
have code */}
        <pre>Count from Modal: {count}</pre>
        {/* update count state to productInCart,
        data in productInCart is {count: 0}*/}
        <pre>productInCart.count from Modal: {productInCart.count}</pre> 
        {/* ok from CartContext */}
    </div>
);

}
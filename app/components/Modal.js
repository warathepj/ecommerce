// app/components/Modal.js/
//from app/components/Modal.js/product and context/CartContext
// how to render product.productId in app/cart/page.js/pre tag

import { useState, useEffect, useContext } from 'react';
// import { useProducts } from '../../context/ProductsContext';
import ProductContext from '../../context/ProductContext';
import CartContext from '../../context/CartContext';
import Color from "./Color";
import Qty from "./Qty";
import Button from './Button';

export default function Modal({ buttonText, productId, onOrderChange, onClose }) {
    // const { order, setOrder } = useOrder();
    const [quantity, setQuantity] = useState(0);
    const { addCartItem } = useContext(CartContext);
    // const { products, addProduct, selectedColor, setSelectedColor, productsWithDiscount, isLoading } = useProducts(); 
    // from app/components/Modal.js/ and context/ProductsContext.js/
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

// console.log("products in before return :", products); // array of only selected object, have discountPrice=undefined
const handleAddToCart = () => {
    // Assuming you have quantity and other product details available
    //from context/CartContext.js render app/components/Modal.js/product
    // in app/cart/page.js/pre tag
    const product = { productId, quantity };
    addCartItem?.(product);
    onClose(); // Close the modal after adding to cart
}
return (
    <div className='bg-blue-100'>

        <p>modal</p>
        <p>Product ID from Modal: {productId}</p>
        {/* <img src={product.image} className='w-16'/> */}
        {/* <p className='pr-2 text-red-500'>฿{product.discountPrice} from modal</p> */}
        <p>คลัง: {Math.floor(Math.random() * (2000 - 20 + 1)) + 20}</p>

        <Color />
        <p>Count from Modal: {quantity}</p>
        <Qty onQuantityChange={setQuantity} />
        {/* when click app/components/Modal.js/ */}
        {/* 19 */}
        {/* when second click on app/components/Modal.js/ */}
        <Button onClick={handleAddToCart}>
            {buttonText}
        </Button>

        <ul>
            {/* {products.map((product, index) => { */}
            {/* console.log("products in map :", products); // array of only selected object, have discountPrice=undefined */}
            {/* const calculatePrice = product.discountPrice; // Assuming discountPrice holds the final price */}
            {/* const cost = product.count * calculatePrice;  */}
            {/* return ( */}
            {/* <li key={index}> */}
            {/* <pre>product in li : {product}</pre> */}
            {/* <pre>product.discountPrice in li : {product.discountPrice}</pre> */}
            {/* Product ID: {product.productId}, Count: {product.count},  */}
            {/* Price: {calculatePrice} */}
            {/* Cost: {cost} */}
            {/* <p>Selected Color: {selectedColor}</p> */}
            {/* </li> */}
            {/* ); */}
            {/* })} */}
        </ul>


        {/* THIS CODE CAL FIRST PRODUCT OK, BUT NEXT PRODUCT ADD PRICE INSTEAD FIRST PRODUCT */}
        {/* of new productId, from */}
        {/* <ul> */}
        {/* {products.map((product, index) => ( */}
        {/* <li key={index}>
            Product ID: {product.productId}, Count: {product.count}, 
            Price: {calculatePrice}
            Cost: {cost}
            <p>Selected Color: {selectedColor}</p>

        </li> */}
        {/* ))} */}
        {/* exist calculatePrice is change, how to fix? */}
        {/* </ul> */}
        {/* why Price: {product.discountPrice} it's not working? */}

        {/* <ul>
            {products.map((product, index) => (
                <li key={index}>Product ID: {product.productId}, Count: {product.count}</li>
            ))}
        </ul> */}
        {/* THIS CODE CAL FIRST PRODUCT OK, BUT NEXT PRODUCT ADD PRICE INSTEAD FIRST PRODUCT */}


    </div>

);

}
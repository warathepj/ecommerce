// app/components/Modal.js/

import { useState, useEffect, useContext } from "react";
import ProductContext from "../../context/ProductContext";
import CartContext from "../../context/CartContext";
import Color from "./Color";
import Qty from "./Qty";
import Button from "./Button";
import Counter from "./Counter";

export default function Modal({
  buttonText,
  productId,
  onOrderChange,
  onClose,
}) {
  const { productsWithDiscount } = useContext(ProductContext);
  const { productInCart, setProductInCart } = useContext(CartContext);
  const { addProductToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");
  const [countFromCounter, setCountFromCounter] = useState(0);
  let [stockRemain, setStockRemain] = useState(0);
  const [isCounterDisabled, setIsCounterDisabled] = useState(false);
  const handleCountChange = (newCount) => {
    console.log("New count:", newCount);
  };
  // console.log("productsWithDiscount from modal : ", productsWithDiscount); 
  
  const product = productsWithDiscount?.find((prod) => prod.id === productId);
  // console.log("product from modal : ", product); 

  const id = product.id;
  const name = product.name;
  const modalPrice = product.discountPrice;
  const stock = product.stock;
  const image = product.image;
  // console.log("@@@@@@@@@store : ", store);
  // console.log("modalPrice : ", modalPrice);
  const handleAddToCart = () => {
    // push productInModal to productInCart
    const productInModal = {
      productId,
      name,
      count: countFromCounter,
      modalPrice,
      selectedColor,
      image,
    };
    // console.log("productInModal from modal : ", productInModal);
    if (!selectedColor) {
      setError("คุณยังไม่ได้เลือกสี");
    } else if (!countFromCounter) {
      setError("คุณยังไม่ได้ระบุจำนวนสินค้า");
    } else {
      setError("");
      onClose();
      setProductInCart((prevItems) => [...prevItems, productInModal]);
    }
  };

  let calculatePrice;
  let cost;

  useEffect(() => {
    setStockRemain(stock - countFromCounter);
  }, [stock, countFromCounter]);

  return (
    <div className="bg-blue-100 p-2">
      <div className="modal">
        {/* <pre>product.id: {product.id}</pre> */}
        {/* <p>stock from context: {stock}</p> */}
        <p>คลัง: {stockRemain}</p>
        <Counter
          onCountChange={setCountFromCounter}
          disabled={stockRemain === 0}
        />
      </div>
     
      <div className="ml-2 mb-3 flex flex-row gap-4">
        {product &&
          product.color.map((color, index) => (
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

      {/* <pre>Product ID from Modal: {productId}</pre> */}
      <p className="mt-3">ชื่อสินค้า: {product.name}</p>
      <p>สี : {selectedColor}</p>
      <p className="pr-2">฿{product.discountPrice}</p>
      <p>จำนวนสินค้า: {countFromCounter}</p>
      <p className="pr-2 text-red-500">
        รวมยอด ฿{product.discountPrice * countFromCounter}
      </p>
      
      <Button onClick={handleAddToCart}>{buttonText}</Button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

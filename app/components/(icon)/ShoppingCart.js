// app/components/(icon)/ShoppingCart.js/
"use client";

import Link from "next/link";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

export default function ShoppingCart(props) {
  const { productInCart } = useContext(CartContext);
  // console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWproductInCart :", productInCart);
  const cartItemCount = productInCart.length;

  return (
    <>
      <Link href="/cart">
        <div className="relative cursor-pointer">
          <svg
            className="absolute top-0 right-2 w-8 h-8 text-yellow-600"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
          </svg>
          {cartItemCount > 0 && (
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-white text-center text-xs font-bold flex items-center justify-center">
              {cartItemCount}
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

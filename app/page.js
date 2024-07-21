// app/page.js
'use client'
import Link from 'next/link';
import ShoppingCart from "./components/(icon)/ShoppingCart";
import Recommend from "./components/Recommend";

export default function Home() {
  
  return (
    <>
      <p>Hello</p>
{/* //when click app/page.js */}
<Link href="/cart" style={{cursor: 'pointer'}}>
 {/* Wrap with Link */}
      <ShoppingCart /> 
    </Link>
      {/* go to /cart */}
      <Recommend />
      
    </>
  )
}

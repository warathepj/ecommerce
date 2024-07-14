// app/page.js
'use client'
import ShoppingCart from "./components/(icon)/ShoppingCart";
import Card from "./components/Card";

export default function Home() {
  const data = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
  ];

  return (
    <>
      <p>Hello</p>
      <ShoppingCart />
      {data.map(item => (
        <Card key={item.id} item={item} /> 
      ))}

    </>
  )
}

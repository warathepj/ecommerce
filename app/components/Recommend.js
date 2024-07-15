// app/components/Recommend.js
import Card from "./Card";
import { useContext } from 'react';
     import ProductContext from '../../context/ProductContext';
     import Link from 'next/link';

export default function Recommend() {
  const products = useContext(ProductContext);

  return (
    <div className="p-1 bg-green-200 text-green-900">
      <p>สินค้าแนะนำประจำวัน</p> {/* Added the 'r' within a p tag */}
      {/* Some content here */}
      <div className="grid grid-cols-2 gap-1">
      {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}> 
            <Card name={product.name} /> 
          </Link>
        ))}
      </div>
    </div>
  );
}

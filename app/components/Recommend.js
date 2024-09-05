// app/components/Recommend.js
import Card from "./Card";
import Loading from "./Loading";
import { useContext } from 'react';
     import ProductContext from '../../context/ProductContext';
     import Link from 'next/link';

export default function Recommend() {
  const { productsWithDiscount, isLoading } = useContext(ProductContext);
  if (isLoading) {
    return <Loading/>;
  }
  return (
    <div className="p-2 bg-green-200 text-green-700">
      <p>สินค้าแนะนำประจำวัน</p> {/* Added the 'r' within a p tag */}
      {/* Some content here */}
      <div className="grid grid-cols-2 gap-2">
      {productsWithDiscount.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}> 
            <Card 
              key={product.id} 
              id={product.id} 
              image={product.image} 
              discount={product.discount} 
              discountPrice={product.discountPrice} 
              name={product.name} 
              descriptionHead={product.descriptionHead} 
            /> 
          </Link>
        ))}
      </div>
    </div>
  );
}

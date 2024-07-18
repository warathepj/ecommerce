// app/components/Card.js
'use client'
import Link from 'next/link';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1800617037.
export default function Card({ id, image, discount, discountPrice, name }) {
  return (
    <div className="relative bg-green-50 text-green-900">
        {discount !== 0 && ( // Conditionally render the discount element
        <p className="absolute top-0 right-0 text-red-500">-{discount}%</p>
      )}
        <h6>Card</h6>
        <p>{name}</p>
        <p>{discountPrice}</p>
        <img src={image} alt="" />
    </div>
  );
}

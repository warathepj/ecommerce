// app/components/Card.js
'use client'
import Link from 'next/link';

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1800617037.
export default function Card({ id, image, discount, discountPrice, name, descriptionHead }) {
  return (
    <div className="relative bg-green-50 text-green-900">
        {discount !== 0 && ( // Conditionally render the discount element
        <p className="absolute top-0 right-0 text-red-500">-{discount}%</p>
      )}
        <h6>Card</h6>
        <p>{name}</p>
        <img src={image} alt="รูปสินค้า" className='h-36 w-full' />
        <p>{descriptionHead}</p>
        <div className='flex flex-row justify-between'>

        <p className='text-red-500'>฿{discountPrice}</p>
      <p>ขายแล้ว {Math.floor(Math.random() * 10000) + 1 > 999 ? (Math.round((Math.floor(Math.random() * 10000) + 1) / 1000 * 10) / 10).toFixed(1) + " พัน" : Math.floor(Math.random() * 10000) + 1}</p> 

        {/* if over 999 Round off the number after the decimal point, and have text "พัน" at the end */}
        </div>
    </div>
  );
}

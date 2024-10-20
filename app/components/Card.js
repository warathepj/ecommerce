// app/components/Card.js
"use client";
import Link from "next/link";

export default function Card({
  id,
  image,
  discount,
  discountPrice,
  name,
  descriptionHead,
}) {
  return (
    <div
      className="
        relative p-1 md:p-4 h-[17rem] md:h-[23rem] bg-green-50 text-green-600"
    >
      {discount !== 0 && ( // Conditionally render the discount element
        <p className="absolute top-0 right-0 text-red-500">-{discount}%</p>
      )}
      <p>{name}</p>
      <img
        src={image}
        alt="รูปสินค้า"
        className="h-36 md:h-48 w-full md:w-56"
      />
      <p className="h-[3rem] mt-4 text-[.7rem] md:text-base">
        {descriptionHead}
      </p>
      <div className="flex flex-row justify-between h-[3rem]">
        <p className="text-xs text-red-500">฿{discountPrice}</p>
        <p>
          ขายแล้ว{" "}
          {Math.floor(Math.random() * 10000) + 1 > 999
            ? (
                Math.round(
                  ((Math.floor(Math.random() * 10000) + 1) / 1000) * 10
                ) / 10
              ).toFixed(1) + " พัน"
            : Math.floor(Math.random() * 10000) + 1}
        </p>
      </div>
    </div>
  );
}

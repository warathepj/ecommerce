// app/components/Card.js
'use client'
import Link from 'next/link';

export default function Card({ item }) {
  return (
    <Link href={`/products/${item.id}?name=${item.name}`}>
      <p>{item.name}</p>
    </Link>
  );
}

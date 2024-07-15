// app/components/Card.js
'use client'
import Link from 'next/link';

export default function Card({ name }) {
  return (
    <div className="relative bg-green-50 text-green-900">
        <p className="absolute top-0 right-0 text-red-500">-34%</p>
        <h6>Card</h6>
        <p>{name}</p>
        <img src='https://images.unsplash.com/photo-1612942910539-9ff28b2e00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  );
}

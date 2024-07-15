"use client"
import ArrowLeft from "../components/(icon)/ArrowLeft";
import { useRouter } from 'next/navigation';

export default function Cart({ order }) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/'); // Navigate to the root route
  };

    return (
      <div>
        <ArrowLeft style={{ cursor: 'pointer' }} onClick={handleGoBack} /> 
        <p>รถเข็น</p>
        {order && ( // Conditionally render if order exists
        <pre>{JSON.stringify(order, null, 2)}</pre>
      )}
      </div>
    )
  }
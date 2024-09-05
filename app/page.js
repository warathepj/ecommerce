// app/page.js
//delay render app/page.js 1 sec
'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactSpinner from 'react-spinner';
import ProtectedRoute from './components/ProtectedRoute';
// import LoginModal from './components/LoginModal';
import ShoppingCart from "./components/(icon)/ShoppingCart";
import Loading from "./components/Loading";
import Recommend from "./components/Recommend";
import { redirect } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  // redirect('/signup');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 1 second
    }, 800);
  }, []);
  if (isLoading) {
    return <Loading/>

  }

  return (
    // <ProtectedRoute>
    <div class="">
      {/* <div className='absolute top-0 left-0'>
      <LoginModal />
      </div> */}
        <Recommend />
    </div>
    // </ProtectedRoute>
  )
}

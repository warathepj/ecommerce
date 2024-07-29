// app/login/page.js/
"use client"
import { FormEvent } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useUser } from '../../context/userContext';

import Link from 'next/link';
import ProtectedRoute from '../components/ProtectedRoute';
import Button from '../components/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter()
  const { formData, setFormData } = useUser();
//in app/login/page.js/ if email and password is === formData
// render "ok" in p tag, else render "wrong" in p tag,
// useUser is from '../../context/userContext';
  
  async function handleSubmit(event) {
    event.preventDefault()
//in app/login/page.js/ how to render email and password in p tag
if (email === formData.email && password === formData.password) {
  setError(null); // Clear any previous errors
  router.push('/');
} else {
  setError("Incorrect username or password");
}
    
  }
 
  return (
    <>
    <ProtectedRoute>
    <p>
              Name: {formData.name}, Email: {formData.email}, Password: {formData.password}
            </p>
            <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>

    {error && ( // Conditionally render error message
        <div>
          <p className='text-red-500'>{error}</p>
        </div>
      )}

    <div>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
        </div>

        <div> 
{/* //in app/login/page.js/ when click Login button, if "ok" */}
{/* go to "/", if "wrong" render "incorrect username or password" in p tag*/}
        <p>
          {email === formData.email && password === formData.password ? "ok" : "wrong"}
        </p>
        {/* // when click app/login/page.js/ */}
        <Link href="/signup"> 
       <Button>กลับไปหน้าลงทะเบียน</Button>
   </Link>

        {/* go to /signup, Button is from '../components/Button' */}
      </div>
    </ProtectedRoute>

    </>
  )
}
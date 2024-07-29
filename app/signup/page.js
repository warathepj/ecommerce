
// app/signup/page.js/
// from app/signup/page.js/ set state of formData
// at context/userContext.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/userContext';

export default function SignupPage() {
    const router = useRouter();
    const { formData, setFormData } = useUser();

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // from app/signup/page.js/ when handleSubmit render formData in p tag
    const handleSubmit = async (e) => {
        e.preventDefault();
        // ... your signup logic (fetch call, error handling, etc.)
        setSuccess(
            <p>
              Name: {formData.name}, Email: {formData.email}, Password: {formData.password}
            </p>
          );
        router.push('/login'); 
        
      };
   
   const handleEmailValidation = (event) => {
       const email = event.target.value;
       const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); 
       if (!isValid) {
           // Display an error message to the user (e.g., using state or an alert)
           setError('Please enter a valid email with only English letters and numbers.');
       } else {
           setError(''); // Clear any previous error
       }
   };

   const handlePasswordValidation = (event) => {
       const password = event.target.value;
       const isValid = /^[a-zA-Z0-9]+$/.test(password);
       if (!isValid) {
           // Display an error message
           setError('Password must contain only English letters and numbers.');
       } else {
           setError('');
       }
   };


    return (
        <div>
            <h2>Signup</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>} 
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
{/* //in app/signup/page.js/ validate email and password can use english and number, only*/}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"

                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleEmailValidation}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handlePasswordValidation}
                        required
                    />
                </
                div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}


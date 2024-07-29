// pages/api/auth/signup.mjs

// pages/api/auth/signup.js/

// from pages/api/auth/signup.js/
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
// change use utils/db to context instead
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;
      const { setUser } = useContext(UserContext);

      // Update the user context
      setUser({ name, email, password });
      res.status(201).json({ message: 'User data stored in context' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to store user data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }

    }

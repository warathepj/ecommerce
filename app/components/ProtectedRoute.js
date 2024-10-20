// components/ProtectedRoute.js

"use client";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/userContext";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { formData } = useUser(); // Assuming formData is used for authentication

  // Check if the user is authenticated (replace with your actual logic)
  const isAuthenticated = formData.email;

  if (!isAuthenticated) {
    router.push("/signup"); // Redirect to login if not authenticated
  }

  return children; // Render the children if authenticated
}

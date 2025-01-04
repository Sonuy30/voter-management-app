'use client';  // Add this line to mark the component as a client-side component

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation"; // Import to get the error query parameter

export default function LoginPage() {
  // Get the 'error' query parameter from the URL
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Display error message if it exists */}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        {/* Google Sign-in Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => signIn("google")}  // Handles Google sign-in
            className="w-full py-2 mt-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Sign in with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

'use client'; // Mark this file as a client-side component

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Voter Management</Link>
        </h1>

        {/* Navbar Links */}
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/voter-registration">Register Voter</Link>
          </li>
          <li>
            <Link href="/schemes">Schemes</Link>
          </li>

          {/* Account Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-600 flex items-center justify-center"
            >
              {/* User Profile Image */}
              <img
                src="https://via.placeholder.com/40"  // Replace this with the actual profile image URL
                alt="Account"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

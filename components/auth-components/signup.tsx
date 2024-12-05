'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Signup: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the signup logic here (e.g., API call)
    console.log({ username, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 text-white p-12 rounded-lg shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block font-medium mb-2 text-lg">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-800 p-3 rounded-md w-full text-lg"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-medium mb-2 text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 p-3 rounded-md w-full text-lg"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-2 text-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-800 p-3 rounded-md w-full text-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md text-lg"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-lg">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

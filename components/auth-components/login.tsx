'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Input validation
    if (!account || !password) {
      setError('Both fields are required.');
      return;
    }

    setError(''); // Clear errors
    console.log('Logging in with:', { account, password });

    // Example backend request (Adjust as needed)
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Login successful!');
        } else {
          setError(data.message || 'Invalid login credentials.');
        }
      })
      .catch(() => setError('An error occurred while logging in.'));
  };

  return (
    <div className="container mx-auto px-4 flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg">
        <div className="card-header text-center py-4 text-2xl font-bold border-b border-gray-700">
          Login
        </div>
        <div className="card-body p-6">
          {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="account" className="block mb-2 font-medium">
                Username
              </label>
              <input
                id="account"
                type="text"
                placeholder="Enter your username"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="bg-gray-700 p-3 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700 p-3 rounded-md w-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <span>Don&apos;t have an account? </span>
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <fieldset className="mb-4">
        <label htmlFor="username" className="block font-medium mb-2">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          className="bg-gray-800 p-2 rounded-md w-full"
        />
      </fieldset>

      <fieldset className="mb-4">
        <label htmlFor="password" className="block font-medium mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-800 p-2 rounded-md w-full"
        />
      </fieldset>

      <fieldset className="text-right">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Log in
        </button>
      </fieldset>

      <p className="mt-4 text-center">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Login;
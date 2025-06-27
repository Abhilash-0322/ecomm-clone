'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/profile');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-pink-700 mb-2">Login to Myntra</h2>
        <p className="text-center text-gray-500 mb-6">Enter your email and password to continue</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-base font-medium mb-1">Email</label>
            <input type="email" id="email" name="email" className="mt-1 w-full border rounded-lg px-4 py-3 text-lg focus:outline-pink-600" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium mb-1">Password</label>
            <input type="password" id="password" name="password" className="mt-1 w-full border rounded-lg px-4 py-3 text-lg focus:outline-pink-600" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition">Login</button>
        </form>
        <div className="text-center pt-4">
          <span className="text-gray-500">After login, visit your </span>
          <Link href="/profile" className="text-pink-600 font-semibold hover:underline">Profile</Link>
        </div>
      </div>
    </div>
  );
} 
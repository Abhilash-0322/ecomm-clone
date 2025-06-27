import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import React from 'react';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold mb-2 text-pink-700">Not logged in</h2>
          <p className="mb-4">Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center space-y-4">
        <h2 className="text-3xl font-extrabold text-pink-700 mb-2">Welcome,</h2>
        <div className="text-lg font-medium">{session.user?.email}</div>
        <div className="text-gray-500">This is your profile page.</div>
      </div>
    </div>
  );
} 
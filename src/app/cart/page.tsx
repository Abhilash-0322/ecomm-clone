import React from 'react';

const cartItems = [
  { id: 1, name: 'Red T-shirt', price: 499, quantity: 2 },
  { id: 2, name: 'Blue Jeans', price: 899, quantity: 1 },
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">Your Cart Items</h2>
        <ul className="divide-y">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between py-4">
              <span>{item.name} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-96 md:sticky md:top-8 h-fit bg-white rounded shadow p-6 self-start ml-auto">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <div className="flex justify-between font-bold text-lg mb-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button className="mt-6 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">Checkout</button>
      </div>
    </div>
  );
} 
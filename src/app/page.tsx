'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
}

function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-pink-200 to-pink-400 py-12 mb-10 flex flex-col items-center text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-pink-900 mb-4 drop-shadow">Shop the Latest Fashion</h1>
      <p className="text-lg sm:text-2xl text-gray-900 mb-6 max-w-2xl">Discover trending styles, exclusive deals, and top brands. Your one-stop shop for all things fashion!</p>
      <a href="#products" className="inline-block bg-pink-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-pink-900 transition">Shop Now</a>
    </section>
  );
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <HeroSection />
      <h2 className="text-3xl font-bold mb-8 text-center tracking-tight text-pink-900" id="products">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg p-3 flex flex-col items-center transition-all border border-gray-200">
            <Image src={product.image} alt={product.name} width={200} height={250} className="w-full h-48 object-cover rounded-lg mb-3 bg-gray-100" />
            <div className="w-full flex flex-col flex-1">
              <h2 className="text-base font-semibold mb-1 truncate text-gray-900" title={product.name}>{product.name}</h2>
              <div className="text-xs text-gray-700 mb-1">{product.brand} • {product.category}</div>
              <p className="text-lg font-bold text-pink-900 mb-2">₹{product.price}</p>
              <button className="mt-auto bg-pink-700 text-white px-3 py-2 rounded font-medium hover:bg-pink-900 transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

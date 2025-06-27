import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Red T-shirt', price: 499, image: '/placeholder/red.png', category: 'Men', brand: 'BrandA' },
  { id: 2, name: 'Blue Jeans', price: 899, image: '/placeholder/blue.png', category: 'Men', brand: 'BrandB' },
  { id: 3, name: 'Green Dress', price: 1299, image: '/placeholder/green.png', category: 'Women', brand: 'BrandC' },
  { id: 4, name: 'Yellow Top', price: 599, image: '/placeholder/yellow.png', category: 'Women', brand: 'BrandD' },
  { id: 5, name: 'Black Shoes', price: 1499, image: '/placeholder/black.png', category: 'Footwear', brand: 'BrandE' },
  { id: 6, name: 'White Sneakers', price: 1799, image: '/placeholder/white.png', category: 'Footwear', brand: 'BrandF' },
  { id: 7, name: 'Orange Shorts', price: 399, image: '/placeholder/orange.png', category: 'Men', brand: 'BrandG' },
  { id: 8, name: 'Purple Skirt', price: 799, image: '/placeholder/purple.png', category: 'Women', brand: 'BrandH' },
  { id: 9, name: 'Grey Jacket', price: 1999, image: '/placeholder/grey.png', category: 'Men', brand: 'BrandI' },
  { id: 10, name: 'Pink Kurti', price: 999, image: '/placeholder/pink.png', category: 'Women', brand: 'BrandJ' },
  { id: 11, name: 'Brown Bag', price: 1199, image: '/placeholder/brown.png', category: 'Accessories', brand: 'BrandK' },
  { id: 12, name: 'Navy Cap', price: 299, image: '/placeholder/navy.png', category: 'Accessories', brand: 'BrandL' },
];

export async function GET() {
  return NextResponse.json(products);
} 
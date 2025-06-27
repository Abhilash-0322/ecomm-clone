# Myntra Clone

A full-stack Myntra clone built with Next.js 15, TypeScript, Tailwind CSS, NextAuth, and MongoDB (mocked for demo). This project demonstrates a modern e-commerce web app with authentication, cart, product listing, and responsive design.

## Features
- Modern responsive UI inspired by Myntra
- Home page with hero section and featured products (mock data)
- Local placeholder images for products (no external assets)
- Login and authentication using NextAuth (credentials, JWT, mock user)
- User profile page (view after login)
- Cart page with summary (UI only, not persistent)
- Accessible color contrast and clean layout
- Navbar and footer on all pages

## Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB (mocked for demo)](https://www.mongodb.com/)

## Getting Started

### Prerequisites
- Node.js 18+
- npm (comes with Node.js)
- [ImageMagick](https://imagemagick.org/) (for generating placeholder images, already done in this repo)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd myntra-clone
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env.local` file in the root with:
   ```env
   MONGODB_URI=mongodb://localhost:27017/myntra-clone
   NEXTAUTH_SECRET=supersecretkey
   ```
   > For demo, MongoDB is not required unless you want to connect a real DB.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

### Demo Login
- **Email:** `test@myntra.com`
- **Password:** any (password check is skipped in demo)

## Usage
- Browse products on the home page
- Click "Add to Cart" (UI only, not persistent)
- Login to access your profile page
- Cart summary is on the right of the cart page

## Folder Structure
- `src/app/` - Main app directory (pages, API routes)
- `public/placeholder/` - Local placeholder images for products

## Customization
- To use real product data, connect the API to a real MongoDB database
- To enable persistent cart, implement cart logic with state management or backend

## License
This project is for educational/demo purposes only and is not affiliated with Myntra.

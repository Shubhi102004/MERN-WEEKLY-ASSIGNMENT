import React from "react";

const products = [
  { id: 1, name: "Product A", price: "$29", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$49", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: "$99", image: "https://via.placeholder.com/150" },
];

export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shopify</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Products</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-100">
        <h2 className="text-4xl font-bold">Welcome to Our Store</h2>
        <p className="text-lg mt-4">Discover amazing products below!</p>
      </section>

      {/* Product Section */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 text-center shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-10">
        <p>Follow us on:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-pink-400">Instagram</a>
          <a href="#" className="hover:text-sky-400">Twitter</a>
        </div>
        <p className="mt-4">&copy; 2025 Shopify Store</p>
      </footer>
    </div>
  );
}
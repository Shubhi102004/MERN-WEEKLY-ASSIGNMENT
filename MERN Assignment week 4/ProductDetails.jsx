import React, { useState } from "react";

const product = {
  name: "Product A",
  price: "$29",
  image: "https://via.placeholder.com/300",
  description: "This is a detailed description of the product."
};

export default function ProductDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
      <img src={product.image} alt={product.name} className="mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <p className="mt-4 text-gray-600">{product.description}</p>
      )}
    </div>
  );
}
'use client'

import React, { useState } from 'react';


const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const product = {
        name: 'Product Name',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget...',
        category: 'Category Name',
        imageUrl: 'https://via.placeholder.com/300x300', // Replace with your product image URL
      };
      const handleQuantityChange = (value) => {
        setQuantity(Math.max(1, quantity + value)); // Ensure quantity is not less than 1
      };

      const addToCart = () => {
        console.log(`Added ${quantity} ${product.name} to the cart`);
      };
  return (
    <div className="container mx-auto py-8 px-6 mt-24">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{product.price}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <div className="flex items-center mb-4">
          <button
            className="bg-zinc-500 text-white px-3 py-1 mr-2"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            className="bg-zinc-500 text-white px-3 py-1 ml-2"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </button>
        </div>
        <button
          className="bg-zinc-700 text-white px-4 py-2 mb-4"
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
      </div>
    </div>
  </div>
  )
}

export default Product
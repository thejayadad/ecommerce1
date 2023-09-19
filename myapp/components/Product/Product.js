'use client'
import React from 'react'

const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$19.99',
      imageSrc: 'https://images.pexels.com/photos/3056056/pexels-photo-3056056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with your product image URL
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Pellentesque vehicula augue id odio tincidunt, eget tempus urna posuere.',
      price: '$24.99',
      imageSrc: '/product2.jpg', // Replace with your product image URL
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Pellentesque vehicula augue id odio tincidunt, eget tempus urna posuere.',
        price: '$24.99',
        imageSrc: '/product2.jpg', // Replace with your product image URL
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Pellentesque vehicula augue id odio tincidunt, eget tempus urna posuere.',
        price: '$24.99',
        imageSrc: '/product2.jpg', // Replace with your product image URL
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Pellentesque vehicula augue id odio tincidunt, eget tempus urna posuere.',
        price: '$24.99',
        imageSrc: '/product2.jpg', // Replace with your product image URL
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Pellentesque vehicula augue id odio tincidunt, eget tempus urna posuere.',
        price: '$24.99',
        imageSrc: '/product2.jpg', // Replace with your product image URL
      },
  ];

const Product = () => {
  return (
    <section className="py-12 bg-gray-100 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Encore Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-80 object-cover mb-1"
              />
              <h3 className="text-md font-light">{product.name}</h3>
              <div className="flex flex-col items-center">
                <span className="text-sm font-light">{product.price}</span>
                <button
                  className="bg-zinc-500 hover:bg-zinc-600 hover:text-blue-500 w-full text-white px-4 py-2 transition duration-300 ease-in-out"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
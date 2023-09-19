'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  'https://images.pexels.com/photos/3056059/pexels-photo-3056059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with your image URLs
  'https://images.pexels.com/photos/3056059/pexels-photo-3056059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with your image URLs
  'https://images.pexels.com/photos/3056059/pexels-photo-3056059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with your image URLs
];

const Hero = () => {
  return (
    <section className="relative max-w-[1360px] mx-auto">
      <div
        style={{ maxHeight: '700px' }}
        className="h-[500px] md:h-[700px] overflow-hidden"
      >
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          className="h-full"
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slider Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to <span className="text-blue-700">Shopping Market</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover the best deals on your favorite products.
          </p>
          <a
            href="/products"
            className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded-sm text-lg transition duration-300 ease-in-out"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

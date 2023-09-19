import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[88vh] md:h-[96vh] bg-gradient-to-b from-black to-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-yellow-400">Shopping Market</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Discover the best deals on your favorite products.
          </p>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/3056059/pexels-photo-3056059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your own background image
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full opacity-40"
      />
    </section>
  );
};

export default Hero;

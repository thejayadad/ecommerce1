'use clinet'
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300">
              <p>Email: contact@shoppingmarket.com</p>
              <p>Phone: +123-456-7890</p>
              <p>Address: 123 Toledo, Georgia</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-light mb-4">Links</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-blue-700 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-700 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-700 transition">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700 transition">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700 transition">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()}The ShoppingMarket</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

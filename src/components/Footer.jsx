// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">YourShope</h3>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for the latest products. We bring you quality items at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Shop</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Categories</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>FAQ</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
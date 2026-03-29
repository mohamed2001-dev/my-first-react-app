// src/components/Features.jsx
import React from "react";
import { FaShippingFast, FaHeadset, FaUndoAlt, FaLock } from "react-icons/fa"; // Icons from react-icons

function Features() {
  // You can add more features or customize
  const featuresData = [
    {
      icon: <FaShippingFast size={30} className="text-blue-500" />,
      title: "Fast Shipping",
      description: "Get your orders delivered quickly and safely.",
    },
    {
      icon: <FaHeadset size={30} className="text-blue-500" />,
      title: "24/7 Support",
      description: "We are here to help you anytime, anywhere.",
    },
    {
      icon: <FaUndoAlt size={30} className="text-blue-500" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days.",
    },
    {
      icon: <FaLock size={30} className="text-blue-500" />,
      title: "Secure Payment",
      description: "Your transactions are safe with our encrypted system.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
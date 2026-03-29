// src/components/MidBanner.jsx
import React from "react";
import {Link} from "react-router-dom"

function MidBanner({ title, subtitle, buttonText, image, reverse = false, onClick }) {
  return (
    <div
      className={`w-full flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12 gap-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text section */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-lg">{subtitle}</p>
        {buttonText && (
          <Link to = {'/products'}>
            <button
            onClick={onClick}
            className="w-fit px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300 cursor-pointer"
          >
            {buttonText}
          </button>
          </Link>
        )}
      </div>

      {/* Image section */}
      {image && (
        <div className="flex-1 flex justify-center items-center">
          <img src={image} alt={title} className="w-full max-w-md h-auto object-contain" />
        </div>
      )}
    </div>
  );
}

export default MidBanner;
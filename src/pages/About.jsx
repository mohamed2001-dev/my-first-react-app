import React from 'react'

function About() {
  return (
    <div className="bg-gray-50 py-12 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4 flex justify-center">
        About Us
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Welcome to our store! We provide high-quality products with the best prices.
        Our goal is to give customers a great shopping experience with fast delivery
        and excellent service.
      </p>
      </div>
    </div>
  )
}

export default About

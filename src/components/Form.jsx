import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Checkout Form
        </h2>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-4 font-semibold">
            ✅ Your order has been placed successfully! Thank you 🙏
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <textarea
            placeholder="Your Address"
            rows="4"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>

          <button onClick={()=>{
                setTimeout(() => {
                navigate("/");
                }, 2000);
          }}    
            type="submit"
            className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
          >
            Confirm Order
          </button>

        </form>
      </div>
    </div>
  );
}

export default Form;
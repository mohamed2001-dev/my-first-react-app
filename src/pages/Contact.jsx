import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 flex justify-center">
      
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col gap-6 text-gray-700">

          {/* Phone */}
          <div className="flex items-center gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+212 6 12 34 56 78</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <span className="text-2xl">📧</span>
            <div>
              <p className="font-semibold">Email</p>
              <p>support@mystore.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-semibold">Address</p>
              <p>Agadir, Morocco</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;
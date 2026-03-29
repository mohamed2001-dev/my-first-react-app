import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleProduct({ addToCart }) {
  const navigate = useNavigate()
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="p-6 flex justify-center">
  {singleProduct ? (
    <div className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">
        {singleProduct.title}
      </h1>

      {/* Image */}
      <div className="w-full h-64 flex justify-center mb-4">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{singleProduct.description}</p>

      {/* Price */}
      <p className="text-green-600 font-semibold text-2xl mb-6">
        ${singleProduct.price}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button onClick={()=>{
          navigate('/form')
        }
        }
        className="flex-1 bg-green-600 text-white py-3 rounded-lg
         hover:bg-green-700 transition font-semibold cursor-pointer shadow-md">
          Shop Now
        </button>

        <button onClick={() => addToCart(singleProduct)}
        className="flex-1 bg-blue-500 text-white py-3 rounded-lg
        hover:bg-blue-600 transition cursor-pointer font-semibold shadow-md">
          Add to Cart
        </button>
      </div>

    </div>
  ) : (
    <p className="text-center text-gray-500 text-lg">Loading...</p>
  )}
</div>
  );
}

export default SingleProduct;
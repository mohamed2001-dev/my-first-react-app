import React, { useEffect, useState } from 'react'
import { useGetData } from '../contexts/DataContext'
import { useNavigate } from 'react-router-dom'


function Products() {
  const {fetchAllProducts , data} = useGetData()
  const [productName , setProductName ] = useState("")

  const navigate = useNavigate()
  const handelChange = (event)=>{
    setProductName(event.target.value)
    // console.log(productName)
  }
  const filteredData = data.filter((product) =>
  product.title.toLowerCase().includes(productName.toLowerCase()))

  useEffect(()=>{
    fetchAllProducts()
  }, [])
  return (
    <div>
      <div className="p-6">
  <div className="relative w-full max-w-md">
    
    {/* Icon */}
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      🔍
    </span>

    {/* Input */}
    <input
      type="text"
      value={productName}
      onChange={handelChange}
      placeholder="Search products..."
      className="w-full flex pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>

</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredData.length > 0 ? (
  filteredData.map((product) => {
    return (
      <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
        
        <div className="w-full h-48 overflow-hidden cursor-pointer">
          <img onClick={()=>{navigate(`/products/${product.id}`)}}
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-sm font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h1>

          {product.price && (
            <p className="text-2xl text-green-600 font-semibold">
              ${product.price}
            </p>
          )}
        </div>

      </div>
    );
  })
) : (
  <div className="col-span-full text-center py-20">
    <p className="text-gray-500 text-lg">
      No products found 
    </p>
  </div>
)}
</div>
</div>
  )
}

export default Products

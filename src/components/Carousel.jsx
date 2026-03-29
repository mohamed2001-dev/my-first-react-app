import React, { useEffect, useRef } from 'react'
import { useGetData } from '../contexts/DataContext'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
function Carousel() {
    const {fetchAllProducts , data} = useGetData()
    const swiperRef = useRef(null);
    // console.log(data)
    //swiper 
 
    
    useEffect(()=>{
        fetchAllProducts()
    },[])
  return (
     <div className="w-full flex flex-col justify-center items-center bg-gray-100">
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={0}
        className="w-full h-auto mt-10"
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>
  <div className="w-full h-full flex flex-row items-center justify-between px-16">

    {/* LEFT SIDE (TEXT) */}
    <div className="flex flex-col gap-6 max-w-xl">

      <h1 className="text-3xl font-bold">
        {ele.title}
      </h1>

      <p className="text-gray-600">
        {ele.description}
      </p>

      <p className="text-2xl text-green-600 font-semibold">
        ${ele.price}
      </p>

      <button className="
          px-5 py-2.5 
          bg-white text-gray-700 
          font-medium text-sm
          rounded-full
          border border-gray-200
          shadow-sm
          
          hover:bg-blue-500 hover:text-white
          hover:border-blue-500
          hover:shadow-lg
          hover:-translate-y-1
          
          transition-all duration-300 ease-in-out
        ">
        Shop Now
      </button>

      {/* Buttons */}
      <div className="flex gap-3 mt-4 justify-center">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="bg-black text-white p-3 rounded-full cursor-pointer"
        >
          ←
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="bg-black text-white p-3 rounded-full cursor-pointer"
        >
          →
        </button>
      </div>

    </div>

    {/* RIGHT SIDE (IMAGE) */}
    <div className="flex justify-center items-center w-1/2">
      <img
        src={ele.image}
        alt={ele.title}
        className="w-80 h-auto object-contain"
      />
    </div>

  </div>
</SwiperSlide>
        ))}
    </Swiper>
    </div>
)
}

export default Carousel

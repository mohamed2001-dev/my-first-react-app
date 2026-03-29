import React from 'react'
import Carousel from '../components/Carousel'
import Categori from '../components/Categori'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features';
import newArrival from "../assets/CSMAWJK9936_1_5e07e6be-bddd-41f4-9412-4da55210f943.webp";
import summerImg  from "../assets/4_walking_1200x1200_614c1935-3d49-4a0c-b7a6-6eaea10d5b39.webp";


function Home() {
  return (
    <div>   
      
      <MidBanner
        title="Summer Collection"
        subtitle="Discover the best deals for your favorite products"
        buttonText="Explore"
        image={summerImg}
        onClick={() => console.log("Shop Now clicked")}
      />

      <MidBanner
        title="New Arrivals"
        subtitle="Check out the latest products in our store"
        buttonText="Explore"
        image={newArrival}
        reverse
      />
      <Features/>
    </div>
  )
}

export default Home

import React, { useEffect} from 'react'
import { useGetData } from '../contexts/DataContext'

function Categori() {
    const {fetchAllProducts , data} = useGetData()
    const getUniqueCategory = (data,property)=>{
        let newVal = data.map((ele)=>{
            return ele[property]
        })
        newVal = [...new Set(newVal)]
        return newVal
    }
    const categoryOnlyData = getUniqueCategory(data,"category")
    console.log(categoryOnlyData)
    useEffect(()=>{
        fetchAllProducts()
    }, [])
  return (
    <div className="w-full bg-gradient from-gray-100 to-gray-200 py-6 px-4 flex flex-wrap justify-center gap-4">

  {categoryOnlyData.map((ele, index) => {
    return (
      <button
        key={index}
        className="
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
        "
      >
        {ele}
      </button>
    );
  })}
      
</div>
  )
}

export default Categori

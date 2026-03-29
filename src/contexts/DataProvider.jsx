import {useState } from "react";
import axios from "axios";
import { DataContext } from "./DataContext";



export const DataProvider = ({children}) => {
    const [data , setData] = useState([])
    // fetching all products from api
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data)
            const productsData = res.data
            setData(productsData)
        } catch (error) {
            console.log(error)
        }
    }

    return <DataContext.Provider value = {{data , setData,fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}


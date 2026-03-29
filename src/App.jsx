import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SingleProduct from "./pages/SingleProduct" 
import Form from "./components/Form"



function App() {

  return (
    <BrowserRouter>
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/products/:id" element={<SingleProduct/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App

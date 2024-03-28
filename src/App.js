import React from "react";
import "../src/css/bootstrap.min.css"
import "../src/css/style.css"
import "../src/css/tiny-slider.css"
import "../src/css/custom.css"
import HeaderCom from "./Component/HeaderCom";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Shop from "./Component/Shop";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout";
import Thankyou from "./Component/Thankyou";
// import TestimonialSlider from "./Component/Testimonial";


function App(){
    return(
      <>
      <div>
      <HeaderCom/>
      {/* <TestimonialSlider/> */}
      {/* <Index/> */}
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>



        
      </Routes> 
      </div>

      </>
    )
}

export default App;
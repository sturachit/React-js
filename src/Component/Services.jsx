import React from 'react'
import couch from "../images/couch.png"
import product1 from "../images/product-1.png"
import product2 from "../images/product-2.png"
import product3 from "../images/product-3.png"
import support from "../images/support.svg"
import bag from "../images/bag.svg"
import truck from "../images/truck.svg"
import Return from "../images/return.svg"
import person1 from "../images/person-1.png"
import sofa from "../images/sofa.png"
import outline from "../images/envelope-outline.svg"
import cross from "../images/cross.svg"
import Testimonials from './Testimonials'
import Footer from './Footer'


export default function Services() {
  return (
    <>
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Services</h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <a href="" className="btn btn-secondary me-2">
                Shop Now
              </a>
              <a href="#" className="btn btn-white-outline">
                Explore
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            <img src={couch} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  {/* Start Why Choose Us Section */}
  <div className="why-choose-section">
    <div className="container">
      <div className="row my-5">
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={truck} alt="Image" className="imf-fluid" />
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={bag} alt="Image" className="imf-fluid" />
            </div>
            <h3>Easy to Shop</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={support} alt="Image" className="imf-fluid" />
            </div>
            <h3>24/7 Support</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={Return} alt="Image" className="imf-fluid" />
            </div>
            <h3>Hassle Free Returns</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={truck} alt="Image" className="imf-fluid" />
            </div>
            <h3>Fast &amp; Free Shipping</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={bag} alt="Image" className="imf-fluid" />
            </div>
            <h3>Easy to Shop</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={support} alt="Image" className="imf-fluid" />
            </div>
            <h3>24/7 Support</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3 mb-4">
          <div className="feature">
            <div className="icon">
              <img src={Return} alt="Image" className="imf-fluid" />
            </div>
            <h3>Hassle Free Returns</h3>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Why Choose Us Section */}
  {/* Start Product Section */}
  <div className="product-section pt-0">
    <div className="container">
      <div className="row">
        {/* Start Column 1 */}
        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 className="mb-4 section-title">
            Crafted with excellent material.
          </h2>
          <p className="mb-4">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
          </p>
          <p>
            <a href="#" className="btn">
              Explore
            </a>
          </p>
        </div>
        {/* End Column 1 */}
        {/* Start Column 2 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img
              src={product1}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Nordic Chair</h3>
            <strong className="product-price">$50.00</strong>
            <span className="icon-cross">
              <img src={cross} className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 2 */}
        {/* Start Column 3 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img
              src={product2}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Kruzo Aero Chair</h3>
            <strong className="product-price">$78.00</strong>
            <span className="icon-cross">
              <img src={cross}  className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 3 */}
        {/* Start Column 4 */}
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
          <a className="product-item" href="#">
            <img
              src={product3}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">Ergonomic Chair</h3>
            <strong className="product-price">$43.00</strong>
            <span className="icon-cross">
              <img src={cross}  className="img-fluid" />
            </span>
          </a>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  </div>
  {/* End Product Section */}
  {/* Start Testimonial Slider */}
    <Testimonials/>
  {/* End Testimonial Slider */}
  {/* Start Footer Section */}
    <Footer/>
  {/* End Footer Section */}
</>

  )
}

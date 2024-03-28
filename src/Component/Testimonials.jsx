import React, { useEffect, useRef } from 'react';
import person_1 from '../images/person-1.jpg';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

export default function Testimonials() {
     const sliderRef = useRef(null);

     useEffect(() => {
          const slider = $(sliderRef.current);

          if (slider) {
               slider.slick({
                    dots: true,
                    arrows: true,
               });
          }

          // Ensure to destroy the slick slider when the component unmounts
          return () => {
               if (slider) {
                    slider.slick('unslick');
               }
          };
     }, []);


     return (
          <div>
               <div className="testimonial-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-7 mx-auto text-center">
                                   <h2 className="section-title">Testimonials</h2>
                              </div>
                         </div>
                         <div className="row justify-content-center">
                              <div className="col-lg-12">
                                   <div className="testimonial-slider-wrap text-center">
                                        <div className="testimonial-slider" ref={sliderRef}>
                                             <div className="item">
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-8 mx-auto">
                                                            <div className="testimonial-block text-center">
                                                                 <blockquote className="mb-5">
                                                                      <p>
                                                                           “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                                           vitae odio quis nisl dapibus malesuada. Nullam ac
                                                                           aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                                           tempor tristique. Pellentesque habitant morbi tristique
                                                                           senectus et netus et malesuada fames ac turpis egestas.
                                                                           Integer convallis volutpat dui quis scelerisque.”
                                                                      </p>
                                                                 </blockquote>
                                                                 <div className="author-info ">
                                                                      <div className="author-pic">
                                                                           <img src={person_1} alt="Maria Jones" className="img-fluid w-auto m-auto" />
                                                                      </div>
                                                                      <h3 className="font-weight-bold">Maria Jones</h3>
                                                                      <span className="position d-block mb-3">
                                                                           CEO, Co-Founder, XYZ Inc.
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="item">
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-8 mx-auto">
                                                            <div className="testimonial-block text-center">
                                                                 <blockquote className="mb-5">
                                                                      <p>
                                                                           “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                                           vitae odio quis nisl dapibus malesuada. Nullam ac
                                                                           aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                                           tempor tristique. Pellentesque habitant morbi tristique
                                                                           senectus et netus et malesuada fames ac turpis egestas.
                                                                           Integer convallis volutpat dui quis scelerisque.”
                                                                      </p>
                                                                 </blockquote>
                                                                 <div className="author-info">
                                                                      <div className="author-pic">
                                                                           <img src={person_1} alt="Maria Jones" className="img-fluid w-auto m-auto" />
                                                                      </div>
                                                                      <h3 className="font-weight-bold">Maria Jones</h3>
                                                                      <span className="position d-block mb-3">
                                                                           CEO, Co-Founder, XYZ Inc.
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="item">
                                                  <div className="row justify-content-center">
                                                       <div className="col-lg-8 mx-auto">
                                                            <div className="testimonial-block text-center">
                                                                 <blockquote className="mb-5">
                                                                      <p>
                                                                           “Donec facilisis quam ut purus rutrum lobortis. Donec
                                                                           vitae odio quis nisl dapibus malesuada. Nullam ac
                                                                           aliquet velit. Aliquam vulputate velit imperdiet dolor
                                                                           tempor tristique. Pellentesque habitant morbi tristique
                                                                           senectus et netus et malesuada fames ac turpis egestas.
                                                                           Integer convallis volutpat dui quis scelerisque.”
                                                                      </p>
                                                                 </blockquote>
                                                                 <div className="author-info">
                                                                      <div className="author-pic">
                                                                           <img src={person_1} alt="Maria Jones" className="img-fluid w-auto m-auto" />
                                                                      </div>
                                                                      <h3 className="font-weight-bold">Maria Jones</h3>
                                                                      <span className="position d-block mb-3">
                                                                           CEO, Co-Founder, XYZ Inc.
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
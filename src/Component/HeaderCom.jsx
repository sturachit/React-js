import React,{useState} from 'react'
import '../css/bootstrap.min.css'
import '../css/tiny-slider.css'
import '../css/style.css'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
// import couch from '../images/couch.png'
import { Link } from 'react-router-dom'


export default function NavBar() {
     const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

     return (
          // <div>
               <nav
                    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
                    arial-label="Furni navigation bar"
               >
                    <div className="container">
                         <Link className="navbar-brand" to="/" onClick={closeNav}>
                              Furni<span>.</span>
                         </Link>
                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarsFurni"
                              aria-controls="navbarsFurni"
                              aria-expanded={isNavOpen}
                              aria-label="Toggle navigation"
                              onClick={toggleNav}
                         >
                              <span className="navbar-toggler-icon" />
                         </button>
                         <div className={`collapse navbar-collapse ${isNavOpen ? 'show': ''}`} id="navbarsFurni">
                              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                                   <li className="nav-item ">
                                        <Link className="nav-link " to="/" onClick={closeNav}>
                                             Home
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="shop" onClick={closeNav}>
                                             Shop
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/about" onClick={closeNav}>
                                             About us
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/services" onClick={closeNav}>
                                             Services
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/blog" onClick={closeNav}>
                                             Blog
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/contact" onClick={closeNav}>
                                             Contact us
                                        </Link>
                                   </li>
                              </ul>
                              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                                   <li>
                                        <Link className="nav-link" >
                                             <img src={user} />
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/cart" onClick={closeNav}>
                                             <img src={cart} />
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>

               
     )
}
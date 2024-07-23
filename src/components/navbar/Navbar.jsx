import React from 'react'
import "./Navbar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  return (
    <div className='nav'>
      <div className='nav-logo'>FoSt.</div>
      <ul className='nav-menu'>
         <li><NavLink to="/" className="home">Home</NavLink></li>
         <li><NavLink to="/contact" className="contact">Contact Us</NavLink></li>
         <li><NavLink to="/login" className="login">Login</NavLink></li>
         <li><NavLink to="/register" className="register">Register</NavLink></li>
         <li className='nav-cart'>Cart</li>
      </ul>
    </div>
  )
}

export default Navbar

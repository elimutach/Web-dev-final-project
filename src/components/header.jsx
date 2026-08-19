import { Link } from "react-router-dom";
import './Header.css';
import ryantech from '../assets/ryantech_logo.png';
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (

      <header className="header">
        <div className="logo">
          <img style={{
            width:"100px",
            height:"100px"
          }} src={ryantech} alt="image here" />
        </div>
        <nav className="navbar">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">Why Us</Link>

           <div style={{position:"relative", cursor: "pointer"}}
           onMouseEnter={() => setIsOpen(true)}
           onMouseLeave={() => setIsOpen(false)}
           >
          <div className="package-menu">
            <span className="link" style={{transition: "0.4s"}}>Website Packages <span className="dropdown-symbol">▼</span></span>
          
          {isOpen &&(
          <div className="dropdown">
            <Link className="link2" to="/bizna">Bizna Starter</Link>
            <Link className="link2" to="/standardbiz">Standard Biz</Link>
            <Link className="link2" to="/corporatebiz">Corporate</Link>
            <Link className="link2" to="/ecommerce">E-Commerce</Link>
            <Link className="link2" to="/design">Design & Branding</Link>
          </div>
          )}
          </div>
          
          </div>
          <Link className="link" to="/corporate">Corporate Training</Link>
          <Link className="link" to="/contact">Contact</Link>
        </nav>
        <div className="tucode-btn">
          <a 
            href="https://tucodeacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="tucode">Tu-code Academy</button>
          </a>
        </div>
      </header>
  )
};
export default Header
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/download.png"


function Navbar() {

  return (
   <div className="mx-20 mt-4">
     <nav className="flex justify-between items-center">
        <div className="w-14">
            <img src={logo} alt="logo"/>
        </div>
       <div>
       <ul className="flex justify-center text-xxl text-slate-400 gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
      <ul className="flex gap-3">
       
      <li><Link to="/login">login</Link></li>
      <li><Link to="/signup">signup</Link></li>
      </ul>
    </nav>
   </div>
  );
}
export default Navbar;

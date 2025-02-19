import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./About";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Singup from "./pages/singup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/signup" element={<Singup/>}/>
    </Routes>
  );
};

export default AppRoutes;

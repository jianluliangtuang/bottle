import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import AppRoutes from "./Route";


function App() {
  return (
   <div>
     <Router>
      <Navbar />
     <AppRoutes/>
     
    </Router>
   </div>
  );
}

export default App;

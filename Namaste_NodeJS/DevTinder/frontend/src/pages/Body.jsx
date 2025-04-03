import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Body = () => {
  return (
    <div className="h-screen bg-base-300 flex flex-col justify-between">
     <Navbar/>
     <Outlet/>
     <Footer />
    </div>
  );
};

export default Body;

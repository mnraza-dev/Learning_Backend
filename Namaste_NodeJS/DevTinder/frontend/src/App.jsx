import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;

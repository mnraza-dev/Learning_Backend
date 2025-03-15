import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup" element={<Login />} />
      {/* <Route path="*" element={<Login />} /> */}
    </Routes>
  );
};

export default App;

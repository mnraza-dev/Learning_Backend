import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

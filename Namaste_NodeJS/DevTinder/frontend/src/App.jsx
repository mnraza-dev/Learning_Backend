import React from "react";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

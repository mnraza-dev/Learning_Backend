import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (error) {
      navigate("/login");

      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="h-screen bg-base-300 flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;

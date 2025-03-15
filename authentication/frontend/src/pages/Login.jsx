import { useContext, useState } from "react";

import axios from "axios";
import { dataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { serverURL } = useContext(dataContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${serverURL}/api/signup`, formData, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        alert("success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-98 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

  
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account ?
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

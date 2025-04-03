import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      }, {
        withCredentials: true,
      });
      setError(null);

    } catch (error) {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="  flex flex-col items-center justify-center h-screen bg-base-100">
      <div className="bg-base-200 shadow-lg rounded-lg p-10 mt-2 w-96">
        <h1 className="text-3xl font-semibold text-center mt-2">Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input"
            placeholder="Type Email here"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input"
            required
            placeholder="Type Password here"
          />
        </fieldset>
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-full mt-4 rounded-md"
        >
          Login
        </button>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm text-gray-400">Don't have an account?</p>
          <a href="/register" className=" btn btn-link">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

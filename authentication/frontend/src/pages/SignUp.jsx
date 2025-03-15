import { useContext, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { dataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { serverURL } = useContext(dataContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    image: null,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const imageInputRef = useRef(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${serverURL}/api/signup`, formData, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 200) {
        navigate("/login");
        alert("success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {

    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded-lg shadow-md w-98 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <div className="flex items-center justify-center relative">
          <label htmlFor="image-upload" className="relative cursor-pointer">
            <img
              src={
                formData.image ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="w-30 h-30 rounded-full object-cover border border-gray-300 hover:opacity-75 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <FaPlus className="text-white bg-black/50 p-1 rounded-full w-8 h-8" />
            </div>
          </label>
          <input
            type="file"
            id="image-upload"
            ref={imageInputRef}
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
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
          Sign Up
        </button>
        <p className="text-center">
          Already have an account ?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignUp;

import React from "react";

const Register = () => {
  return (
    <div className="  flex flex-col items-center justify-center h-screen bg-base-100">
      <div className="bg-base-200 shadow-lg rounded-lg p-10 mt-2 w-96">
        <h1 className="text-3xl font-semibold text-center mt-2">Register</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">First Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type First Name here"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Last Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type Last Name here"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="email" className="input" placeholder="Type Email here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input"
            required
            placeholder="Type Password here"
          />
        </fieldset>
        <button className="btn btn-primary w-full mt-4 rounded-md">
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

export default Register;

import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-screen flex  flex-col justify-center items-center bg-base-200">
        <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
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
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </fieldset>
      </div>
    </>
  );
};

export default Login;

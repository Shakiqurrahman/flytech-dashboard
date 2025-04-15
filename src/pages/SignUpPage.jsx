import React, { useState } from "react";
import { Link } from "react-router";
import flytechLogo from "../assets/images/flytechBlack.png";

const SignUpPage = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img src={flytechLogo} alt="" className="w-25 object-contain mx-auto" />
      <h1 className="text-center text-2xl font-semibold mt-5">Sign Up</h1>
      <p className="text-gray-500 text-center text-sm pt-2">
        Welcome! Please enter your details.
      </p>

      <form
        className="flex flex-col space-y-2 mx-auto pt-6 px-4 max-w-[400px] w-full"
        onSubmit={handleSubmit}
      >
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="outline-0 border border-gray-500 py-1 px-2 rounded-sm w-full"
          value={formValue.name}
          name="name"
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="outline-0 border border-gray-500 py-1 px-2 rounded-sm w-full"
          value={formValue.username}
          name="username"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="outline-0 border border-gray-500 py-1 px-2 rounded-sm w-full"
          value={formValue.email}
          name="email"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="outline-0 border border-gray-500 py-1 px-2 rounded-sm w-full"
          value={formValue.password}
          name="password"
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="outline-0 border border-gray-500 py-1 px-2 rounded-sm w-full"
          value={formValue.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-[#282828] text-white hover:bg-primary duration-300 cursor-pointer py-2 rounded-md mt-2"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center pt-5">
        Alreay have an account?{" "}
        <Link
          to="/login"
          className="hover:text-primary duration-300 font-semibold"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import flytechLogo from "../assets/images/flytechBlack.png";
import { useLoginMutation } from "../Redux/features/auth/authApi";
import { setToken } from "../Redux/features/auth/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChecked = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formValue).unwrap();
      navigate("/");
      dispatch(setToken(response?.data?.accessToken));
      console.log("🚀 ~ handleSubmit ~ response:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <img src={flytechLogo} alt="" className="w-25 object-contain mx-auto" />
      <h1 className="text-center text-2xl font-semibold mt-5">
        Log in to your account
      </h1>
      <p className="text-gray-500 text-center text-sm pt-2">
        Welcome back! Please enter your details.
      </p>

      <form
        className="flex flex-col space-y-2 mx-auto pt-6 px-4 max-w-[400px] w-full"
        onSubmit={handleSubmit}
      >
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

        <div className="flex justify-between pt-2">
          <div className="flex gap-1 items-center">
            <input
              type="checkbox"
              className="size-4 cursor-pointer"
              name="rememberMe"
              checked={formValue.rememberMe}
              onChange={handleChecked}
            />
            <span>Remember Me</span>
          </div>
          <Link
            to={"#"}
            className="hover:underline hover:text-primary duration-300"
          >
            Forget Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#282828] text-white hover:bg-primary duration-300 cursor-pointer py-2 rounded-md mt-2  disabled:opacity-60"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <p className="text-center pt-5">
        Didn't have an account?{" "}
        <Link
          to="/sign-up"
          className="hover:text-primary duration-300 font-semibold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

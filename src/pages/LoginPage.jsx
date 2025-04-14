import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        userNameOrPhone: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="flex h-screen justify-center items-center bg-[#282828] px-4">
            <div className="text-white p-6  w-full max-w-[400px] rounded-md bg-[#171720]">
                <h1 className="text-4xl px-4">Login</h1>
                <form
                    className="flex flex-col space-y-4 w-full pt-8"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Phone Number or Email"
                            value={formData.userNameOrPhone}
                            name="userNameOrPhone"
                            onChange={handleChange}
                            className="w-full shrink-0 py-2 px-4 outline-0 border border-gray-600 bg-[#282828] rounded-md"
                        />
                        <span className="flex gap-1 text-xs items-center text-primary py-1">
                            <CiCircleInfo /> Username or email id must be
                            required
                        </span>
                    </div>
                    <div>
                        <input
                            type="Password"
                            placeholder="Enter Password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            className="w-full shrink-0 py-2 px-4 outline-0 border border-gray-600 bg-[#282828] rounded-md"
                        />
                        <span className="flex gap-1 text-xs items-center text-primary py-1">
                            <CiCircleInfo /> Password didn't match!
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="bg-primary py-2 rounded-md cursor-pointer"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

// 282828 bg
// 171720

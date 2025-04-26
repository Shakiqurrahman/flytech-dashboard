import React, { useState } from "react";
import DragnDrop from "../../lib/DragnDrop";
import { useLocation, useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";

const ReviewEdit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [data, setData] = useState(
        state || {
            name: "",
            title: "",
            desck: "",
            img: "",
        }
    );

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setData);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Review</h1>
                </div>
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <input
                        value={data.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <textarea
                        value={data.desck}
                        name="desck"
                        onChange={handleChange}
                        placeholder="Enter Description..."
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    ></textarea>
                </div>
                <DragnDrop />

                <div className="mt-5 flex gap-2 justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="py-2 px-4 hover:bg-black bg-[#ebebeb] hover:text-white duration-300 cursor-pointer rounded-lg text-black "
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 hover:bg-primary text-white duration-300 cursor-pointer rounded-lg border bg-black"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewEdit;

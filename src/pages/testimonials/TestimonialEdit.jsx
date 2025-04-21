import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";

const TestimonialEdit = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        desc: "",
        thumbnail: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Testimonial</h1>
                </div>
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <input
                        value={form.title}
                        name="title"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Title"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <textarea
                        value={form.desc}
                        name="desc"
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

export default TestimonialEdit;

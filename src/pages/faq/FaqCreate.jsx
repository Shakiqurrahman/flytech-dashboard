import React, { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const FaqCreate = () => {
    const [faqs, setfaqs] = useState([{ question: "", answer: "" }]);
    const navigate = useNavigate();

    const addItem = () => {
        setfaqs((prev) => [...prev, { question: "", answer: "" }]);
        console.log(faqs);
    };

    const deleteItem = (idx) => {
        setfaqs((prev) => prev.filter((_, i) => i !== idx));
    };

    const handleChange = (e, idx) => {
        setfaqs((prev) =>
            prev.map((v, i) =>
                i === idx ? { ...v, [e.target.name]: e.target.value } : v
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(faqs);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Create Faqs</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={addItem}
                        className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300"
                    >
                        <FaPlus /> Add
                    </button>
                </div>
            </div>

            <form className="pt-8 space-y-3" onSubmit={handleSubmit}>
                {faqs.map((v, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-2 px-5 bg-white p-4 rounded-lg"
                    >
                        <div className="flex gap-2">
                            <input
                                type="text"
                                name="question"
                                value={v.question}
                                onChange={(e) => handleChange(e, i)}
                                placeholder="Write Question"
                                className="border border-gray-300 outline-0 p-2 rounded-lg px-4 w-full"
                            />
                            <button
                                type="button"
                                onClick={() => deleteItem(i)}
                                className="hover:bg-primary hover:text-white text-black py-2 px-6 shrink-0 rounded-lg cursor-pointer  border border-gray-300 duration-300"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                        <textarea
                            type="text"
                            name="answer"
                            value={v.answer}
                            onChange={(e) => handleChange(e, i)}
                            placeholder="Write Answer..."
                            className="border border-gray-300 outline-0 min-h-[150px] p-4 rounded-lg resize-none"
                        />
                    </div>
                ))}

                <div className="mt-10 flex gap-2 justify-between">
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
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FaqCreate;

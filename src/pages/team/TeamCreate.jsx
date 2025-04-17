import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";

const TeamCreate = () => {
    const navigate = useNavigate();

    const [teamData, setTeamData] = useState({
        name: "",
        title: "",
        desc: "",
        img: "",
    });

    const handleChange = (e) => {
        setTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(teamData);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Create Team Member
                    </h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300">
                        <FaPlus /> Add
                    </button>
                </div>
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <input
                        value={teamData.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <input
                        value={teamData.title}
                        name="title"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Title"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <textarea
                        value={teamData.desc}
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
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamCreate;

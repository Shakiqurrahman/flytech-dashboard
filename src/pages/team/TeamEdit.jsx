import React, { useState } from "react";
import DragnDrop from "../../lib/DragnDrop";
import { useNavigate } from "react-router";

const TeamEdit = () => {
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
            <h1 className="text-2xl font-medium">Edit Team Member</h1>

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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamEdit;

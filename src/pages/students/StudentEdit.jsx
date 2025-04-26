import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";

const StudentEdit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [teamData, setTeamData] = useState(
        state || {
            name: "",
            courseName: "",
            batchNo: "",
            img: "",
            status: "Running",
        }
    );

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
                    <h1 className="text-2xl font-semibold">Edit A Student</h1>
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
                        value={teamData.courseName}
                        name="courseName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Course Name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <div className="flex gap-4">
                        <input
                            value={teamData.batchNo}
                            name="batchNo"
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Batch No"
                            className="px-4 py-2 rounded-lg outline-0 border border-gray-300 w-full"
                        />
                        <select
                            name="status"
                            value={teamData.status}
                            onChange={handleChange}
                            className="px-4 py-2 rounded-lg outline-0 border border-gray-300 w-full"
                        >
                            <option value="Running">Running</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
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

export default StudentEdit;

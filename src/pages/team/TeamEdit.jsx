import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import { useUpdateTeamMemterMutation } from "../../Redux/features/team/teamApi";

const TeamEdit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [preview, setPreview] = useState(null);

    const [teamData, setTeamData] = useState({
        name: state.name,
        title: state.title,
        description: state.description,
        avatar: state.avatar,
    });

    const [avatar, setAvatar] = useState(null);

    const [updateTeamMemter, { isLoading }] = useUpdateTeamMemterMutation();

    const handleChange = (e) => {
        setTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            name: teamData.name,
            title: teamData.title,
            description: teamData.description,
            removeAvatar:
                avatar instanceof File
                    ? !preview || !preview?.file
                        ? true
                        : false
                    : !preview
                    ? true
                    : false,
            // avatarFile: avatar instanceof File ? avatar : null,
        };

        console.log("Preview file: ", preview, typeof preview);

        try {
            await updateTeamMemter({
                memberData,
                avatarFile: preview ? avatar : null,
                id: state.id,
            });

            navigate("/team");
            toast.success("Team Member updated Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Team Member</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300">
                        <FaPlus /> Add
                    </button>
                </div>
            </div>

            <div className="mt-5">
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
                        value={teamData.description}
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter Description..."
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    ></textarea>
                </div>
                <DragnDrop
                    initialAvatar={teamData?.avatar}
                    setAvatar={setAvatar}
                    setPreview={setPreview}
                    preview={preview}
                />

                <div className="mt-5 flex gap-2 justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="py-2 px-4 hover:bg-black bg-[#ebebeb] hover:text-white duration-300 cursor-pointer rounded-lg text-black "
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="py-2 px-4 hover:bg-primary text-white duration-300 cursor-pointer rounded-lg border bg-black disabled:bg-orange-300"
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamEdit;

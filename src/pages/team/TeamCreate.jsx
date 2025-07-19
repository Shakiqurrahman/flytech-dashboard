import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import { useCreateTeamMemberMutation } from "../../Redux/features/team/teamApi";

const TeamCreate = () => {
    const navigate = useNavigate();

    const [teamData, setTeamData] = useState({
        name: "",
        title: "",
        desc: "",
        img: "",
    });

    const [avatar, setAvatar] = useState(null);
    console.log(avatar);

    const [createTeamMember, { isLoading }] = useCreateTeamMemberMutation();

    const handleChange = (e) => {
        setTeamData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            name: teamData.name,
            title: teamData.title,
            description: teamData.desc,
        };

        try {
            await createTeamMember({
                memberData,
                avatarFile: avatar,
            });

            navigate("/team");
            toast.success("Team Member created Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Create Team Member
                    </h1>
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
                <DragnDrop setAvatar={setAvatar} />

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
                        className="py-2 px-4 hover:bg-primary disabled:bg-orange-300 text-white duration-300 cursor-pointer rounded-lg border bg-black"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating..." : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamCreate;

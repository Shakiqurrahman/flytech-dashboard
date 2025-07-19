import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router";
import {
    useDeleteTeamMemberMutation,
    useGetTeamMembersQuery,
} from "../../Redux/features/team/teamApi";

const TeamPage = () => {
    const { data, isLoading } = useGetTeamMembersQuery();
    const [deleteTeamMember, { isLoading: isDeleting }] =
        useDeleteTeamMemberMutation();
    console.log(data);

    const handleDelete = async (id) => {
        await deleteTeamMember(id);
        toast.success("Team Member deleted Successfully!");
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Team</h1>
                    <p className="text-sm">
                        Display all the team members list.
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Link
                        to="create"
                        className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300"
                    >
                        <FaPlus /> Add
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-10">
                {isLoading ? (
                    <p className="text-stone-500 col-span-4 text-center mt-10">
                        Loading...
                    </p>
                ) : (
                    data?.map((v, i) => (
                        <div
                            className="flex items-center flex-col text-center bg-white rounded-md px-2 py-4 border border-primary cursor-pointer relative  overflow-hidden group"
                            key={i}
                        >
                            <div className="absolute right-[12px] top-[12px] flex flex-col gap-2 translate-x-[150%] group-hover:translate-x-0 duration-300">
                                <Link
                                    to="edit"
                                    className="hover:bg-primary border border-primary hover:text-white p-2 rounded-lg"
                                >
                                    <FiEdit3 className="size-4" />
                                </Link>
                                <button
                                    className="hover:bg-primary border border-primary hover:text-white p-2 rounded-lg cursor-pointer"
                                    onClick={() => handleDelete(v.id)}
                                >
                                    {isDeleting ? (
                                        <AiOutlineLoading3Quarters className="size-4 animate-spin duration-300 text-red-500 hover:text-white" />
                                    ) : (
                                        <GoTrash className="size-4" />
                                    )}
                                </button>
                            </div>
                            <img
                                src={v.avatar}
                                alt=""
                                className="size-40 object-contain rounded-full cursor-pointer"
                            />
                            <h3 className="text-xl font-semibold mt-4">
                                {v.name}
                            </h3>
                            <p className="font-medium text-primary">
                                {v.title}
                            </p>
                            <p
                                className="mt-1 text-xs text-gray-500 truncate whitespace-nowrap w-full overflow-hidden"
                                title={v.description}
                            >
                                {v.description}
                            </p>

                            <p
                                className={`mt-3 text-sm text-gray-500 ${
                                    v.status === "ACTIVE"
                                        ? "text-green-500 bg-green-100 py-2 px-4 rounded-lg"
                                        : "text-red-500 bg-red-100 py-2 px-4 rounded-lg"
                                }`}
                            >
                                {v.status.charAt(0).toUpperCase() +
                                    v.status.slice(1).toLowerCase()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeamPage;

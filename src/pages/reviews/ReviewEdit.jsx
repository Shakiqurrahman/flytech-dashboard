import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import { useUpdateReviewMutation } from "../../Redux/features/reviews/reviewApi";

const ReviewEdit = () => {
    const navigate = useNavigate();
    const [updateReview, { isLoading }] = useUpdateReviewMutation();

    const { state } = useLocation();
    const [preview, setPreview] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const [data, setData] = useState({
        name: state.name || "",
        description: state.description || "",
        avatar: state.thumbnail || "",
    });

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            name: data.name,
            description: data.description,
            removeAvatar:
                avatar instanceof File
                    ? !preview || !preview?.file
                        ? true
                        : false
                    : !preview
                    ? true
                    : false,
        };

        console.log("Preview file: ", preview, typeof preview);

        try {
            await updateReview({
                data: memberData,
                avatarFile: preview ? avatar : null,
                id: state.id,
            });

            navigate("/reviews");
            toast.success("Review updated Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Edit Review</h1>
                </div>
            </div>

            <div className="mt-5">
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
                        value={data.description}
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter Description..."
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    ></textarea>
                </div>
                <DragnDrop
                    initialAvatar={data?.avatar}
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
                        className="py-2 px-4 hover:bg-primary text-white duration-300 cursor-pointer rounded-lg border bg-black disabled:bg-orange-400 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewEdit;

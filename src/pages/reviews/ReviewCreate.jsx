import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import { useCreateReviewMutation } from "../../Redux/features/reviews/reviewApi";

const ReviewCreate = () => {
    const [createReview, { isLoading }] = useCreateReviewMutation();
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        description: "",
    });
    const [preview, setPreview] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            name: data.name,
            description: data.description,
        };

        try {
            await createReview({
                data: memberData,
                avatarFile: avatar,
            });

            navigate("/reviews");
            toast.success("Review created Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Create Review</h1>
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
                        value={data.description}
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter Description..."
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    ></textarea>
                </div>
                <DragnDrop
                    setAvatar={setAvatar}
                    preview={preview}
                    setPreview={setPreview}
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
                        type="submit"
                        className="py-2 px-4 hover:bg-primary text-white duration-300 cursor-pointer rounded-lg border bg-black disabled:bg-orange-400 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating..." : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReviewCreate;

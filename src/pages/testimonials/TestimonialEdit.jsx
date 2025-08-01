import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import { useUpdateTestimonialMutation } from "../../Redux/features/testimonials/testimonialApi";

const TestimonialEdit = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [updateTestimonial, { isLoading }] = useUpdateTestimonialMutation();

    const [preview, setPreview] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const [form, setForm] = useState({
        name: state.name || "",
        description: state.description || "",
        thumbnail: state.thumbnail || "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const memberData = {
            name: form.name,
            description: form.description,
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

        console.log(state.id);
        try {
            await updateTestimonial({
                data: memberData,
                avatarFile: preview ? avatar : null,
                id: state.id,
            });

            navigate("/testimonials");
            toast.success("Testimonial updated Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
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
                        value={form.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <textarea
                        value={form.description}
                        name="description"
                        onChange={handleChange}
                        placeholder="Enter Description..."
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    ></textarea>
                </div>
                <DragnDrop
                    setPreview={setPreview}
                    preview={preview}
                    initialAvatar={form?.thumbnail}
                    setAvatar={setAvatar}
                />

                <div className="mt-5 flex gap-2 justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="py-2 px-4 hover:bg-black bg-[#ebebeb] hover:text-white duration-300 cursor-pointer rounded-lg text-black"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 hover:bg-primary disabled:bg-orange-400 text-white duration-300 cursor-pointer rounded-lg border bg-black"
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestimonialEdit;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import DragnDrop from "../../lib/DragnDrop";
import {
    useCreateAboutContentMutation,
    useGetAboutContentQuery,
} from "../../Redux/features/about/aboutApi";

const AboutPage = () => {
    const { data: aboutData } = useGetAboutContentQuery();
    const [createAboutContent, { isLoading }] = useCreateAboutContentMutation();

    const [hasInitialized, setHasInitialized] = useState(false);
    const [missionPreview, setMissionPreview] = useState(null);
    const [missionAvatar, setMissionAvatar] = useState(null);
    const [visionPreview, setVisionPreview] = useState(null);
    const [visionAvatar, setVisionAvatar] = useState(null);

    const [aboutContent, setAboutContent] = useState({
        bio: "",
        mission: {
            title: "",
            description: "",
        },
        vision: {
            title: "",
            description: "",
            img: "",
        },
    });
    console.log(missionAvatar, visionAvatar);

    useEffect(() => {
        if (aboutData && !hasInitialized) {
            setAboutContent({
                bio: aboutData.bio || "",
                mission: {
                    title: aboutData.mission?.title || "",
                    description: aboutData.mission?.description || "",
                },
                vision: {
                    title: aboutData.vision?.title || "",
                    description: aboutData.vision?.description || "",
                },
            });
            setHasInitialized(true); // ✅ prevent future updates
        }
    }, [aboutData, hasInitialized]);

    const handleChange = (e, section = null) => {
        const { name, value } = e.target;
        if (!section) {
            setAboutContent((prev) => ({ ...prev, [name]: value }));
        } else {
            setAboutContent((prev) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [name]: value,
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (missionAvatar && visionAvatar) {
                await createAboutContent({
                    aboutData: aboutContent,
                    missionThumbnail: missionAvatar,
                    visionThumbnail: visionAvatar,
                });
            } else {
                toast.error("Upload Thumbnail!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium my-4">Main Heading</h1>

                <textarea
                    name="bio"
                    value={aboutContent.bio}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter text..."
                    className="w-full outline-0 border border-gray-300 p-2 px-4 rounded-lg min-h-[150px]"
                ></textarea>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-medium mb-5">Mission Section</h3>

                <div className="flex flex-col space-y-4">
                    <input
                        name="title"
                        onChange={(e) => handleChange(e, "mission")}
                        value={aboutContent.mission.title}
                        type="text"
                        placeholder="Enter title"
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg"
                    />
                    <textarea
                        name="description"
                        onChange={(e) => handleChange(e, "mission")}
                        value={aboutContent.mission.description}
                        placeholder="Enter description..."
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg min-h-[150px]"
                    ></textarea>
                </div>

                <DragnDrop
                    preview={missionPreview}
                    setPreview={setMissionPreview}
                    avatar={missionAvatar}
                    setAvatar={setMissionAvatar}
                    variant={"thumbnail"}
                    initialAvatar={aboutContent.mission.img}
                />
            </div>
            <div className="mt-8">
                <h3 className="text-2xl font-medium mb-5">Vision Section</h3>

                <div className="flex flex-col space-y-4">
                    <input
                        name="title"
                        type="text"
                        onChange={(e) => handleChange(e, "vision")}
                        value={aboutContent.vision.title}
                        placeholder="Enter title"
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg"
                    />
                    <textarea
                        name="description"
                        onChange={(e) => handleChange(e, "vision")}
                        value={aboutContent.vision.description}
                        placeholder="Enter description..."
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg min-h-[150px]"
                    ></textarea>
                </div>

                <DragnDrop
                    preview={visionPreview}
                    setPreview={setVisionPreview}
                    avatar={visionAvatar}
                    setAvatar={setVisionAvatar}
                    variant={"thumbnail"}
                    initialAvatar={aboutContent.vision.img}
                />
            </div>

            <div className="mt-5 flex gap-2 justify-between">
                <button
                    type="button"
                    className="py-2 px-4 hover:bg-black bg-[#ebebeb] hover:text-white duration-300 cursor-pointer rounded-lg text-black"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="py-2 px-4 hover:bg-primary disabled:bg-orange-400 text-white duration-300 cursor-pointer rounded-lg border bg-black"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading ? "Updating..." : "Update"}
                </button>
            </div>
        </div>
    );
};

export default AboutPage;

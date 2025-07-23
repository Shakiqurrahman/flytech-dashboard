import { useEffect, useState } from "react";
import DragnDrop from "../../lib/DragnDrop";
import { useGetAboutContentQuery } from "../../Redux/features/about/aboutApi";

const AboutPage = () => {
    const { data: aboutData } = useGetAboutContentQuery();
    console.log(aboutData);

    const [hasInitialized, setHasInitialized] = useState(false);
    const [missionPreview, setMissionPreview] = useState(null);
    const [visionPreview, setVisionPreview] = useState(null);

    const [aboutContent, setAboutContent] = useState({
        heading: "",
        mission: {
            title: "",
            desc: "",
            img: "",
        },
        vision: {
            title: "",
            desc: "",
            img: "",
        },
    });

    useEffect(() => {
        if (aboutData && !hasInitialized) {
            setAboutContent({
                heading: aboutData.bio || "",
                mission: {
                    title: aboutData.mission?.title || "",
                    desc: aboutData.mission?.description || "",
                    img: aboutData.mission?.thumbnail || "",
                },
                vision: {
                    title: aboutData.vision?.title || "",
                    desc: aboutData.vision?.description || "",
                    img: aboutData.vision?.thumbnail || "",
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

        console.log(value);
    };

    const handleSubmit = () => {
        console.log(aboutContent);
    };
    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium my-4">Main Heading</h1>

                <textarea
                    name="heading"
                    value={aboutContent.heading}
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
                        name="desc"
                        onChange={(e) => handleChange(e, "mission")}
                        value={aboutContent.mission.desc}
                        placeholder="Enter description..."
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg min-h-[150px]"
                    ></textarea>
                </div>

                <DragnDrop
                    preview={missionPreview}
                    setPreview={setMissionPreview}
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
                        name="desc"
                        onChange={(e) => handleChange(e, "vision")}
                        value={aboutContent.vision.desc}
                        placeholder="Enter description..."
                        className="px-4 py-2 outline-0 border border-gray-300 rounded-lg min-h-[150px]"
                    ></textarea>
                </div>

                <DragnDrop
                    preview={visionPreview}
                    setPreview={setVisionPreview}
                    variant={"thumbnail"}
                    initialAvatar={aboutContent.vision.img}
                />
            </div>

            <div className="mt-5 flex gap-2 justify-between">
                <button
                    type="button"
                    className="py-2 px-4 hover:bg-black bg-[#ebebeb] hover:text-white duration-300 cursor-pointer rounded-lg text-black "
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="py-2 px-4 hover:bg-primary text-white duration-300 cursor-pointer rounded-lg border bg-black"
                    onClick={handleSubmit}
                >
                    update
                </button>
            </div>
        </div>
    );
};

export default AboutPage;

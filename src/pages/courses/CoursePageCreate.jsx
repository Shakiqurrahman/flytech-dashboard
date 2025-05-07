import React, { useState } from "react";
import { useNavigate } from "react-router";
import DragnDrop from "../../lib/DragnDrop";
import YouWillGet from "../../components/courseComponent/YouWillGet";
import YouWillLearn from "../../components/courseComponent/YouWillLearn";
import Community from "../../components/courseComponent/Community";
import ForWhom from "../../components/courseComponent/ForWhom";

const CoursePageCreate = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        courseName: "",
        slug: "",
        description: "",
        courseFee: "",
        originalFee: "",
        isOffer: false,
        totalProjects: "",
        startDate: "",
        startTime: "",
        hoursOfLesson: "",
        totalLesson: "",
        duration: "",
        title: "",
        img: "",
        discount: "",
    });
    const [youWillGet, setYouWillGet] = useState([""]);
    const [youWillLearn, setYouWillLearn] = useState([""]);
    const [forWhom, setForWhom] = useState([""]);
    const [community, setCommunity] = useState([
        { title: "", linkTitle: "", link: "" },
        { title: "", linkTitle: "", link: "" },
    ]);

    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleChecked = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setData);
    };
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">
                        Create Course Details
                    </h1>
                </div>
            </div>

            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <input
                        value={data.courseName}
                        name="courseName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Course Name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <div>
                        <p className="text-gray-500">
                            Select Image for course icon
                        </p>
                        <DragnDrop className="pt-2" />
                    </div>
                    <input
                        value={data.slug}
                        name="slug"
                        onChange={handleChange}
                        type="text"
                        placeholder="Slug name"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <textarea
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        placeholder="Write Description..."
                        className="border border-gray-300 outline-0 min-h-[150px] p-4 rounded-lg resize-none"
                    />

                    <div>
                        <p className="text-gray-500">
                            Select Image for Thumbnail
                        </p>
                        <DragnDrop className="pt-2" />
                    </div>

                    <input
                        value={data.courseFee}
                        name="courseFee"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Course Fee"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <input
                        value={data.originalFee}
                        name="originalFee"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Original Fee"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <input
                        value={data.discount}
                        name="discount"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Discount Rate"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="size-4 cursor-pointer"
                            name="isOffer"
                            checked={data.isOffer}
                            onChange={handleChecked}
                        />
                        <span className="text-gray-500">Is Offer</span>
                    </div>

                    <input
                        value={data.totalProjects}
                        name="totalProjects"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Total Projects"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <div className="flex items-center gap-4">
                        <div className="w-1/2">
                            <p className="text-gray-500 mb-2">Start Date</p>
                            <input
                                className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer w-full"
                                type="date"
                                name="startDate"
                                value={data.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <p className="text-gray-500 mb-2">Start Time</p>
                            <input
                                type="time"
                                className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer w-full"
                                name="startTime"
                                value={data.startTime}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <YouWillGet
                        youWillGet={youWillGet}
                        setYouWillGet={setYouWillGet}
                    />
                    <input
                        value={data.hoursOfLesson}
                        name="hoursOfLesson"
                        onChange={handleChange}
                        type="text"
                        placeholder="Hours of lessons"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <input
                        value={data.totalLesson}
                        name="totalLesson"
                        onChange={handleChange}
                        type="text"
                        placeholder="Total lessons"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />
                    <input
                        value={data.duration}
                        name="duration"
                        onChange={handleChange}
                        type="text"
                        placeholder="Duration"
                        className="px-4 py-2 rounded-lg outline-0 border border-gray-300"
                    />

                    <YouWillLearn
                        youWillLearn={youWillLearn}
                        setYouWillLearn={setYouWillLearn}
                    />

                    <Community
                        community={community}
                        setCommunity={setCommunity}
                    />

                    <ForWhom forWhom={forWhom} setForWhom={setForWhom} />
                </div>

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

export default CoursePageCreate;

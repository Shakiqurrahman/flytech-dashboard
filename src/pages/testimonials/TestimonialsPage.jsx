import React, { useState } from "react";
import achievement from "../../assets/images/achivement.webp";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const TestimonialsPage = () => {
    const [data, setData] = useState([
        {
            id: 1,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
        {
            id: 2,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
        {
            id: 3,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
        {
            id: 4,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
        {
            id: 5,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
        {
            id: 6,
            thumbnail: achievement,
            title: "Flytech IT – CSE Industrial Training Achievement",
            desc: "At Flytech IT, our CSE Industrial Training program has successfully empowered hundreds of Computer Science students with hands-on industry experience. Over the course of our training sessions, participants have worked on real-world projects in web development, app development, ",
        },
    ]);
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Testimonial</h1>
                    <p className="text-sm">
                        Display all the testimonial cards list.
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
                {data.map((v, i) => (
                    <div
                        className="flex items-center flex-col bg-white rounded-md p-4 border border-primary cursor-pointer relative  overflow-hidden group"
                        key={i}
                    >
                        <div className="absolute right-[12px] top-[12px] flex flex-col gap-2 translate-x-[150%] group-hover:translate-x-0 duration-300">
                            <Link
                                to="edit"
                                className="hover:bg-primary border border-primary bg-gray-300 hover:text-white p-2 rounded-lg"
                            >
                                <FiEdit3 className="size-4" />
                            </Link>
                            <button className="hover:bg-primary border border-primary bg-gray-300 hover:text-white p-2 rounded-lg cursor-pointer">
                                <GoTrash className="size-4" />
                            </button>
                        </div>
                        <img
                            src={v.thumbnail}
                            alt=""
                            className="w-full object-contain rounded-lg cursor-pointer"
                        />
                        <h3
                            className="font-semibold mt-4 line-clamp-1"
                            title={v.title}
                        >
                            {v.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                            {v.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsPage;

import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router";
import img1 from "../../../public/images/ceo.webp";
import img2 from "../../../public/images/coo.webp";
import img3 from "../../../public/images/cto.webp";

const SuccessStudentsPage = () => {
  const [studentsData, setStudentsData] = useState([
    {
      name: "Rare Al Samir",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img1,
    },
    {
      name: "Jamila Bupasha Khushbu",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img2,
    },
    {
      name: "Tanveer Hossain Munim",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img3,
    },
    {
      name: "Rare Al Samir",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img1,
    },
    {
      name: "Jamila Bupasha Khushbu",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img2,
    },
    {
      name: "Tanveer Hossain Munim",
      position: "Founder & CEO",
      place: "Flytech IT",
      img: img3,
    },
  ]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Our Successful Students</h1>
          <p className="text-sm">Displaying all the students of our success.</p>
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
        {studentsData.map((v, i) => (
          <div
            className="flex items-center flex-col text-center bg-white rounded-md px-2 py-4 border border-gray-200 cursor-pointer relative  overflow-hidden group"
            key={i}
          >
            <div className="absolute right-[12px] top-[12px] flex flex-col gap-2 translate-x-[150%] group-hover:translate-x-0 duration-300">
              <Link
                state={v}
                to="edit"
                className="hover:bg-primary border border-primary hover:text-white p-2 rounded-lg"
              >
                <FiEdit3 className="size-4" />
              </Link>
              <button className="hover:bg-primary border border-primary hover:text-white p-2 rounded-lg cursor-pointer">
                <GoTrash className="size-4" />
              </button>
            </div>
            <img
              src={v.img}
              alt=""
              className="size-40 object-contain rounded-full cursor-pointer"
            />
            <h3 className="text-xl font-semibold mt-4">{v.name}</h3>
            <p className="mt-1 text-gray-500 ">{v.position}</p>
            <p className="font-medium  text-xs text-gray-500">
              Working At: {v.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStudentsPage;

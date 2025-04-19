import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router";
import img1 from "../../../public/images/ceo.webp";
import img2 from "../../../public/images/coo.webp";
import img3 from "../../../public/images/cto.webp";

const TeamPage = () => {
  const data = [
    {
      name: "Rare Al Samir",
      position: "Founder & CEO",
      desck:
        "Ex-Bangladesh Army, 3 years of Offline Education Business Experience, 5 years of Teaching Experience Finance Graduate",
      img: img1,
    },
    {
      name: "Jamila Bupasha Khushbu",
      position: "Co-Founder & COO",
      desck:
        "Economics Post Graduate, Ex-BYLC Graduate, 6 years of Experience in Education Sector, Mentored 5000+ students at s@ifurs & two other educational institution, Lead an NGO for 4 years as an Operation Lead",
      img: img2,
    },
    {
      name: "Tanveer Hossain Munim",
      position: "CTO",
      desck:
        "Software Engineer, 5 years of Teaching Experience to 50,000+ Students",
      img: img3,
    },
    {
      name: "Rare Al Samir",
      position: "Founder & CEO",
      desck:
        "Ex-Bangladesh Army, 3 years of Offline Education Business Experience, 5 years of Teaching Experience Finance Graduate",
      img: img1,
    },
    {
      name: "Jamila Bupasha Khushbu",
      position: "Co-Founder & COO",
      desck:
        "Economics Post Graduate, Ex-BYLC Graduate, 6 years of Experience in Education Sector, Mentored 5000+ students at s@ifurs & two other educational institution, Lead an NGO for 4 years as an Operation Lead",
      img: img2,
    },
    {
      name: "Tanveer Hossain Munim",
      position: "CTO",
      desck:
        "Software Engineer, 5 years of Teaching Experience to 50,000+ Students",
      img: img3,
    },
  ];

  const [teamData, setTeamData] = useState(data);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Team</h1>
          <p className="text-sm">Display all the team members list.</p>
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
        {teamData.map((v, i) => (
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
            <p className="font-medium text-primary">{v.position}</p>
            <p className="mt-1 text-xs text-gray-500">{v.desck}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

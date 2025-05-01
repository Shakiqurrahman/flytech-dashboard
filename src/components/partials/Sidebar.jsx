import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  BsChatLeftDotsFill,
  BsInfoCircleFill,
  BsMortarboardFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaChalkboardTeacher, FaEnvelope, FaUserEdit } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdStars } from "react-icons/md";
import { PiSignOutBold, PiStudentFill } from "react-icons/pi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { NavLink } from "react-router";
import Logo from "../../assets/images/flytechBlack.png";

const Sidebar = () => {
  const navLinks = [
    {
      name: "Dashboard",
      link: "/",
      icon: <BiSolidDashboard className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: <BsMortarboardFill className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Reviews",
      link: "/reviews",
      icon: <MdStars className="text-xl group-hover:text-primary" />,
    },
    {
      name: "FAQ",
      link: "/faq",
      icon: (
        <RiQuestionnaireFill className="text-xl group-hover:text-primary" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <BsInfoCircleFill className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Team",
      link: "/team",
      icon: <BsPeopleFill className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Our Students",
      link: "/students",
      icon: <PiStudentFill className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Success Students",
      link: "/success-students",
      icon: <GiAchievement className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Applications",
      link: "/applications",
      icon: <FaUserEdit className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Testimonials",
      link: "/testimonials",
      icon: <BsChatLeftDotsFill className="text-xl group-hover:text-primary" />,
    },
    {
      name: "Inbox",
      link: "/inbox",
      icon: <FaEnvelope className="text-xl group-hover:text-primary" />,
    },
  ];
  return (
    <div className="w-[240px] flex flex-col shrink-0 h-full bg-secondary rounded-2xl">
      <div className="shrink-0 flex px-5 h-[90px] items-center">
        <img
          src={Logo}
          alt="Flytech IT Logo"
          className="w-[120px] shrink-0 object-contain"
        />
      </div>
      <span className="shrink-0 px-5">
        <hr className="h-px w-full border-gray-300 mt-auto" />
      </span>
      <div className="h-full flex flex-col">
        <h1 className="font-medium text-sm px-5 pt-5 pb-3 text-[#7A7A7A] tracking-wide">
          MENU
        </h1>
        <ul>
          {navLinks.map((nav, i) => (
            <li key={i}>
              <NavLink
                to={nav.link}
                className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-black"
              >
                <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#E7371B,#FF7E69)]"></span>
                {nav.icon}
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <h1 className="font-medium text-sm px-5 pt-0 pb-3 text-[#7A7A7A] tracking-wide mt-auto">
          GENERAL
        </h1>
        <ul className="pb-5">
          <li>
            <NavLink
              to={"/instructors"}
              className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-black"
            >
              <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#E7371B,#FF7E69)]"></span>
              <FaChalkboardTeacher className="text-xl group-hover:text-primary" />
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/logout"}
              className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-black"
            >
              <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#E7371B,#FF7E69)]"></span>
              <PiSignOutBold className="text-xl group-hover:text-primary" />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

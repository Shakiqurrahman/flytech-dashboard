import React from "react";
import { BiCommand } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiBell } from "react-icons/pi";
import avatar from "../../assets/images/avatar.png";

const DHeader = () => {
  return (
    <div className="shrink-0 bg-secondary rounded-2xl w-full flex items-center justify-between p-5">
      <form className="flex items-center w-[300px] rounded-4xl bg-white py-2 px-4 gap-x-2">
        <FiSearch className="text-2xl shrink-0 select-none" />
        <input
          type="text"
          className="w-full outline-none placeholder:text-sm"
          placeholder="Search task"
        />
        <div className="select-none p-2 bg-secondary flex text-xs items-center font-bold rounded-lg shrink-0">
          <BiCommand /> F
        </div>
      </form>
      <div className="flex gap-4 items-center">
        <button
          type="button"
          className="bg-white hover:bg-primary hover:text-white duration-300 size-[40px] flex items-center justify-center rounded-full text-lg cursor-pointer"
        >
          <HiOutlineEnvelope />
        </button>
        <button
          type="button"
          className="bg-white hover:bg-primary hover:text-white duration-300 size-[40px] flex items-center justify-center rounded-full text-lg cursor-pointer"
        >
          <PiBell />
        </button>
        <div className="flex gap-2 items-center cursor-pointer group">
          <img
            src={avatar}
            alt="avatar"
            className="size-[50px] object-cover rounded-full shrink-0"
          />
          <div>
            <h1 className="font-semibold group-hover:text-primary duration-300">
              Totok Michael
            </h1>
            <p className="text-sm text-[#7A7A7A]">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DHeader;

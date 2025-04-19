import React from "react";
import toast from "react-hot-toast";
import { GoTrash } from "react-icons/go";
import { useLocation } from "react-router";

const InboxReadPage = () => {
  const { state } = useLocation();

  const handleDelete = (e) => {
    e.preventDefault();
    toast.success("Message Deleted Successfully!!!");
  };

  return (
    <div className="flex justify-center py-20">
      <div className="bg-white border border-primary/20 rounded-xl p-10 w-full max-w-[500px] relative">
        <button
          type="button"
          onClick={handleDelete}
          className="flex gap-1 items-center border border-gray-300 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300 absolute top-5 right-5"
        >
          <GoTrash />
        </button>
        <div className="flex items-center justify-center size-20 rounded-full bg-primary text-white font-semibold text-2xl mx-auto mb-10">
          {state?.name?.charAt(0)?.toUpperCase()}
        </div>
        <p>
          <span className="font-semibold">From: </span>
          {state?.name}
        </p>
        <p className="my-1">
          <span className="font-semibold">Mail: </span>
          {state?.email}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Subject: </span>
          {state?.subject}
        </p>
        <p>
          <span className="font-semibold">Description: </span>
          {state?.description}
        </p>
      </div>
    </div>
  );
};

export default InboxReadPage;

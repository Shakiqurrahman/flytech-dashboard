import React, { useState } from "react";
import toast from "react-hot-toast";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router";

const InboxPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Shakil Ahmed",
      email: "shakilahmed@gmail.com",
      subject: "Full Time UI Designer - Judha Maygustya",
      description: `Dear Mrs Azie Melasar, I am Judha Maygustya, writing to Dear Mrs
            Azie Melasar, I am Judha Maygustya, writing to Dear Mrs Azie
            Melasar, I am Judha Maygustya, writing to Dear Mrs Azie Melasar, I
            am Judha Maygustya, writing to`,
      isSelected: false,
    },
    {
      id: 2,
      name: "Mahdi Hussain",
      email: "mahdihussain@gmail.com",
      subject: "Full Time UI Designer - Judha Maygustya",
      description: `Dear Mrs Azie Melasar, I am Judha Maygustya, writing to Dear Mrs
            Azie Melasar, I am Judha Maygustya, writing to Dear Mrs Azie
            Melasar, I am Judha Maygustya, writing to Dear Mrs Azie Melasar, I
            am Judha Maygustya, writing to`,
      isSelected: false,
    },
    {
      id: 3,
      name: "Mokbul Hussain",
      email: "mokbulhussain@gmail.com",
      subject: "Full Time UI Designer - Judha Maygustya",
      description: `Dear Mrs Azie Melasar, I am Judha Maygustya, writing to Dear Mrs
            Azie Melasar, I am Judha Maygustya, writing to Dear Mrs Azie
            Melasar, I am Judha Maygustya, writing to Dear Mrs Azie Melasar, I
            am Judha Maygustya, writing to`,
      isSelected: false,
    },
    {
      id: 4,
      name: "Shakiqur Rahman",
      email: "shakiqurrahman@gmail.com",
      subject: "Full Time UI Designer - Judha Maygustya",
      description: `Dear Mrs Azie Melasar, I am Judha Maygustya, writing to Dear Mrs
            Azie Melasar, I am Judha Maygustya, writing to Dear Mrs Azie
            Melasar, I am Judha Maygustya, writing to Dear Mrs Azie Melasar, I
            am Judha Maygustya, writing to`,
      isSelected: false,
    },
  ]);

  const handleChecked = (e, id) => {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === id ? { ...msg, isSelected: e.target.checked } : msg
      )
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const filterSelected = messages.filter((msg) => msg.isSelected);
    if (filterSelected.length > 0) {
      toast.success("Delete Successful!!!");
    } else {
      toast.success("No Message Selected!!!");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Inbox</h1>
          <p className="text-sm">Display all the contact form messages list.</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            type="button"
            onClick={handleDelete}
            className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300"
          >
            <GoTrash />
          </button>
        </div>
      </div>
      <div className="mt-8">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex items-center gap-5 py-2 border-b border-gray-200 first:border-t ${
              message.isSelected ? "bg-primary/5" : ""
            }`}
          >
            <input
              type="checkbox"
              id={i}
              className="shrink-0 cursor-pointer"
              checked={message.isSelected}
              onChange={(e) => handleChecked(e, i)}
            />
            <Link to={"read"} state={message} className="flex items-center">
              <div className="flex items-center gap-3 shrink-0 mr-5">
                <div className="flex items-center justify-center text-lg font-semibold rounded bg-primary/20 size-8 shrink-0 text-gray-500">
                  {message.name.charAt(0).toUpperCase()}
                </div>
                <h1 className="font-medium">{message.name}</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="shrink-0">{message.subject}</h1>
                <p className="line-clamp-1 text-gray-400 font-extralight">
                  - {message.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxPage;

import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ForWhom = ({ forWhom, setForWhom }) => {
    const handleAddOption = () => {
        setForWhom([...forWhom, ""]);
    };

    const handleChange = (index, value) => {
        const upatedOption = [...forWhom];
        upatedOption[index] = value;
        setForWhom(upatedOption);
    };

    const handleRemove = (index) => {
        const updatedOption = forWhom.filter((_, i) => i !== index);
        setForWhom(updatedOption);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500">For Whom</p>
                <p
                    className="border border-gray-300 rounded-md px-2 p-1 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
                    onClick={handleAddOption}
                >
                    + Add Options
                </p>
            </div>
            <div className="space-y-2">
                {forWhom.map((v, i) => (
                    <div key={i} className="flex gap-2">
                        <input
                            type="text"
                            value={v}
                            onChange={(e) => handleChange(i, e.target.value)}
                            placeholder={`Option ${i + 1}`}
                            className="px-4 py-2 rounded-lg outline-0 border border-gray-300 w-full"
                        />
                        <button
                            className="border bg-gray-800 p-2 px-4 cursor-pointer text-white rounded-md shrink-0"
                            onClick={() => handleRemove(i)}
                        >
                            <FaRegTrashAlt />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForWhom;

import React from "react";
import { RxCross2 } from "react-icons/rx";

const CourseFaq = ({ courseFaq, setCourseFaq }) => {
    const handleChange = (index, field, value) => {
        const updated = [...courseFaq];
        updated[index][field] = value;
        setCourseFaq(updated);
    };

    const handleAddOption = () => {
        setCourseFaq([...courseFaq, { question: "", answer: "" }]);
    };

    const handleRemove = (index) => {
        if (index > 0) {
            const updatedOption = courseFaq.filter((_, i) => i !== index);
            setCourseFaq(updatedOption);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <p className="text-gray-500">Course FAQ</p>
                <p
                    className="border border-gray-300 rounded-md px-2 p-1 cursor-pointer hover:bg-gray-700 hover:text-white duration-300"
                    onClick={handleAddOption}
                >
                    + Add Options
                </p>
            </div>
            <div className="mt-2 space-y-2">
                {courseFaq.map((value, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={value.question}
                            onChange={(e) =>
                                handleChange(index, "question", e.target.value)
                            }
                            placeholder="Enter Question"
                            className="px-4 py-2 rounded-lg outline-0 border border-gray-300  w-full"
                        />
                        <input
                            type="text"
                            name="answer"
                            value={value.answer}
                            onChange={(e) =>
                                handleChange(index, "answer", e.target.value)
                            }
                            placeholder="Enter Answer"
                            className="px-4 py-2 rounded-lg outline-0 border border-gray-300  w-full"
                        />
                        <button
                            className="bg-black text-white p-2 px-4 rounded-lg cursor-pointer"
                            onClick={() => handleRemove(index)}
                        >
                            <RxCross2 className="text-2xl" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseFaq;

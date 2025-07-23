import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiPlus } from "react-icons/hi2";
import { LuMinus } from "react-icons/lu";
import { Link } from "react-router";
import { useGetMainFaqsQuery } from "../../Redux/features/mainFaq/mainFaq";

const FaqPage = () => {
  const { data: faqData } = useGetMainFaqsQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (faqData?.faq && faqData?.faq?.length > 0) {
      const updateData = faqData?.faq?.map((faq) => ({
        ...faq,
        open: false,
      }));
      setData(updateData);
    }
  }, [faqData]);

  const handleData = (index) => {
    setData((prevData) =>
      prevData.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Faqs</h1>
          <p className="pt-2 text-gray-500 text-sm">
            Manage all Faqs for main page
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            to="edit"
            state={data}
            className="flex gap-1 items-center border text-gray-500 border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-black hover:border-black duration-300"
          >
            <FiEdit /> Edit
          </Link>
          {/* <Link
                        to="create"
                        className="flex gap-1 items-center border border-gray-500 py-2 px-4 rounded-md cursor-pointer hover:text-primary hover:border-primary duration-300"
                    >
                        <MdOutlineCreate /> Create
                    </Link> */}
        </div>
      </div>

      <ul className="mt-8">
        {data.map((value, i) => (
          <li
            className={`rounded-md mt-2 ${
              value.open ? "border border-gray-500 bg-white" : "bg-[#F2F2F2]"
            }`}
            key={i}
          >
            <div
              className={`flex justify-between p-4 items-center text-[#1a1a1a] ${
                value.open ? "border-b border-gray-500" : ""
              }${value.open ? "border-b border-gray-500" : ""}`}
            >
              <p className="font-medium">{value.question}</p>
              <button
                type="button"
                className={`cursor-pointer size-8 ${
                  value.open ? "bg-[#f2f2f2]" : "bg-white"
                } rounded-full flex justify-center items-center shrink-0`}
                onClick={() => handleData(i)}
              >
                {value.open ? <LuMinus /> : <HiPlus />}
              </button>
            </div>
            <p
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                value.open
                  ? "max-h-screen opacity-100 p-4"
                  : "max-h-0 opacity-0 p-0"
              } text-[#666666]`}
            >
              {value.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqPage;

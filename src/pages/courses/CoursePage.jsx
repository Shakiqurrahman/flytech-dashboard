import React from "react";
import { MdOutlineCreate } from "react-icons/md";
import { Link } from "react-router";
import course1 from "../../assets/images/courses/1.webp";
import course2 from "../../assets/images/courses/2.webp";
import course3 from "../../assets/images/courses/3.webp";
import course4 from "../../assets/images/courses/4.webp";
import course5 from "../../assets/images/courses/5.webp";
import course6 from "../../assets/images/courses/6.webp";
import course7 from "../../assets/images/courses/7.webp";
import course8 from "../../assets/images/courses/8.webp";
import course9 from "../../assets/images/courses/9.webp";

const CoursePage = () => {
  const courses = [
    {
      image: course1,
      title: "Web Design & Development with PHP Laravel",
    },
    {
      image: course2,
      title: "Advance Graphics Design",
    },
    {
      image: course3,
      title: "Digital Marketing",
    },
    {
      image: course4,
      title: "Basic Computer & Office Managment",
    },
    {
      image: course5,
      title: "Python Programming",
    },
    {
      image: course6,
      title: "Cyber Security & Ethical Hacking",
    },
    {
      image: course7,
      title: "MERN Stack Development",
    },
    {
      image: course8,
      title: "Flutter Mobile App Development",
    },
    {
      image: course9,
      title: "Web Development with Python Django",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl">Courses</h1>
          <p className="text-sm">Display all the courses list.</p>
        </div>
        <Link
          to={"create"}
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-black hover:border-primary duration-300 hover:text-primary"
        >
          <MdOutlineCreate /> Create
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-5 cursor-pointer">
        {courses.map((course, i) => (
          <div key={i} className="bg-white rounded-lg p-5 group">
            <img
              src={course.image}
              alt="Course Thumbnail"
              className="w-full rounded-lg"
            />
            <h1
              className="line-clamp-2 text-lg group-hover:text-primary duration-300 mt-3"
              title={course.title}
            >
              {course.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;

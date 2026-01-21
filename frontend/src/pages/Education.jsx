import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../index.css";
import EducationSkeleton from "../Skeleton/EducationSkeleton";

const educationData = {
  school: "Bulacan State University",
  degree: "Bachelor of Science in Information Technology",
  years: "2022 – 2026",
  coursework: [
    {
      title: "Web Development",
      description:
        "Learned to build responsive websites using HTML, CSS, JavaScript, and modern frameworks like React.",
    },
    {
      title: "Programming Fundamentals",
      description:
        "Covered basic programming concepts, algorithms, and problem-solving techniques using Python and C++.",
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Studied various data structures and algorithm design for efficient problem-solving and optimized code.",
    },
    {
      title: "Database Management Systems",
      description:
        "Learned relational database design, SQL queries, and data management using MySQL and Firebase.",
    },
    {
      title: "Software Engineering",
      description:
        "Applied software development methodologies, version control, and project lifecycle management.",
    },
  ],
};

const Education = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <EducationSkeleton />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section className="min-h-screen pt-24 pb-12 bg-slate-900 text-white flex items-center">
        <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            My <span className="text-emerald-400">Education</span>
          </h1>

          {/* School / University Info */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-10 mb-10 shadow-lg hover:shadow-emerald-400/30 transition">
            <h2 className="text-2xl font-semibold mb-2">{educationData.school}</h2>
            <p className="text-emerald-400 font-medium mb-1">{educationData.degree}</p>
            <p className="text-slate-400">{educationData.years}</p>
          </div>

          {/* Relevant Coursework */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-emerald-400/30 transition">
            <h2 className="text-2xl font-semibold mb-6">Relevant Coursework</h2>
            <ul className="space-y-5">
              {educationData.coursework.map((course, index) => (
                <li
                  key={index}
                  className="bg-slate-700 rounded-lg p-4 md:p-6 hover:bg-slate-600 transition"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-400 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {course.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Education;

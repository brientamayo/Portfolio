import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { motion } from "framer-motion";
import '../index.css';
const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS / Tailwind", icon: <FaCss3Alt />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 80 },
  { name: "React", icon: <FaReact />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs />, level: 70 },
  { name: "Python", icon: <FaPython />, level: 65 },
  { name: "PHP", icon: <FaPhp />, level: 70 },
  { name: "Laravel", icon: <FaLaravel />, level: 60 },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section className="min-h-screen pt-20 pb-10 flex items-center">
        {/* Content Container */}
        <div className="w-full max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-12">
            My <span className="text-emerald-400">Skills</span>
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700
                     hover:border-emerald-400 hover:-translate-y-1
                     transition-all duration-300"
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-emerald-400">{skill.icon}</div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-emerald-400 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Percentage */}
                <p className="text-right text-sm text-slate-400 mt-2">
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Skills;

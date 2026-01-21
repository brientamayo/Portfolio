import React, { useState, useEffect } from "react";
import AboutPic from "../assets/images/about_me_pic.jpg";
import { motion } from "framer-motion";
import "../index.css";
import AboutSkeleton from "../Skeleton/AboutSkeleton";

const About = () => {
  const [loading, setLoading] = useState(true);

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const myBirthday = "2001-10-30"; // YYYY-MM-DD
  const age = getAge(myBirthday);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <AboutSkeleton />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <section className="min-h-screen pt-20 bg-slate-900 text-slate-100 flex items-center pb-6">
        <div className="max-w-341.5 mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="flex justify-center w-full md:w-1/2">
              <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 border-4 md:border-8 border-emerald-400 rounded-lg overflow-hidden shadow-lg p-1">
                <img
                  src={AboutPic}
                  alt="About Brien Tamayo"
                  className="w-full h-full object-cover rounded"
                  draggable={false}
                />
              </div>
            </div>

            {/* Right Side - About Info */}
            <div className="w-full md:w-1/2 space-y-6 text-sm md:text-base">
              <h1 className="text-3xl md:text-4xl font-bold">
                About <span className="text-emerald-400">Me</span>
              </h1>

              <p className="text-slate-300 leading-relaxed">
                I am a passionate Frontend Developer who enjoys building clean,
                modern, and user-friendly web applications. I focus on creating
                responsive and visually appealing interfaces while ensuring a
                smooth and intuitive user experience. With a strong interest in
                modern web technologies, I continuously improve my skills and
                strive to write efficient, maintainable, and scalable code.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-300">
                <p>
                  <span className="text-emerald-400 font-medium">Name:</span>{" "}
                  Brien Tamayo
                </p>
                <p>
                  <span className="text-emerald-400 font-medium">Age:</span> {age}
                </p>
                <p>
                  <span className="text-emerald-400 font-medium">Address:</span>{" "}
                  Bulacan, Philippines
                </p>
                <p>
                  <span className="text-emerald-400 font-medium">
                    Nationality:
                  </span>{" "}
                  Filipino
                </p>
                <p>
                  <span className="text-emerald-400 font-medium">Email:</span>{" "}
                  brientamayo@email.com
                </p>
                <p>
                  <span className="text-emerald-400 font-medium">Phone:</span>{" "}
                  +63 948 670 4322
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default About;

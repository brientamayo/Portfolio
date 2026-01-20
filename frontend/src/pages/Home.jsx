import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaEye } from "react-icons/fa";
import ProfilePic from "../assets/images/profile_pic.jpg";
import { motion } from "framer-motion";
import '../index.css';
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-slate-900"
    >
      <section
        className="
          min-h-screen
          pt-16
          pb-8
          max-w-341.5
          mx-auto
          px-4
          md:px-8
          lg:px-12
          xl:px-16
          flex
          items-center
        "
      >
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="md:w-1/2 flex flex-col space-y-4 text-left">
            <p className="text-emerald-400 font-medium">
              Frontend Developer
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="text-emerald-400">Brien Tamayo</span>
            </h1>

            <p className="text-slate-300 md:text-lg text-sm max-w-md mx-auto md:mx-0">
              I build clean and modern web applications with React, Tailwind
              CSS, and other frontend technologies. Passionate about creating
              intuitive user experiences and visually appealing interfaces.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="https://www.canva.com/design/DAG5w78xXKI/VQXq5VM3ig3PPOvrBelGEA/edit"
                className="
                  px-6 py-2
                  rounded-full
                  border-2 border-emerald-500
                  text-emerald-500
                  hover:bg-emerald-500 hover:text-white
                  transition
                  flex items-center gap-2
                "
              >
                <span>View CV</span>
                <FaEye />
              </a>

              <div className="flex space-x-4 text-emerald-400 text-xl">
                <a
                  href="https://github.com/brientamayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/brientamayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/tamayo-brien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center pt-6 md:pt-0">
            <div
              className="
                w-72 h-72
                md:w-88 md:h-88
                rounded-full
                border-4 border-emerald-400
                animate-spin-slow
                flex items-center justify-center
                hover:shadow-[0_0_30px_rgba(16,185,129,0.7)]
                transition-transform duration-700
                hover:scale-105
              "
            >
              <img
                src={ProfilePic}
                alt="Brien Tamayo"
                className="
                  w-64 h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Home;

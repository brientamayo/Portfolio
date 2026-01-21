import React, { useState, useEffect } from "react";
import RHUSScreenshot from "../assets/images/rhus-ss.png";
import ReadMeScreenshot from "../assets/images/readme-ss.png";
import BookHavenScreenshot from "../assets/images/bookhaven-ss.png";
import { motion } from "framer-motion";
import ImageSlider from "../utils/ImageSlider";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiDjango, SiPython } from "react-icons/si";
import "../index.css";
import ProjectsSkeleton from "../Skeleton/ProjectsSkeleton";

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  "Tailwind CSS": <SiTailwindcss />,
  JavaScript: <FaJs />,
  Firebase: <SiFirebase />,
  Python: <SiPython />,
  Django: <SiDjango />,
  PHP: <FaPhp />,
  MySQL: <FaDatabase />,
};

const projects = [
  {
    title: "Rural Health Unified System (RHUS)",
    year: "2025",
    role: "Full Stack Developer",
    description:
      "A centralized healthcare management system designed for the Municipality of Hagonoy, Bulacan. The system streamlines resident health records, integrates barangay data, and improves healthcare monitoring and reporting.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Firebase"],
    image: RHUSScreenshot,
  },
  {
    title: "Read.Me Book Store E-commerce",
    year: "2025",
    role: "Frontend Developer",
    description:
      "An e-commerce web application for an online bookstore focused on clean UI, smooth navigation, and responsive design.",
    technologies: ["Python", "Django", "Tailwind CSS"],
    image: ReadMeScreenshot,
  },
  {
    title: "Book Haven Book Store E-commerce",
    year: "2024",
    role: "Full Stack Developer",
    description:
      "A full-stack e-commerce platform for book sales featuring product listings, cart functionality, and order management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: BookHavenScreenshot,
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const project = projects[index];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <ProjectsSkeleton />;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen pt-24 pb-12 flex items-center"
    >
      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 ">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">
          My <span className="text-emerald-400">Projects</span>
        </h1>

        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* LEFT: Details */}
          <div className="lg:w-1/2 space-y-4 text-sm md:text-base">
            <p className="text-slate-400 text-sm">
              Project {index + 1} of {projects.length}
            </p>

            <h2 className="text-2xl font-semibold">
              {project.title}{" "}
              <span className="text-slate-400 text-base">({project.year})</span>
            </h2>

            <p className="text-emerald-400 font-medium">{project.role}</p>

            <p className="text-slate-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              {project.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1
                             rounded-full border border-emerald-400
                             text-emerald-400 text-sm"
                >
                  <span className="text-lg">{techIcons[tech]}</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="lg:w-1/2 w-full">
            <ImageSlider
              project={project}
              projectsLength={projects.length}
              index={index}
              setIndex={setIndex}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../index.css';
const ImageSlider = ({ project, projectsLength, index, setIndex }) => {
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projectsLength);
  };

  const prevProject = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? projectsLength - 1 : prev - 1
    );
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Image ONLY */}
      <div className="w-full aspect-video relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={project.title}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={prevProject}
          className="cursor-pointer px-5 py-2 rounded-full border border-emerald-500
                     text-emerald-500 hover:bg-emerald-500 hover:text-white
                     transition text-sm"
        >
          Previous
        </button>

        <button
          onClick={nextProject}
          className="cursor-pointer px-5 py-2 rounded-full border border-emerald-500
                     text-emerald-500 hover:bg-emerald-500 hover:text-white
                     transition text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

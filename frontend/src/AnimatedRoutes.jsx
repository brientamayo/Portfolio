import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import './index.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Map route paths to titles and favicons
    const routeData = {
      "/": {
        title: "Home - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/128/619/619155.png", // example home icon
      },
      "/about": {
        title: "About Me - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png", // example person icon
      },
      "/skills": {
        title: "Skills - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // example skills icon
      },
      "/projects": {
        title: "Projects - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/128/12673/12673734.png", // example project icon
      },
      "/education": {
        title: "Education - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/128/123/123402.png", // example graduation icon
      },
      "/contact": {
        title: "Contact - My Portfolio",
        icon: "https://cdn-icons-png.flaticon.com/128/18154/18154191.png", // example contact icon
      },
    };

    const data = routeData[location.pathname] || {
      title: "My Portfolio",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png", // default icon
    };

    // Set tab title
    document.title = data.title;

    // Set favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = data.icon;
  }, [location.pathname]);

  return (
    <main>
      <AnimatePresence mode="wait" >
        <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default AnimatedRoutes;

import ThreeDCard from "@/components/ThreeDCard";
import { SideBarContext } from "@/contexts/SideBarContext";
import projects from "@/lib/config";
import { useContext } from "react";
import { motion } from "framer-motion";
import { skillsAnimate } from "@/lib/Animate";

const Projects = () => {
  const { isOpen } = useContext(SideBarContext);
  return (
    <div
      id="projects"
      className="w-full dark:bg-black py-5 sm:py-9 bg-[#F5F5F5] dark:bg-dot-white/[0.25] bg-dot-black/[0.2] relative flex flex-col items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <motion.p
        {...skillsAnimate}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-2 sm:py-5 lg:py-8"
      >
        PROJECTS
      </motion.p>
      <div
        className={`relative flex flex-wrap justify-center lg:justify-between xl:justify-around w-5/6 lg:w-5/6 xl:w-3/4 ${
          isOpen ? "z-10" : "z-40"
        }`}
      >
        {projects.map((project, idx) => (
          <ThreeDCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

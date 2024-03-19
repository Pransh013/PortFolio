import ThreeDCard from "@/components/ThreeDCard";
import { SideBarContext } from "@/contexts/SideBarContext";
import projects from "@/lib/config";
import { useContext } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const { isOpen } = useContext(SideBarContext);
  return (
    <div
      id="projects"
      className="w-full dark:bg-black bg-[#F5F5F5] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-8"
      >
        PROJECTS
      </motion.p>
      <div className={`relative grid grid-cols-2 ${isOpen ? "z-10" : "z-40"}`}>
        {projects.map((project, idx) => (
          <ThreeDCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

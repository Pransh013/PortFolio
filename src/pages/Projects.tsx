import ThreeDCard from "@/components/ThreeDCard";
import projects from "@/lib/config";

const Projects = () => {
  return (
    <div className="w-full dark:bg-black bg-[#F5F5F5] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-8">
        PROJECTS
      </p>
      <div className="relative grid grid-cols-2 z-10">
        {projects.map((project, idx) => (
          <ThreeDCard {...project} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

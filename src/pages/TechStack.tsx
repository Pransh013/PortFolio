import SkillsCard from "@/components/SkillsCard";
import { skillsAnimate } from "@/lib/Animate";
import { SkillsInfo } from "@/lib/config";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div
      id="skills"
      className="w-full dark:bg-black bg-[#F5F5F5] dark:bg-dot-white/[0.25] bg-dot-black/[0.2] relative flex flex-col items-center justify-center z-10 pt-5 sm:pt-8"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <motion.p
        {...skillsAnimate}
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-4 sm:py-7 lg:py-10 tracking-wide"
      >
        SKILLS
      </motion.p>
      <div className="mx-auto flex gap-8 xl:gap-10 justify-center flex-wrap items-center px-4 lg:px-8 xl:px-20 py-3 sm:py-6 lg:py-8 xl:py-12 w-11/12 sm:w-5/6">
        {SkillsInfo.map((info, idx) => {
          return <SkillsCard Logo={info.Logo} name={info.name} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;

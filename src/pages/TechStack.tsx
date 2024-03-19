import SkillsCard from "@/components/SkillsCard";
import { skillsAnimate } from "@/lib/Animate";
import { SkillsInfo } from "@/lib/config";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div
      id="skills"
      className="w-full dark:bg-black py-12 bg-[#F5F5F5] dark:bg-dot-white/[0.25] bg-dot-black/[0.2] relative flex flex-col items-center justify-center z-10"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <motion.p
        {...skillsAnimate}
        className="text-4xl sm:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-8 tracking-wide"
      >
        SKILLS
      </motion.p>
      <div className=" mx-auto flex gap-10 justify-center flex-wrap items-center px-20 py-14 w-5/6">
        {SkillsInfo.map((info, idx) => {
          return <SkillsCard Logo={info.Logo} name={info.name} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;

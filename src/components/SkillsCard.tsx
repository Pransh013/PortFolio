import { skillsAnimate } from "@/lib/Animate";
import { motion } from "framer-motion";

const SkillsCard = ({ name, Logo }: { name: string; Logo: string }) => {
  return (
    <div className="relative z-50 bg-white text-black rounded-md flex justify-center gap-2 md:gap-3 lg:gap-4 items-center px-1.5 sm:px-3 h-12 lg:h-16 gh-regular hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out">
      <motion.p className="text-xl sm:text-2xl font-bold" {...skillsAnimate}>
        {name}
      </motion.p>
      <motion.img src={Logo} alt="skills" {...skillsAnimate} className="w-6 sm:w-8" />
    </div>
  );
};

export default SkillsCard;

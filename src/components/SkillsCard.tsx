import { skillsAnimate } from "@/lib/Animate";
import { motion } from "framer-motion";

const SkillsCard = ({ name, Logo }: { name: string; Logo: string }) => {
  return (
    <div className="relative z-50 bg-white text-black rounded-md flex justify-center gap-4 items-center px-3 h-16 gh-regular hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out">
      <motion.p className="text-2xl font-bold" {...skillsAnimate}>
        {name}
      </motion.p>
      <motion.img src={Logo} alt="skills" {...skillsAnimate} className="w-8" />
    </div>
  );
};

export default SkillsCard;

import { skillsAnimate } from "@/lib/Animate";
import { motion } from "framer-motion";

const SkillsCard = ({ name, Logo }: { name: string; Logo: string }) => {
  return (
    <div className="skill-card relative z-50 bg-white text-black rounded-md flex justify-center gap-3 items-center w-56 h-14 gh-regular hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
      <motion.p className="text-3xl font-bold" {...skillsAnimate}>
        {name}
      </motion.p>
      <motion.img src={Logo} alt="" {...skillsAnimate} className="w-7" />
    </div>
  );
};

export default SkillsCard;

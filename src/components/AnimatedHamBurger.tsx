import { SideBarContext } from "@/contexts/SideBarContext";
import { motion, MotionConfig } from "framer-motion";
import { forwardRef, useContext, useState } from "react";

interface AnimatedHamBurgerProps {}

const AnimatedHamBurger = forwardRef<HTMLDivElement, AnimatedHamBurgerProps>(
  (_, ref) => {
    const [active, setActive] = useState(false);
    const { setIsOpen } = useContext(SideBarContext);
    return (
      <MotionConfig
        transition={{
          duration: 0.6,
          ease: "linear",
        }}
      >
        <motion.button
          initial={false}
          onClick={() => {
            setActive(!active);
            setIsOpen((prev) => !prev);
          }}
          className="relative group z-50 h-20 w-20 rounded-full transition-colors mix-blend-difference"
          animate={active ? "open" : "closed"}
        >
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-[3px] sm:h-1 w-[36px] z-50 bg-white rounded-sm"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-[3px] sm:h-1 w-[36px] z-50 bg-white rounded-sm"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
          />
          <motion.span
            style={{
              left: "calc(50% + 9px)",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            className="absolute h-[2.5px] sm:h-1 w-[18px] z-50 bg-white rounded-sm"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["35%", "50%", "50%"],
                left: "50%",
                opacity: "0",
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "35%"],
                left: "calc(50% + 9px)",
              },
            }}
          />
          <div
            ref={ref}
            className="absolute left-0 top-0 z-50 w-full h-full pointer-events-auto group-hover:scale-[1.8]"
          ></div>
        </motion.button>
      </MotionConfig>
    );
  }
);

export default AnimatedHamBurger;

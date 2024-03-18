import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextEffect = ({ children }: { children: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1 , 1)",
        "scale3d(1.4, .65 , 1)",
        "scale3d(.8, 1.25 , 1)",
        "scale3d(1.25, .85 , 1)",
        "scale3d(.85, 1.1 , 1)",
        "scale3d(1, 1 , 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block text-5xl font-semibold text-black dark:text-white mix-blend-difference transition-colors"
    >
      {children}
    </motion.span>
  );
};

export default TextEffect;

export const skillsAnimate = {
  initial: {
    opacity: 0,
    y: -30,
  },
  transition: {
    ease: "easeOut",
    duration: 1,
    // delay: 0.5,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
  },
};

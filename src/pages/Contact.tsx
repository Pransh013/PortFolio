import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import BackToTop from "@/components/BackToTop";
import { cn } from "@/lib/utils";
import { SideBarContext } from "@/contexts/SideBarContext";
import ContactMe from "@/components/ContactMe";
import SignupFormDemo from "@/components/ContactMeee";
import { skillsAnimate } from "@/lib/Animate";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Contact = () => {
  const { isOpen } = useContext(SideBarContext);

  const linkVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: -30 },
  };

  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 65%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      id="contact"
      style={{
        backgroundImage,
      }}
      className="relative h-screen overflow-hidden bg-transparent border text-white pt-12"
    >
      <div className="flex flex-col absolute z-50">
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          variants={linkVariants}
          whileHover="hover"
          whileTap="initial"
          className="social-link"
        >
          LinkedIn
        </motion.a>
      </div>
      {/* <div className="relative z-10 flex flex-col items-center">
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Loading
        </motion.button>
      </div> */}

      {/* <ContactMe /> */}
      <motion.p
        {...skillsAnimate}
        className="text-4xl text-center uppercase sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-600"
      >
        Get in touch
      </motion.p>

      <div
        className={cn(
          "relative bg-black/60 h-96 items-center flex w-3/5 mx-auto mt-12",
          isOpen ? "z-10" : "z-50"
        )}
      >
        <div className="flex-1 absolute w-2/3 z-50">
          <SignupFormDemo />
        </div>
        <div className="p-4 flex flex-col gap-5 absolute right-3 text-gray-300">
          <div>
            <h3 className="text-2xl font-bold">Contact Details</h3>
            <p className="text-sm">pranshuverma1601@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Connect with me</h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/in/pransshhh/" target="_blank">
                LinkedIn
              </a>
              <a href="https://github.com/Pransh013" target="_blank">
                GitHub
              </a>
              <a href="https://twitter.com/pranshu98865108" target="_blank">
                Twitter
              </a>
              <a href="https://www.instagram.com/pransh.jsx/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-2xl absolute left-0 bottom-0 h-20 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Made with 💓 by
          <span className="gh-regular text-3xl font-medium">
            <b> Pransshhh</b>
          </span>
        </motion.p>
      </div>
      <div
        className={cn(
          "absolute text-gray-200 bottom-8 right-9 transition-all ease-in-out duration-500",
          isOpen ? "z-10" : "z-40 "
        )}
      >
        <BackToTop />
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={3000} factor={3} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Contact;

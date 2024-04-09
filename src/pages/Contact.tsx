import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useMemo, useState } from "react";
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
import { skillsAnimate } from "@/lib/Animate";
import { getTimeInAMPMFormat, socials } from "@/lib/config";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Contact = () => {
  const [time, setTime] = useState("");
  const { isOpen } = useContext(SideBarContext);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getTimeInAMPMFormat());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

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

  const socialLinks = useMemo(
    () =>
      socials.map((val) => (
        <a
          key={val.title}
          href={val.href}
          target="_blank"
          className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
        >
          {val.title}
        </a>
      )),
    []
  );

  return (
    <motion.section
      id="contact"
      style={{
        backgroundImage,
      }}
      className="relative h-screen overflow-hidden bg-transparent text-white pt-4 sm:pt-6 lg:pt-10"
    >
      <motion.p
        {...skillsAnimate}
        className="text-4xl md:text-5xl text-center uppercase lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-600"
      >
        Get in touch
      </motion.p>

      <div
        className={cn(
          "relative lg:bg-black h-[31.5rem] sm:h-[30rem] lg:h-96 items-center flex flex-col lg:flex-row w-2/3 md:w-1/2 lg:w-3/4 xl:w-3/5 mx-auto mt-5 lg:mt-8 xl:mt-10",
          isOpen ? "z-10" : "z-50"
        )}
      >
        <div className="flex-1 absolute w-full lg:w-2/3 left-0 z-50">
          <ContactMe />
        </div>
        <div className="p-2 sm:p-4 flex flex-col gap-1 sm:gap-3 lg:gap-6 absolute bottom-0 lg:bottom-1/2 lg:translate-y-1/2 right-1/2 translate-x-1/2 lg:right-1 lg:translate-x-0 xl:right-3 text-gray-300">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl lg:text-3xl font-bold">Contact Details</h3>
            <p className="font-semibold pl-3 text-sm lg:text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out">
              pranshuverma1601@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:gap-3">
            <h3 className="text-xl lg:text-3xl font-bold">Connect with me</h3>
            <div className="flex flex-col gap-1 lg:gap-3 font-semibold pl-3 text-sm lg:text-base">
              {socialLinks}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full hidden text-2xl absolute left-0 bottom-0 h-20 md:flex items-center justify-center">
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
          "absolute text-gray-200 bottom-4 right-1 sm:bottom-4 sm:right-4 md:bottom-8 md:right-9 transition-all ease-in-out duration-500",
          isOpen ? "z-10" : "z-40 "
        )}
      >
        <BackToTop />
      </div>
      <div className="absolute text-gray-200 bottom-1 left-1 sm:bottom-2 sm:left-4 md:bottom-4 md:left-9">
        <p className="text-base md:text-xl font-semibold">Lucknow, India</p>
        <p className="text-sm sm:text-base font-medium">{time}</p>
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

import { SideBarContext } from "@/contexts/SideBarContext";
import { navItems } from "@/lib/config";
import { useAnimation, motion } from "framer-motion";
import { forwardRef, useContext, useEffect } from "react";

interface HoverTextProps {}

const SideBar = forwardRef<HTMLDivElement, HoverTextProps>((_, ref) => {
  const { isOpen } = useContext(SideBarContext);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [isOpen, controls]);

  return (
    <motion.div
      variants={{
        open: {
          transform: "translateX(0%)",
          transition: {
            ease: [0.08, 0.65, 0.53, 0.56],
            duration: 0.6,
          },
        },
        closed: {
          transform: "translateX(150%)",
        },
      }}
      animate={controls}
      initial={false}
      className="bg-white m-2 gh-regular w-[30%] h-[98%] rounded-md fixed z-50 top-0 text-black right-0 mix-blend-difference flex items-center justify-center"
    >
      <div
        className="flex w-11/12 flex-col gap-16 justify-center items-center bg-white py-6"
        ref={ref}
      >
        <div className="flex flex-col gap-12 -ml-16">
          {navItems.map((data, index) => (
            <motion.a
              href={data.href}
              variants={{
                open: {
                  transform: "translateX(0%)",
                  transition: {
                    ease: [0.08, 0.65, 0.53, 0.96],
                    duration: 0.5 * (index + 1),
                  },
                },
                closed: {
                  transform: "translateX(100%)",
                },
              }}
              className="text-5xl font-semibold"
              key={index}
            >
              {data.title}
            </motion.a>
          ))}
        </div>
        <motion.div
          variants={{
            open: {
              transform: "translateX(0%)",
              transition: {
                ease: [0.08, 0.65, 0.53, 0.96],
                duration: 2,
              },
            },
            closed: {
              transform: "translateX(100%)",
            },
          }}
          className="w-full flex justify-end text-xl pt-16  font-bold gap-8 border-b-2 rounded-[3px]"
        >
          <a href="https://www.linkedin.com/in/pransshhh/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/Pransh013" target="_blank">
            GitHub
          </a>
          <a href="https://twitter.com/pranshu98865108" target="_blank">
            Twitter
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default SideBar;

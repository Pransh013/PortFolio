import { SideBarContext } from "@/contexts/SideBarContext";
import { useAnimation, motion } from "framer-motion";
import { forwardRef, useContext, useEffect } from "react";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Skills",
    href: "/#skills",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

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
          transform: "translateX(100%)",
        },
      }}
      animate={controls}
      initial={false}
      className="bg-white gh-regular w-1/4 h-screen fixed z-50 top-0 text-black right-0 mix-blend-difference flex items-center justify-center"
    >
      <div className="flex flex-col gap-12 bg-white px-8 py-6" ref={ref}>
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
    </motion.div>
  );
});

export default SideBar;

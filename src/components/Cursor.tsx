import {
  motion,
  useMotionValue,
  useSpring,
  transform,
  animate,
} from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";

const Cursor = ({
  stickyElement,
  stickyText,
  stickyText2,
}: {
  stickyElement: React.RefObject<HTMLDivElement>;
  stickyText: React.RefObject<HTMLDivElement>;
  stickyText2: React.RefObject<HTMLParagraphElement>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredOnText, setIsHoveredOnText] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorSize = isHovered || isHoveredOnText ? 75 : 16;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  interface Distance {
    x: number;
    y: number;
  }

  const rotate = (distance: Distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current!, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } =
      stickyElement.current!.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - center.x, y: clientY - center.y };
    if (isHovered) {
      rotate(distance);

      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setIsHovered(true);
  };

  const manageMouseOverText = () => {
    setIsHoveredOnText(true);
  };

  const manageMouseLeave = () => {
    setIsHovered(false);
    setIsHoveredOnText(false);
    animate(
      cursorRef.current!,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: "spring" }
    );
  };

  useEffect(() => {
    stickyElement.current!.addEventListener("mouseover", manageMouseOver);
    stickyElement.current!.addEventListener("mouseleave", manageMouseLeave);
    stickyText.current!.addEventListener("mouseover", manageMouseOverText);
    stickyText2.current!.addEventListener("mouseover", manageMouseOverText);
    stickyText.current!.addEventListener("mouseleave", manageMouseLeave);
    stickyText2.current!.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove as any);
    return () => {
      stickyElement.current!.removeEventListener("mouseover", manageMouseOver);
      stickyElement.current!.removeEventListener(
        "mouseleave",
        manageMouseLeave
      );
      stickyText.current!.removeEventListener("mouseover", manageMouseOverText);
      stickyText2.current!.removeEventListener(
        "mouseover",
        manageMouseOverText
      );
      stickyText.current!.removeEventListener("mouseleave", manageMouseLeave);
      stickyText2.current!.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove as any);
    };
  }, [isHovered, isHoveredOnText]);

  type TemplateFunction = (props: {
    rotate: number;
    scaleX: number;
    scaleY: number;
  }) => string;

  const template: TemplateFunction = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={template}
      className="w-4 h-4 rounded-full bg-white fixed z-40 pointer-events-none mix-blend-difference"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;

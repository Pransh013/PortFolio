import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const BackToTop = () => {
  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
    console.log(xRange);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, (latest) => latest * 0.5);
  const textY = useTransform(y, (latest) => latest * 0.5);
  return (
    <AnimatePresence>
      {
        <motion.div
          onPointerMove={(event) => {
            const item = event.currentTarget;
            setTransform(item, event, x, y);
          }}
          onPointerLeave={(_) => {
            x.set(0);
            y.set(0);
          }}
          style={{ x, y }}
        >
          <motion.a
            className="font-medium relative rounded-md text-sm py-3.5 px-5 transition-all duration-500 ease-out"
            href="#"
          >
            <motion.span
              style={{ x: textX, y: textY }}
              className="z-10 relative gh-regular text-base"
            >
              Back To Top
            </motion.span>
            <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              className="absolute w-full h-full rounded-md left-0 bottom-0 bg-black"
            ></motion.div>
          </motion.a>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default BackToTop;

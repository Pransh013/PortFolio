import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import TextEffect from "@/components/TextEffect";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { forwardRef } from "react";



const sentences = [
  "Hello, I'm Pranshu Verma, ",
  "a frontend developer with a passion ",
  "for crafting pixel-perfect ",
  "experiences.",
];

interface HoverTextProps {}

const Home = forwardRef<HTMLParagraphElement, HoverTextProps>((_, ref) => {
  return (
    <div id="home" className="w-full h-screen relative">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <Header />
      <div className="lg:px-20 xl:px-[84px] w-full h-full absolute z-20 top-0 flex lg:flex-row flex-col justify-center items-center gap-16 lg:gap-20">
        <div>
          <ProfileCard />
        </div>
        <p
          ref={ref}
          className="text-white text-center lg:text-left mix-blend-difference lg:flex-1 max-w-fit"
        >
          {sentences.map((sentence, idx) => (
            <React.Fragment key={idx}>
              {sentence.split("").map((char, idx) => (
                <TextEffect key={idx}>
                  {char === " " ? "\u00A0" : char}
                </TextEffect>
              ))}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
});

export default Home;

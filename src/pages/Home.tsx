import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import TextEffect from "@/components/TextEffect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { forwardRef } from "react";

const sentences = [
  "Hello, I'm Pranshu Verma, ",
  "a frontend developer with a passion ",
  "for crafting pixel-perfect experiences.",
];

interface HoverTextProps {}

const Home = forwardRef<HTMLParagraphElement, HoverTextProps>((_, ref) => {
  return (
    <div className="w-full h-screen relative custom-scrollbar">
      <Header ref={ref} />
      <div className="px-24 w-full h-full absolute z-20 flex items-center gap-24">
        <div className="h-full">
          <ProfileCard />
        </div>
        <p
          ref={ref}
          className="text-white mix-blend-difference flex-1 max-w-fit"
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
      <BackgroundBeams />
    </div>
  );
});

export default Home;

import { useRef } from "react";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import AnimatedHamBurger from "./components/AnimatedHamBurger";
import MagneticEffect from "./components/MagneticEffect";
import SideBar from "./components/SideBar";

const App = () => {
  const stickyElement = useRef(null);
  const stickyText = useRef(null);
  const stickyText2 = useRef(null);
  return (
    <>
      <main className="w-full h-screen dark:bg-black bg-[#F5F5F5] relative">
        <Cursor
          stickyElement={stickyElement}
          stickyText={stickyText}
          stickyText2={stickyText2}
        />
        <div className="absolute z-30">
          <SideBar ref={stickyText} />
        </div>
        <div className="z-50 mix-blend-difference fixed -right-2 -top-1.5 sm:right-8 sm:top-2 lg:right-6 xl:right-10 lg:top-5">
          <MagneticEffect>
            <AnimatedHamBurger ref={stickyElement} />
          </MagneticEffect>
        </div>
        <Home ref={stickyText2} />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;

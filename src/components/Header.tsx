import Resume from "../assets/Pranshu_Verma_resumeM.pdf";
import { CloudDownload } from "lucide-react";

const Header = () => {
  return (
    <div
      className={`w-5/6 lg:w-5/6 xl:w-11/12 gh-regular flex sm:px-4 lg:px-8 justify-between items-center mix-blend-difference py-4 sm:py-7 lg:py-10 `}
    >
      <div className="text-2xl md:text-4xl ml-4 sm:ml-10 lg:ml-16 mix-blend-difference text-white">
        Pranshu Verma
      </div>
      <a
        className="text-lg sm:text-xl lg:text-2xl text-white flex items-center gap-1 sm:gap-3"
        href={Resume}
        download
      >
        <p>Resume</p>
        <CloudDownload />
      </a>
    </div>
  );
};

export default Header;

import { useContext } from "react";
import Resume from "../assets/Pranshu_Verma_resumeM.pdf";
import { SideBarContext } from "@/contexts/SideBarContext";
import { CloudDownload } from "lucide-react";

const Header = () => {
  const { isOpen } = useContext(SideBarContext);
  return (
    <div
      className={`w-full gh-regular px-36 pr-60 flex justify-between items-center mix-blend-difference py-10 absolute ${
        isOpen ? "z-20" : "z-30"
      } `}
    >
      <div className=" text-4xl mix-blend-difference text-white">
        Pranshu Verma
      </div>
      <a
        className="text-2xl text-white flex items-center gap-3"
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

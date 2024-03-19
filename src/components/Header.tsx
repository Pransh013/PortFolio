import { forwardRef } from "react";

interface HeaderProps {}

const Header = forwardRef<HTMLDivElement, HeaderProps>((_, ref) => {
  return (
    <div className="w-full px-24 border border-black flex items-center mix-blend-difference py-12">
      <div
        className="gh-regular text-2xl mix-blend-difference text-white"
        ref={ref}
      >
        Pranshu Verma
      </div>
    </div>
  );
});

export default Header;

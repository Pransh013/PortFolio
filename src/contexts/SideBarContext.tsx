import { createContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Initial_State = {
  setIsOpen: () => {},
  isOpen: false,
  isHovered: false,
  setIsHovered: () => {},
};

export const SideBarContext = createContext<ContextProps>(Initial_State);

const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SideBarContext.Provider
      value={{ isOpen, setIsOpen, isHovered, setIsHovered }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;

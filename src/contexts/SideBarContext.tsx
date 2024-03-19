import { createContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Initial_State = {
  setIsOpen: () => {},
  isOpen: false,
};

export const SideBarContext = createContext<ContextProps>(Initial_State);

const SideBarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SideBarContext.Provider
      value={{ isOpen, setIsOpen }}
    >
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;

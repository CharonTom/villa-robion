"use client";

import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeSidebar: () => void;
  openSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openSidebar = () => {
    setIsSideBarOpen(true);
  };

  return (
    <SidebarContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, closeSidebar, openSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebarContext = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SideBarProvider");
  }
  return context;
};

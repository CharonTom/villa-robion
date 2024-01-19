"use client";

import React, { createContext, useContext, useState } from "react";

interface ReservationContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closePanel: () => void;
  openPanel: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);

export const ReservationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closePanel = () => {
    setIsOpen(false);
  };
  const openPanel = () => {
    setIsOpen(true);
  };

  return (
    <ReservationContext.Provider
      value={{
        isOpen,
        setIsOpen,
        closePanel,
        openPanel,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = (): ReservationContextType => {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error(
      "useReservationContext must be used within a ReservationProvider"
    );
  }
  return context;
};

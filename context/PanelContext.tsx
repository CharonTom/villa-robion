"use client";

import React, { createContext, useContext, useState } from "react";

interface ReservationContextType {
  isPanelOpen: boolean;
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const closePanel = () => {
    setIsPanelOpen(false);
  };
  const openPanel = () => {
    setIsPanelOpen(true);
  };

  return (
    <ReservationContext.Provider
      value={{
        isPanelOpen,
        setIsPanelOpen,
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

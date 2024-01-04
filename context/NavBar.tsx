"use client";

import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

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
export const useReservationContext = () => useContext(ReservationContext);

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Ajout d'un décalage de 100 pixels avant de masquer la barre
    const scrollThreshold = 200;

    if (
      currentScrollPos > prevScrollPos &&
      currentScrollPos > scrollThreshold
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`w-full fixed z-20 bg-white text-black ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-primary-pink h-3 w-full"></div>
      <div className="mx-14 flex justify-between items-center p-1">
        <div>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="rounded-full border border-2 border-white"
          />
        </div>
        <div className="flex-center gap-x-20">
          <div>Réserver</div>
          <div>Visite virutelle</div>
          <div>Nous contacter</div>
        </div>
      </div>
    </header>
  );
}

export default Header;

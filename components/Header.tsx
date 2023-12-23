"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparentBackground, setTransparentBackground] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollThreshold = 200;

    if (
      currentScrollPos > prevScrollPos &&
      currentScrollPos > scrollThreshold
    ) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    // Check if scroll position is exactly 0 pixels
    setTransparentBackground(currentScrollPos === 0);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`w-full fixed z-20 text-black transition-all ${
        visible
          ? transparentBackground
            ? "text-white"
            : "bg-white"
          : "opacity-0"
      }`}
    >
      <div className="bg-primary-pink h-2 w-full"></div>
      <div className="mx-14 flex justify-between items-center p-1">
        <div>
          <Image
            src="/img/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full border border-2 border-white"
          />
        </div>
        <div className="flex-center gap-x-20">
          <div>Réserver</div>
          <div>Visite virtuelle</div>
          <div>Nous contacter</div>
        </div>
      </div>
    </header>
  );
}

export default Header;

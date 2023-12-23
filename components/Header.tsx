"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsScrolled(currentScrollPos > 200 && isScrollingDown);
      setIsTop(currentScrollPos === 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Déterminez si le Header doit être transparent en fonction de la route actuelle
  const isTransparent = usePathname() === "/"; // Ajoutez d'autres routes si nécessaire

  const headerClasses = `fixed w-full z-20 transition-transform ${
    isScrolled ? "-translate-y-full" : "translate-y-0"
  } ${isTop && isTransparent ? "text-white" : "bg-white text-black"}
  ${isTop ? "" : "border-b border-gray-300"}`;

  return (
    <header className={headerClasses}>
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

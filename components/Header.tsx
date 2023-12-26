"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
      <nav className="mx-14 flex justify-between items-center p-1">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="rounded-full border border-2 border-primary-pink"
            />
          </Link>
        </div>
        <div className="flex-center gap-x-20">
          <button>Réserver</button>
          <Link href="/visit">Visite virtuelle</Link>
          <Link href="/contact">Nous contacter</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

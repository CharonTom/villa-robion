"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../Logo";

import React, { useEffect, useState } from "react";
import { useReservationContext } from "@/context/PanelContext";
import { useSidebarContext } from "@/context/SidebarContext";

function Header() {
  const [isTop, setIsTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { openPanel, isPanelOpen, closePanel } = useReservationContext();
  const { openSidebar } = useSidebarContext();

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

  const currentPathname = usePathname();

  // Le Header doit être transparent en fonction de la route.
  const isTransparent =
    currentPathname === "/" || currentPathname === "/contact";

  const headerClasses = `fixed w-full z-50 transition-header ${
    isPanelOpen
      ? "translate-y-0"
      : isScrolled
      ? "-translate-y-full"
      : "translate-y-0"
  } ${
    isTop
      ? isPanelOpen
        ? "bg-white text-black border-b border-gray-300"
        : isTransparent
        ? "bg-transparent text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_50%)]"
        : "bg-transparent text-black"
      : "bg-white text-black border-b border-gray-300"
  }`;

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <header className={headerClasses}>
        <div className="bg-primary-pink h-[7px] w-full"></div>
        <nav className="flex-between mx-4 md:mx-8 lg:mx-14 h-[100px]">
          <Link href="/" className="flex-center gap-x-2" onClick={closePanel}>
            <div className="overflow-hidden relative bg-white h-16 w-16 md:h-20 md:w-20 rounded-full relative border-2 border-primary-pink">
              <Logo />
            </div>
            <p className="text-base md:text-lg">
              La maison
              <br />
              de Nath & Lio
            </p>
          </Link>

          {/* for desktop */}

          <div className="hidden md:block">
            <ul className="flex-center gap-x-8 lg:gap-x-16 text-lg lg:text-xl">
              <li className="pink-underline">
                <div onClick={openPanel} className="target cursor-pointer">
                  Réserver
                </div>
              </li>
              <li className="pink-underline">
                <Link href="/visit" className="target" onClick={closePanel}>
                  Visite virtuelle
                </Link>
              </li>
              <li className="pink-underline">
                <Link href="/contact" className="target" onClick={closePanel}>
                  Contactez-nous !
                </Link>
              </li>
            </ul>
          </div>

          {/* for mobile */}

          <div className="md:hidden">
            <ul className="flex-center gap-x-8 lg:gap-x-16 text-lg lg:text-xl mr-4">
              <li className="pink-underline">
                <Link href="" onClick={openSidebar}>
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

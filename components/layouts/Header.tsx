"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReservationContext } from "@/context/NavBar";
import Logo from "../Logo";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { openPanel, isOpen } = useReservationContext();
  const [navBar, setNavBar] = useState(false);

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

  const headerClasses = `fixed w-full z-50 transition-transform ${
    isOpen
      ? "translate-y-0"
      : isScrolled
      ? "-translate-y-full"
      : "translate-y-0"
  } ${
    isTop && isTransparent
      ? isOpen
        ? "text-black border-b border-gray-300"
        : "text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_70%)]"
      : "bg-white text-black"
  } ${isTop ? "" : "border-b border-gray-300"}`;

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <>
      <header className={headerClasses}>
        <div className="bg-primary-pink h-[7px] w-full"></div>
        <nav className="flex-between mx-4 md:mx-8 lg:mx-14 h-[100px]">
          <Link href="/" className="flex-center gap-x-2">
            <div className="overflow-hidden relative bg-white h-16 w-16 md:h-20 md:w-20 rounded-full relative border-2 border-primary-pink">
              <Logo />
            </div>
            <p className="text-sm md:text-base">
              La maison
              <br />
              de Nath & Lio
            </p>
          </Link>

          {/* for desktop */}
          <div className="hidden md:block">
            <ul className="flex-center gap-x-8 lg:gap-x-16 text-base lg:text-xl">
              <li className="pink-underline">
                <Link href="" onClick={openPanel} className="target">
                  Réserver
                </Link>
              </li>
              <li className="pink-underline">
                <Link href="/visit" className="target">
                  Visite virtuelle
                </Link>
              </li>
              <li className="pink-underline">
                <Link href="/contact" className="target">
                  Contactez-nous !
                </Link>
              </li>
            </ul>
          </div>
          {/* for mobile */}
          <div className="md:hidden">
            <ul className="flex-center gap-x-8 lg:gap-x-16">
              <li className="pink-underline">
                <Link href="" onClick={openPanel}>
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

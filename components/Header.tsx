"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useReservationContext } from "@/context/NavBar";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { openPanel, isOpen } = useReservationContext();

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
    <header className={headerClasses}>
      <div className="bg-primary-pink h-[7px] w-full"></div>
      <nav className="mx-14 flex justify-between items-center p-1 h-[100px]">
        <ul className="flex-center gap-x-10 ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={80}
              height={80}
              className="rounded-full border border-2 border-primary-pink"
            />
          </Link>
          <li className="pink-underline">
            <Link className="target" href="/">
              Accueil
            </Link>
          </li>
          <li className="pink-underline">
            <Link href="" onClick={openPanel} className="target">
              Réserver
            </Link>
          </li>
        </ul>
        <ul className="flex-center gap-x-10">
          <li className="pink-underline">
            <Link href="/visit" className="target">
              Visite virtuelle
            </Link>
          </li>
          <li className="pink-underline">
            <Link href="/contact" className="target">
              Nous contacter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

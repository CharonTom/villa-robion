"use client";

import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "@/context/SidebarContext";
import Image from "next/image";
import Logo from "../Logo";

function MobileSideBar() {
  const { isSideBarOpen, closeSidebar } = useSidebarContext();

  return (
    <div>
      {/* Superposition sombre */}
      {isSideBarOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40"
          onClick={closeSidebar}
        />
      )}

      <div className="md:hidden">
        <div
          className={`fixed top-0 right-0 w-full h-full z-50 transition-transform ease-in-out duration-300 bg-white transform overflow-hidden ${
            isSideBarOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
        >
          <div className="bg-primary-pink h-[7px] w-full"></div>
          <div className="flex-between mx-4 h-[100px]">
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
            <button onClick={closeSidebar} className="text-primary-pink">
              <FaTimes size={34} />
            </button>
          </div>
          <div className="flex-grow flex flex-col justify-between p-8  text-3xl">
            <div className="h-full w-full flex flex-col justify-center gap-y-16 mb-8">
              <Link href="/" className="block" onClick={closeSidebar}>
                Accueil
              </Link>
              <Link href="/visit" className="block" onClick={closeSidebar}>
                Visite virtuelle
              </Link>
              <Link href="/contact" className="block" onClick={closeSidebar}>
                Contacts
              </Link>
            </div>

            <div>
              <div className="my-3 w-full mx-auto h-[1px] bg-primary-pink"></div>

              <div className="text-xl mb-8 text-center">
                Réservez votre logement avec
              </div>
              <div className="flex-center gap-x-8">
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 relative w-[40%]"
                >
                  <Image
                    alt="airbnb"
                    src="/images/airbnb.webp"
                    fill
                    className="block object-contain"
                  />
                </a>
                <a
                  href="https://www.homeexchange.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 relative w-[40%]"
                >
                  <Image
                    alt="homeexchange"
                    src="/images/home.webp"
                    fill
                    className="block object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;

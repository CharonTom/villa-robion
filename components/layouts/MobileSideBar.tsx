"use client";

import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "@/context/SidebarContext";

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
          className={`fixed top-0 left-0 w-full pt-[105px] transition-transform ease-in-out duration-300 transform bg-white overflow-hidden z-40 ${
            isSideBarOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-8">
            <div className="text-[35px] mb-4">Faites votre réservation !</div>

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
          </div>
          <button
            onClick={closeSidebar}
            className="absolute bottom-4 right-4 text-primary-pink"
          >
            <FaTimes size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;

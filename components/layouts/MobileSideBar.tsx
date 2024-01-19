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
          className={`fixed top-0 right-0 w-[80%] h-full z-50 transition-transform ease-in-out duration-300 transform bg-white overflow-hidden ${
            isSideBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-10 space-y-20 h-full w-full flex flex-col text-3xl">
            <Link href="/" className="block">
              Accueil
            </Link>
            <Link href="/visit" className="block">
              Visite virtuelle
            </Link>
            <Link href="/contact" className="block">
              Contacts
            </Link>
            <div>
              <div>
                <div className="mb-4">Réservez</div>
                <div className="flex justify-around">
                  <div className="text-sm">Airbnb</div>
                  <div className="text-sm">Home Exchange</div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 text-primary-pink"
          >
            <FaTimes size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;

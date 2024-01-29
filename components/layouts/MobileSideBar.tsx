"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "@/context/SidebarContext";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

function MobileSideBar() {
  const { isSideBarOpen, closeSidebar, setIsSideBarOpen } = useSidebarContext();
  const animationKey = isSideBarOpen ? "open" : "closed";

  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isDesktop) {
      setIsSideBarOpen(false);
    }
  }, [isDesktop, setIsSideBarOpen]);

  return (
    <div>
      <div className="md:hidden">
        <motion.div
          key={animationKey}
          className={`fixed top-0 right-0 w-full h-full z-50 bg-white overflow-hidden flex flex-col`}
          animate={{ opacity: isSideBarOpen ? 1 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            pointerEvents: isSideBarOpen ? "auto" : "none",
          }}
        >
          <div className="bg-primary-pink h-[7px] w-full"></div>
          <div className="flex-between mx-4 h-[100px]">
            <Link
              href="/"
              className="flex-center gap-x-2"
              onClick={closeSidebar}
            >
              <div className="overflow-hidden relative bg-white h-16 w-16 rounded-full relative border-2 border-primary-pink">
                <Logo />
              </div>
              <p className="text-base">
                La maison
                <br />
                de Nath & Lio
              </p>
            </Link>
            <button
              onClick={closeSidebar}
              className="bg-primary-pink p-4 rounded-full text-white mr-4"
              aria-label="close sidebar"
            >
              <FaTimes size={12} />
            </button>
          </div>
          <div className="flex-grow flex flex-col justify-between py-6 px-3  text-3xl">
            <div className="h-full w-full flex flex-col justify-center gap-y-8 mb-8 text-center">
              <Link href="/" className="block" onClick={closeSidebar}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Accueil
                </motion.div>
              </Link>
              <Link href="/visit" className="block" onClick={closeSidebar}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Visite virtuelle
                </motion.div>
              </Link>
              <Link href="/contact" className="block" onClick={closeSidebar}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Contacts
                </motion.div>
              </Link>
            </div>

            <div className="my-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="my-6 w-full mx-auto h-[1px] bg-primary-pink"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-2xl mb-8 text-center font-semibold">
                  Réservez votre logement
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex-center gap-x-8">
                  <a
                    href="https://www.airbnb.fr/rooms/1538049?guests=1&adults=1&viralityEntryPoint=1&s=76&fbclid=IwAR3vwyKI1XeVqDZkD4usFFJLKWq_wYjQTRqyeUQIy1SIO_CoNKgo7dBY7qc&source_impression_id=p3_1705500078_SuDxhqRB7qXYWthm"
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
                    href="https://www.homeexchange.fr/homes/view/182314?fbclid=IwAR0VxyxYx-Y4e6P46y0LSuroFONg_-FyY0kkrxhKR9menaFKYnBHVpz4h-E"
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MobileSideBar;

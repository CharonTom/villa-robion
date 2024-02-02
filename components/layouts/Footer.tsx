"use client";

import Link from "next/link";

import Logo from "../Logo";
import ReservationButton from "../ReservationButton";

import { useReservationContext } from "@/context/PanelContext";
import { useSidebarContext } from "@/context/SidebarContext";

function Footer() {
  const { openPanel } = useReservationContext();
  const { openSidebar } = useSidebarContext();

  const getYear = new Date().getFullYear();

  return (
    <footer className="p-4 md:px-8">
      <div className="my-8 md:my-16 w-full h-[1px] bg-primary-pink"></div>

      <div className="flex flex-col sm:flex-row py-4 justify-around">
        <div className="flex flex-col justify-center">
          <div className="flex justify-start items-center gap-x-4 relative">
            <Link href="/" className="flex-center gap-x-4">
              <div className="overflow-hidden bg-white  h-24 w-24 lg:h-28 lg:w-28 rounded-full relative border-2 border-primary-pink">
                <Logo />
              </div>
              <p className="text-xl">
                La maison
                <br />
                de Nath & Lio.
              </p>
            </Link>
          </div>
          <div className="w-fit">
            <div className="relative mt-4">
              <ReservationButton openPanel={openPanel} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row sm:justify-center p-4 gap-8  md:gap-15 lg:gap-20">
          <nav className="links-list">
            <h3 className="mb-2 md:text-[34px]">Liens</h3>
            <ul className="text-gray-500">
              <li className="w-fit">
                <Link href="/contact" className="p-1 block">
                  Contactez-nous
                </Link>
              </li>

              <li className="w-fit">
                <Link href="/visit" className="p-1 block">
                  Visite virtuelle
                </Link>
              </li>
              <li className="w-fit">
                <button
                  className="text-center md:hidden p-1"
                  onClick={openSidebar}
                >
                  Réservez
                </button>
                <button
                  className="text-center md:block hidden p-1"
                  onClick={openPanel}
                >
                  Réservez
                </button>
              </li>
              <li className="w-fit">
                <Link href="/" className="p-1 block">
                  Accueil
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="links-list">
            <h3 className="mb-2 md:text-[34px]">Contacts</h3>
            <ul className="text-gray-500">
              <li className="w-fit">
                <a href="tel:+33621042123" className="p-1 block">
                  <div>Lionel : 06.10.36.13.38</div>
                </a>
              </li>
              <li className="w-fit">
                <a href="tel:+33621042123" className="p-1 block">
                  <div>Nathalie : 06.12.23.31.71</div>
                </a>
              </li>
              <li className="w-fit">
                <a href="mailto:charon.s.tom@gmail.com" className="p-1 block">
                  <div>nathrobion@gmail.com</div>
                </a>
              </li>
              <li className="w-fit">
                <a href="mailto:charon.s.tom@gmail.com" className="p-1 block">
                  <div>lnrobion@gmail.com</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-4 md:mt-14 text-center text-gray-500 text-base">
        {getYear}&copy; Site fully handcrafted by
        <a
          href="https://tom-website-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-pink"
        >
          {" "}
          Tom Charon.
        </a>{" "}
        All rights reserved
      </div>
    </footer>
  );
}

export default Footer;

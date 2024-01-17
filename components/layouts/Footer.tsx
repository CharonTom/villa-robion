"use client";

import React from "react";
import Logo from "../Logo";
import { useReservationContext } from "@/context/NavBar";
import ReservationButton from "../ReservationButton";
import Link from "next/link";

function Footer() {
  const { openPanel } = useReservationContext();
  return (
    <footer className="">
      <div className="text-center text-[34px] p-10 w-[80%] mx-auto">
        <p className="py-8">
          Besoin d’informations supplémentaires ? N&apos;hésitez pas à me
          contacter si vous avez la moindre question ou demande.
        </p>
        <div>adressmai@.com</div>
        <div>Nathaie Simon : 06.12.1254.54</div>
      </div>
      <div className="my-16 w-full h-[1px] bg-primary-pink"></div>

      {/* Links & Copyrights */}

      <div className="flex py-4 ml-32">
        <div className="flex-col">
          <div className="flex justify-start items-center gap-x-6 relative">
            <Link href="/">
              <div className="overflow-hidden bg-white h-28 w-28 rounded-full relative border-2 border-primary-pink">
                <Logo />
              </div>
            </Link>
            <p className="w-[40%]">
              Séjourner dans une villa au sein du parc régional du Luberon.
            </p>
          </div>
          <div className="absolute mt-10 ml-3">
            <ReservationButton openPanel={openPanel} />
          </div>
        </div>
        <div className="flex justify-center p-4 gap-x-20">
          <nav className="links-list">
            <h3 className="mb-2">Liens</h3>
            <ul className="text-gray-500">
              <Link href="/contact">
                <li> Contactez-nous</li>
              </Link>
              <Link href="/visit">
                <li>Visite Virtuelle</li>
              </Link>
              <li>
                <button onClick={openPanel}>Réserver</button>
              </li>
              <Link href="/">
                <li>Accueil</li>
              </Link>
            </ul>
          </nav>
          <nav className="links-list">
            <h3 className="mb-2">Contacts</h3>
            <ul className="text-gray-500">
              <li>
                <Link href="tel:+33621042123">
                  <div>Nathalie Simon : 06.12.54.54</div>
                </Link>
              </li>
              <li>
                <Link href="tel:+33621042123">
                  <div>Lionel Charon : 06.12.14.54</div>
                </Link>
              </li>
              <li>
                <Link href="mailto:charon.s.tom@gmail.com">
                  <div>adressmai@uiu.com</div>
                </Link>
              </li>
              <li>
                <Link href="mailto:charon.s.tom@gmail.com">
                  <div>adressmai@dd.com</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-16 p-6 text-center text-gray-500">
        © 2023 Site handcrafted by Tom Charon. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;

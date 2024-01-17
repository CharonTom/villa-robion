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
        <nav className="links-list w-fit mx-auto">
          <ul className="text-gray-500">
            <li>
              <a href="tel:+33621042123">
                <div>Lionel : 06.12.14.54</div>
              </a>
            </li>
            <li>
              <a href="tel:+33621042123">
                <div>Nathalie : 06.12.54.54</div>
              </a>
            </li>
            <li>
              <a href="mailto:charon.s.tom@gmail.com">
                <div>nathrobion@gmail.com</div>
              </a>
            </li>
            <li>
              <a href="mailto:charon.s.tom@gmail.com">
                <div>lnrobion@gmail.com</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="my-16 w-[90%] mx-auto h-[1px] bg-primary-pink"></div>

      {/* Links & Copyrights */}

      <div className="flex py-4 justify-around">
        <div className="flex-col">
          <div className="flex justify-start items-center gap-x-4 relative">
            <Link href="/" className="flex-center gap-x-4">
              <div className="overflow-hidden bg-white h-28 w-28 rounded-full relative border-2 border-primary-pink">
                <Logo />
              </div>
              <p className="text-xl">
                La maison
                <br />
                de Nath & Lio.
              </p>
            </Link>
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
                <a href="tel:+33621042123">
                  <div>Lionel : 06.12.14.54</div>
                </a>
              </li>
              <li>
                <a href="tel:+33621042123">
                  <div>Nathalie : 06.12.54.54</div>
                </a>
              </li>
              <li>
                <a href="mailto:charon.s.tom@gmail.com">
                  <div>nathrobion@gmail.com</div>
                </a>
              </li>
              <li>
                <a href="mailto:charon.s.tom@gmail.com">
                  <div>lnrobion@gmail.com</div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-16 p-6 text-center text-gray-500">
        © 2023 Site fully handcrafted by
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

import React from "react";
import Logo from "../Logo";
import { useReservationContext } from "@/context/NavBar";

function Footer() {
  const { openPanel } = useReservationContext();
  return (
    <footer className="">
      <div className="text-center text-[32px] p-10 w-[80%] mx-auto">
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
          <div className="flex justify-start items-start gap-x-8">
            <div className="bg-white h-28 w-28 rounded-full relative border-2 border-primary-pink">
              <Logo />
            </div>
            <p className="w-[40%]">
              Séjourner dans une villa au sein du parc régional du Luberon.
            </p>
          </div>
          <div className="border-2 border-black"></div>
        </div>
        <div className="flex justify-center p-4 gap-x-16">
          <nav>
            <h3 className="mb-2">Liens :</h3>
            <ul className="text-gray-500">
              <li className="">Accueil</li>
              <li>Réserver</li>
              <li>Visite Virtuelle</li>
              <li>Contactez-nous</li>
            </ul>
          </nav>
          <div>
            <h3 className="mb-2">Contacts :</h3>
            <div className="text-gray-500">
              <div>adressmai@uiu.com</div>
              <div>adressmai@dd.com</div>
              <div>Nathalie Simon : 06.12.1254.54</div>
              <div>Lionel Charon : 06.12.1254.54</div>
              <div>84440 Robion, France</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 p-6 text-center text-gray-500">
        © 2023 Site handcrafted by Tom Charon. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <div className="container mx-auto">
      <div className="text-center text-[32px] p-10 w-[80%] mx-auto">
        <p className="py-8">
          Besoin d’informations supplémentaires ? N&apos;hésitez pas à me
          contacter si vous avez la moindre question ou demande.
        </p>
        <div>adressmai@.com</div>
        <div>Nathaie Simon : 06.12.1254.54</div>
      </div>
      <div className="my-4 w-full h-[1px] bg-primary-pink"></div>

      {/* Links & Copyrights */}

      <div className="flex-between  p-10">
        <div className="w-1/2 flex-center gap-4">
          <div className="bg-primary-pink h-28 w-28 rounded-full"></div>
          <p className="w-[40%]">
            Séjourner dans une villa au sein du parc régional du Luberon.
          </p>
        </div>
        <div className="w-1/2 flex items-start justify-around">
          <nav>
            <h3 className="mb-2">Liens :</h3>
            <ul className="text-gray-500">
              <li className="">Accueil</li>
              <li>Réserver</li>
              <li>Visite Virtuelle</li>
              <li>Nous Contacter</li>
            </ul>
          </nav>
          <div>
            <h3 className="mb-2">Contacts :</h3>
            <div className="text-gray-500">
              <div>adressmai@.com</div>
              <div>Nathaie Simon : 06.12.1254.54</div>
              <div>84440 Robion, France</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 text-center text-gray-500">
        © 2023 Site handcrafted by Tom Charon. All rights reserved
      </div>
    </div>
  );
}

export default Footer;

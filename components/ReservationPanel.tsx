"use client";

// Importez le composant d'icône que vous utilisez (par exemple, FaTimes pour Font Awesome)
import { useReservationContext } from "@/context/NavBar";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const ReservationPanel = () => {
  const { isOpen, closePanel } = useReservationContext();

  return (
    <>
      {/* Superposition sombre */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30"
          onClick={closePanel}
        />
      )}
      <div
        className={`fixed top-0 left-0 w-full pt-[105px] transition-transform ease-in-out duration-300 transform bg-white overflow-hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="h-[350px] px-10 py-4 gap-6 w-full flex-center overflow-hidden">
          {/* links */}
          <div className="flex flex-col w-1/2 h-full">
            <div className="mb-6">Faites votre réservation !</div>
            <div className="flex gap-4 h-full">
              <Link href="https://www.airbnb.fr/" className="w-1/2">
                <div className="relative h-[85%] ">
                  <Image
                    alt="airbnb"
                    src="/images/airbnb_image.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="text-base mt-2">Louer avec Airbnb</div>
              </Link>
              <Link href="https://www.homeexchange.fr/" className="w-1/2">
                <div className="relative h-[85%]">
                  <Image
                    alt="airbnb"
                    src="/images/homeExchange_image.jpg"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="text-base mt-2">
                  Echanger avec Home Exchange
                </div>
              </Link>
            </div>
          </div>
          {/* text */}
          <div className="w-1/2 h-full flex flex-col justify-center">
            <p className="w-[70%] p-4 text-sm md:text-base lg:text-xl ">
              Vous avez la possibilité de louer ou bien faire un échange de
              maison. Réservez dès maintenant pour vivre une expérience
              authentique et chaleureuse dans notre maison. Bienvenue chez nous!
            </p>
          </div>
        </div>
        {/* close */}
        <button
          onClick={closePanel}
          className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </>
  );
};

export default ReservationPanel;

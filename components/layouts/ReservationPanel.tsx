"use client";

import { useReservationContext } from "@/context/PanelContext";
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
          className="hidden md:block fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40"
          onClick={closePanel}
        />
      )}

      {/* Desktop version */}
      <div className="hidden md:block">
        <div
          className={`fixed top-0 left-0 w-full pt-[105px] transition-transform ease-in-out duration-300 transform bg-white overflow-hidden z-40 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-8 relative">
            <div className="text-[34px] mb-2 lg:mb-4">
              Faites votre réservation !
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-x-10">
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
                <p className="text-base lg:text-xl px-2">
                  Vous avez la possibilité de louer ou faire un échange de
                  maison. Réservez dès maintenant pour vivre une expérience
                  authentique et chaleureuse dans notre maison. Bienvenue chez
                  nous!
                </p>
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <div className="flex gap-4">
                  <a
                    href="https://www.airbnb.fr/rooms/1538049?guests=1&adults=1&viralityEntryPoint=1&s=76&fbclid=IwAR3vwyKI1XeVqDZkD4usFFJLKWq_wYjQTRqyeUQIy1SIO_CoNKgo7dBY7qc&source_impression_id=p3_1705500078_SuDxhqRB7qXYWthm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        alt="airbnb"
                        src="/images/airbnb_image.webp"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                      />
                      <div className="rounded-xl absolute inset-0 bg-primary-pink opacity-0 transition-opacity duration-100 group-hover:opacity-70"></div>
                    </div>
                    <div className="text-base mt-2 group-hover:text-primary-pink">
                      Louer avec Airbnb
                    </div>
                  </a>
                  <a
                    href="https://www.homeexchange.fr/homes/view/182314?fbclid=IwAR0VxyxYx-Y4e6P46y0LSuroFONg_-FyY0kkrxhKR9menaFKYnBHVpz4h-E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        alt="airbnb"
                        src="/images/homeExchange_image.webp"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 30vw"
                        style={{ objectFit: "cover" }}
                        className="rounded-xl"
                      />
                      <div className="rounded-xl absolute inset-0 bg-primary-pink opacity-0 transition-opacity duration-100 group-hover:opacity-60"></div>
                    </div>
                    <div className="text-base mt-2 group-hover:text-primary-pink">
                      Echanger avec Home Exchange
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={closePanel}
              className="absolute bottom-3 right-6 bg-primary-pink p-3 rounded-full text-white"
            >
              <FaTimes size={12} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile version */}
    </>
  );
};

export default ReservationPanel;

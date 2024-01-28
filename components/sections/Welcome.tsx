"use client";

import { useEffect, useState } from "react";
import ReservationButton from "../ReservationButton";
import ScrollDown from "../ScrollDown";

import { useReservationContext } from "@/context/PanelContext";

function Welcome() {
  const { openPanel } = useReservationContext();
  const [videoKey, setVideoKey] = useState(0);
  useEffect(() => {
    // Fonction pour forcer le rechargement de la vidéo
    const forceReload = () => {
      setVideoKey((prevKey) => prevKey + 1);
    };

    // Appeler la fonction lorsqu'il est nécessaire de forcer le rechargement
    forceReload();

    // Nettoyer la fonction après le montage du composant
    return () => {
      // Ajoutez d'autres nettoyages si nécessaire
    };
  }, []);

  return (
    <section className="h-screen w-full">
      <video
        key={videoKey}
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-full object-cover brightness-75"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="mx-4 md:mx-8 lg:mx-14 absolute top-[16%] md:top-1/2 md:-translate-y-1/2 w-[75%] md:w-[65%]">
        <h1 className="text-white leading-tight tracking-tight [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)] lg:text-[88px] md:text-[68px] sm:text-[48px] text-[40px]">
          Séjourner dans une villa au sein du Parc régional du Luberon.
        </h1>
      </div>

      <div className="absolute bottom-10 right-0 mx-4 md:mx-8 lg:mx-14">
        <ReservationButton openPanel={openPanel} />
      </div>

      <ScrollDown />
    </section>
  );
}

export default Welcome;

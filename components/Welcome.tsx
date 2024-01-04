import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useReservationContext } from "@/context/NavBar";

function Welcome() {
  const { openPanel } = useReservationContext();

  return (
    <section className="h-screen w-full">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-[20%] left-[3%] w-[60%]">
        <h1 className="text-white leading-tight tracking-tight">
          Séjourner dans une villa au sein du parc régional du Luberon.
        </h1>
      </div>
      <button
        onClick={openPanel}
        className="absolute bottom-10 right-10 text-white text-[36px]"
      >
        Réserver votre séjour
      </button>

      <Link
        smooth={true}
        to="presentation"
        duration={500}
        className="cursor-pointer group absolute bottom-3 right-1/2 translate-x-1/2 text-white flex-center flex-col py-3 "
      >
        <p className="">scroll down</p>
        <FaAnglesDown className="anim-icon" />
      </Link>
    </section>
  );
}

export default Welcome;

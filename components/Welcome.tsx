import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useReservationContext } from "@/context/NavBar";
import ReservationButton from "./ReservationButton";

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
        <h1 className="text-white leading-tight tracking-tight [text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          Séjourner dans une villa au sein du parc régional du Luberon.
        </h1>
      </div>

      <div className="absolute bottom-10 right-20">
        <ReservationButton openPanel={openPanel} />
      </div>

      <Link
        smooth={true}
        to="presentation"
        duration={500}
        className="cursor-pointer group absolute bottom-3 right-1/2 translate-x-1/2 text-white flex-center flex-col py-3 "
      >
        <p className="[text-shadow:_3px_3px_3px_rgb(0_0_0_/_70%)]">
          scroll down
        </p>
        <FaAnglesDown className="anim-icon" />
      </Link>
    </section>
  );
}

export default Welcome;

"use client";

import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

function BgVideo() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <source src="/bgvid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-[40%] left-[1%] w-[70%]">
        <h1 className="text-white leading-tight tracking-tight">
          Séjourner dans une villa au sein du parc régional du Luberon
        </h1>
      </div>
      <div className="absolute bottom-10 right-10 text-white text-[36px]">
        Réserver votre séjour
      </div>

      <Link
        smooth={true}
        to="presentation"
        duration={500}
        className="cursor-pointer group absolute bottom-3 right-1/2 translate-x-1/2 text-white flex-center flex-col "
      >
        <p className="">scroll down</p>
        <FaAnglesDown className="anim-icon" />
      </Link>
    </div>
  );
}

export default BgVideo;

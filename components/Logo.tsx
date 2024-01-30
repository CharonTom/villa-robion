import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logo.webp"
      fill
      alt="Logo de notre maison de robion"
      className="object-contain"
    />
  );
}

export default Logo;

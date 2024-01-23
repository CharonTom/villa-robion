import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logo.webp"
      fill
      alt="logo"
      sizes="auto"
      className="object-contain"
      loading="eager"
    />
  );
}

export default Logo;

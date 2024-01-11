import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logo.png"
      fill
      style={{ objectFit: "contain" }}
      alt="logo"
    />
  );
}

export default Logo;

import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Image
      src="/images/logotest.png"
      fill
      style={{ objectFit: "contain" }}
      alt="logo"
      unoptimized={true}
    />
  );
}

export default Logo;
